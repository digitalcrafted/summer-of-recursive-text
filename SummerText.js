const fs = require('fs');
const process = require('process');
const readline = require('readline');
function SummerText(file) {
  this.fileContents = []
  this.fileName = file
  this.fileSum = 0
  this.readFileASync(file).then(() => {
    this.fileSum = this.sumLines(this.fileContents)
    console.table({'file_name': this.fileName, result: this.fileSum})
  })
}
SummerText.prototype.readFileASync= async function (file){
  try{
    const streamedFile = fs.createReadStream(process.cwd()+'/'+file).on('error', (err)=>{
      console.log('There is no file at supplied path ' + err.path)
    })

    const lines = this.readFileLines(streamedFile)
    for await (const line of lines) {
      if(this.testLineForFile(line)){
        await this.readFileASync(line)
      } else {
        this.fileContents.push(Number(line) || 0)
      }
    }
  } catch (err){
    console.log(err)
  }
}
SummerText.prototype.readFileLines= function (stream){
  return readline.createInterface({
    input: stream,
    crlfDelay: Infinity
  });
}
SummerText.prototype.testLineForFile= function (line){
  return isNaN(Number(line)) && line.split('.').includes('txt')
}
SummerText.prototype.sumLines= function (array){
  return array.reduce(function (accumulator, current) {
    return accumulator + current;
  })
}

module.exports = SummerText;
