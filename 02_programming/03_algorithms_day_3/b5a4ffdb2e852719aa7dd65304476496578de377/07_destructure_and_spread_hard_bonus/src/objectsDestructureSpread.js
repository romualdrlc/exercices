function getConfig(config) {
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
  const updatedUser = {
    ...config,
    hardware: {
      ...config.hardware,
      memory: 2,
      diskSpace: 20,
    },
  };
  return updatedUser;
}

function logInfos(user) {
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

  const toto = Object.assign({}, redactedUser, user);

  console.log(`${toto.firstName} ${toto.lastName} lives in ${toto.address.city}, ${toto.address.country}.`);
}

module.exports = {
  getConfig,
  logInfos,
};
