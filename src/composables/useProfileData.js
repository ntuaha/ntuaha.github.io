import profileData from '../data/profile.json';
import profileImage from '../assets/aha.jpg';

export function useProfileData() {
  return {
    ...profileData,
    personal: {
      ...profileData.personal,
      profileImage
    }
  };
}
