export type launchType = {
  id?: string | undefined;
  missionName?: string;
  rocketName?: string;
  imageSmall?: string;
  image?: string;
  details?: string;
};

export type serverLaunchType = {
  mission_name: string;
  rocket: {
    rocket_name: string;
  };
  links: {
    mission_patch_small: string;
    mission_patch: string;
  };
  details: string;
};
