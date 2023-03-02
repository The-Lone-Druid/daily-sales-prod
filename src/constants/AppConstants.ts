const envConstants = {
  DEV: "dev",
  PROD: "prod"
};

const getEnvironmentVariables = () => {
  if (process.env.MODE === envConstants.DEV) {
    return {
      NEXT_ENV: process.env.NEXT_DEV_mode
    };
  } else if (process.env.MODE === envConstants.PROD) {
    return {
      NEXT_ENV: process.env.NEXT_PROD_mode
    };
  } else {
    return {};
  }
};

export const Constants = getEnvironmentVariables();
