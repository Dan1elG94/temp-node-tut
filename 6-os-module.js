// OS build-in module
const os = require('os');

// info about user
const user = os.userInfo();
// console.log(user);

// system uptime in seconds
const systemUptime = os.uptime();
// console.log(systemUptime);

// info aobut current os
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
