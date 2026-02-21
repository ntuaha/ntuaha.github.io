import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const DATA_MD_PATH = path.join(ROOT, 'data.md');
const OUTPUT_PATH = path.join(ROOT, 'src', 'data', 'profile.json');

const REQUIRED_SECTIONS = [
  'personal',
  'about',
  'stats',
  'experience',
  'publications',
  'patents',
  'contact',
  'navigation',
  'sources'
];

function fail(message) {
  console.error(`[data:build] ${message}`);
  process.exit(1);
}

function parseFrontMatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    fail('Missing front matter block in data.md');
  }

  const raw = match[1].split('\n').filter(Boolean);
  const frontMatter = {};

  for (const line of raw) {
    const idx = line.indexOf(':');
    if (idx < 1) {
      fail(`Invalid front matter line: ${line}`);
    }
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    frontMatter[key] = value;
  }

  return {
    frontMatter,
    body: content.slice(match[0].length)
  };
}

function parseSections(body) {
  const sectionRegex = /^##\s+([a-zA-Z0-9_-]+)\n```json\n([\s\S]*?)\n```\n?/gm;
  const sections = {};
  let match;

  while ((match = sectionRegex.exec(body)) !== null) {
    const key = match[1].trim();
    const jsonBlock = match[2];
    try {
      sections[key] = JSON.parse(jsonBlock);
    } catch (error) {
      fail(`Invalid JSON in section "${key}": ${error.message}`);
    }
  }

  return sections;
}

function validate(frontMatter, sections) {
  const requiredMeta = ['subject_name', 'last_verified', 'version'];
  for (const field of requiredMeta) {
    if (!frontMatter[field]) {
      fail(`Missing front matter field: ${field}`);
    }
  }

  for (const key of REQUIRED_SECTIONS) {
    if (!(key in sections)) {
      fail(`Missing required section: ${key}`);
    }
  }

  if (typeof sections.personal !== 'object' || Array.isArray(sections.personal)) {
    fail('Section "personal" must be an object');
  }

  const sources = sections.sources;
  if (!Array.isArray(sources) || sources.length === 0) {
    fail('Section "sources" must be a non-empty array');
  }

  const sourceIds = new Set();
  for (const source of sources) {
    if (!source?.id || !source?.url) {
      fail('Each source must include id and url');
    }
    sourceIds.add(source.id);
  }

  const checkSourceRefs = (items, sectionName) => {
    if (!Array.isArray(items)) return;
    for (const item of items) {
      const ids = item?.sourceId
        ? (Array.isArray(item.sourceId) ? item.sourceId : [item.sourceId])
        : [];
      for (const id of ids) {
        if (!sourceIds.has(id)) {
          fail(`Invalid sourceId "${id}" in section "${sectionName}"`);
        }
      }
    }
  };

  checkSourceRefs(sections.experience, 'experience');
  checkSourceRefs(sections.publications, 'publications');
  checkSourceRefs(sections.patents, 'patents');
}

async function main() {
  const content = await readFile(DATA_MD_PATH, 'utf8');
  const { frontMatter, body } = parseFrontMatter(content);
  const sections = parseSections(body);

  validate(frontMatter, sections);

  const profile = {
    meta: frontMatter,
    personal: sections.personal,
    about: sections.about,
    stats: sections.stats,
    experience: sections.experience,
    publications: sections.publications,
    patents: sections.patents,
    contact: sections.contact,
    navigation: sections.navigation,
    sources: sections.sources
  };

  await writeFile(OUTPUT_PATH, `${JSON.stringify(profile, null, 2)}\n`, 'utf8');
  console.log('[data:build] Generated src/data/profile.json from data.md');
}

main().catch((error) => {
  fail(error.message);
});
