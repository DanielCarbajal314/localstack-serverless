import { readFile } from 'fs';

function executeActionOnFile (fileName, action) {
    return readFile(fileName, (err,data)=> action(data));
}

module.exports = { executeActionOnFile };