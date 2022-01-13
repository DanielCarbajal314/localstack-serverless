const { equal } = require('assert');
const { executeActionOnFile } = require('./extensions/file');
const { fileSizeIsValid }  = require('../image-handling');

describe('Validate file size', function() {
    it('Should not accet big files', () => {
        executeActionOnFile('./test/files/tooBigFile.jpg', buffer => {
            equal(fileSizeIsValid(buffer), false, 'Big size file is not being filter (More than 5Mb)');
        })
    });
    it('Should accept PNG files', () => {
        executeActionOnFile('./test/files/sizeOkFile.jpg', buffer => {
            equal(fileSizeIsValid(buffer), true, 'Ok size file is being filter (Less than 5Mb)');
        })
    });
});

