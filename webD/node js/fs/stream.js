const fs = require('fs');

const readStream = fs.createReadStream(".fs/hemant.txt")
const writeStream = fs.createWriteStream("./output.txt")

readStream.pipe(writeStream,()=>{
    console.log("Data is written");
})