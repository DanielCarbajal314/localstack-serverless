const { equal } = require('assert');
const { executeActionOnFile } = require('./extensions/file');
const { fileSizeIsValid, processImage }  = require('../image-handling');

describe('Transform Files', function() {
    it('Should transform big files', () => {
        executeActionOnFile('./test/files/test.jpg', buffer => {
            processImage(buffer)
                .then(file => {
                    equal(fileSizeIsValid(file.big), false, 'Big file format is not being generated');
                });
        });
    });

    it('Should transform medium files', () => {
        executeActionOnFile('./test/files/test.jpg', buffer => {
            processImage(buffer)
                .then(file => {
                    equal(fileSizeIsValid(file.medium), false, 'Medium file format is not being generated');
                });
        });
    });

    it('Should transform small files', () => {
        executeActionOnFile('./test/files/test.jpg', buffer => {
            processImage(buffer)
                .then(file => {
                    equal(fileSizeIsValid(file.small), false, 'Small file format is not being generated');
                });
        });
    });
});