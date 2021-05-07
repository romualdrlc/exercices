function getConfig(config = {}) {
  const defaultConfig = {
    user: {
      name: "root",
      password: "admin",
    },
    hardware: {
      CPUThreads: 4,
      memory: 2,
      diskSpace: 20,
    },
  };

  const user = {
    ...config,
    hardware: {
      ...config.hardware,
      memory: 2,
      diskSpace: 20,
    },
  };
  return user;
}

function logInfos(user = {}) {
  const redactedUser = {
    firstName: "<REDACTED>",
    lastName: "<REDACTED>",
    address: {
      city: "<REDACTED>",
      country: "<REDACTED>",
    },
  };

  let {
    firstName,
    lastName,
    address: { city, country },
  } = user; // Change here
  const newUser = {
    ...user,
    address: {
      ...user.address,
    },
  };
  console.log(`${newUser.firstName} ${newUser.lastName} lives in ${newUser.address.city}, ${newUser.address.country}.`);
}

module.exports = {
  getConfig,
  logInfos,
};
