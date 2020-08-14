const { CLIENT_RENEG_LIMIT } = require('tls');
 const Buffer = fs.readFile(process.argv[2]);
 const str = Buffer.toString();
 const lines = str.split('\n').length -1 ;
 console.log(lines);
 console.log("add")