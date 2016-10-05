#!/usr/bin/env node

var logger = require('./lib/logger.js');
var socketlabs = require('./lib/socketlabs.js');

var callback = function(error, data) {
  if (error) {
    logger.error(error);
  } else {
    logger.debug(data);
  }
};

socketlabs.checkAccountData(callback);
