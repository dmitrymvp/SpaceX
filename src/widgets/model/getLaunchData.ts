import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import type { serverLaunchType } from '../types/launchTypes';

export const getLaunchData = async () => {
  try {
    const response = await axios.get(
      'http://api.spacexdata.com/v3/launches?launch_year=2020',
    );

    return response.data.map((item: serverLaunchType) => ({
      id: uuidv4(),
      missionName: item.mission_name,
      rocketName: item.rocket.rocket_name,
      imageSmall: item.links.mission_patch_small,
      image: item.links.mission_patch,
      details: item.details,
    }));
  } catch {
    console.error('Error');
  }
};
