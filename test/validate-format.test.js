const { equal } = require('assert');
const { executeActionOnFile } = require('./extensions/file');
const { imageFormatIsValid }  = require('../image-handling');

describe('Validate format', function() {
    it('Should accept PNG files', () => {
        executeActionOnFile('./test/files/test.png', buffer => {
            equal(imageFormatIsValid(buffer), true, 'png file is being invalidated');
        })
    });

    it('Should accept JPG files', () => {
        executeActionOnFile('./test/files/test.jpg', buffer => {
            equal(imageFormatIsValid(buffer), true, 'jpg file is being invalidated');
        })
    });

    it('Should not accept other file formats', () => {
        executeActionOnFile('./test/files/other.stuff', buffer => {
            equal(imageFormatIsValid(buffer), false, 'other file formats are not being filtered');
        })
    });
});


