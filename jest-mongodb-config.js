/* Configuration for jest-mongodb */

module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'testing',
    },
    binary: {
      version: '4.2.3',
      skipMD5: true,
    },
    autoStart: false,
  },
};
