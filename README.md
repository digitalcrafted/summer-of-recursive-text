##Summer of Recursive Text
This is a hypothetical exploration of _summing_ numbers recursively in a text file (summer of text 🤔) and printing the result

- The summer function receives as input the path to a single file. Each line of the file will contain either a number or a relative path to another file.

- For each file processed, the result printed will included the file path and the sum of all of the numbers contained both directly in the file and in any of the sub files listed in the file (and their sub files, etc).

<hr>

### Deploy Instructions
- clone or copy the project into a directory of your choice
- `cd` into the project directory
- run `npm install` to fetch the libraries used in the project
- make sure you have node version >11.x installed
- copy files you would like to process into the project directory
- run `node index.js --src filename.txt`
- the results would be printed in a table in the console
- see `package.json` for libraries added via npm and other project details

