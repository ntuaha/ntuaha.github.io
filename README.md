# 更新

網站連結：<https://ntuaha.github.io/>

## 手動更新與部署流程

1. 更新資料來源：`data.md`
2. 建置網站（會自動把 `data.md` 轉成 `src/data/profile.json`）：

```bash
npm run build
```

3. 提交與推送：

```bash
git add data.md src/data/profile.json README.md
git commit -m "chore: update site data"
git push origin codex/init
```

4. 部署到 GitHub Pages：

```bash
npm run deploy
```

## 一鍵發布（可選）

```bash
npm run publish
```
