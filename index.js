const commandLineArgs = require('command-line-args')
const commandLineOptionDefinitions = [
  {
    name: 'src',
    type: String,
    multiple: false,
    defaultOption: true
  }
]
const file = commandLineArgs(commandLineOptionDefinitions).src
const SummerText = new require('./SummerText')
new SummerText(file)
