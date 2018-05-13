const chalk = require('chalk');

function err(error, safe = false) {
  console.log(chalk`{bgRed [ {bold ERRO} ]} ${error.toString()} {grey ${safe ? 'exiting' : 'throwing'}}`);
  console.trace();
  if (safe) process.exit(1);
    else throw error;
}

/*
  type: type: 'success' | 'warning' | 'warningHigh' | null <= default
  options = {
    includeTrace: Boolean
    more: any <= anything else that will also be logged
  }
*/
function log(msg, type = 'default', options = {}) {
  if (!msg) err('Trying to log with no message');
  let output;
  switch (type) {
    case 'success':
      output = chalk`[ {green INFO} ] `;
      break;
    case 'warning':
      output = chalk`[ {yellow WARN} ] `;
      break;
    case 'warningHigh':
      output = chalk`{bgYellow.black [ {bold WARN} ]} `;
      break;
    default:
      output = chalk`[ {blue INFO} ] `;
  }
  output += msg;
  console.log(output);
  if (options.more) console.log(chalk`         {grey Additional:} ${options.more}`);
  if (options.includeTrace) console.trace();
}

function lineBreak() {
  console.log();
}

module.exports = {
  err,
  log,
  lineBreak,
  chalk
};
