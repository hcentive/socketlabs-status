#!/usr/bin/env node

var program = require('commander');
var logger = require('./lib/logger.js');
var socketlabs = require('./lib/socketlabs.js');

program.option('-u, --username <username>', 'API username')
  .option('-p, --password <password>', 'API password')
  .option('-s --serverid <serverid>', 'Server ID')
  .parse(process.argv);

socketlabs.checkAccountData(program.username, program.password,
  (program.serverid == null ? null : program.serverid), callback);

var callback = function(error, data) {
  if (error) {
    logger.error(error);
  } else {
    logger.debug(data);
  }
};
