const fs = require('fs');
  fs.readFile(process.argv[2],function(err,contents){
    const str = contents.toString();
    const lines = str.split('\n').length -1 ;
    console.log(lines);
 });

