function SummerText(file){
  this.fileContents = []
  this.fileName = file
}
SummerText.prototype.readFileASync= async function (file){
  try{
    const streamedFile = fs.createReadStream(process.cwd()+'/'+file).on('error', (err)=>{
      console.log('There is no file at supplied path ' + err.path)
    })

    const lines = this.readFileLines(streamedFile)
        this.fileContents.push(Number(line) || 0)
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
module.exports = SummerText;
