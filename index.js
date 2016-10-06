#!/usr/bin/env node

var program = require('commander');
var logger = require('./lib/logger.js');
var socketlabs = require('./lib/socketlabs.js');

program.option('-u, --username <username>', 'API username')
  .option('-p, --password <password>', 'API password')
  .option('-s --serverids <servers-ids>', 'Comma-separated server IDs')
  .parse(process.argv);

socketlabs.checkAccountData(program.username, program.password,
  (program.serverids == null ? null : program.serverids.split(',')), callback);

var callback = function(error, data) {
  if (error) {
    logger.error(error);
  } else {
    logger.debug(data);
  }
};
