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

  const {
    publisher: { name = config },
  } = config;
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

  console.log(`${user.firstName} ${user.lastName} lives in ${user.adress.city}, ${user.adress.country}.`);
}

module.exports = {
  getConfig,
  logInfos,
};
