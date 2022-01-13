const { equal } = require('assert');
const { executeActionOnFile } = require('./extensions/file');
const { fileSizeIsValid, processImage }  = require('../image-handling');

describe('Transform Files', function() {
    it('Should transform big files', () => {
        executeActionOnFile('./test/files/test.jpg', buffer => {
            processImage(buffer)
                .asBig()
                .then(file => {
                    equal(fileSizeIsValid(file), false, 'Big file format is not being generated');
                });
        });
    });

    it('Should transform medium files', () => {
        executeActionOnFile('./test/files/test.jpg', buffer => {
            processImage(buffer)
                .asMedium()
                .then(file => {
                    equal(fileSizeIsValid(file), false, 'Medium file format is not being generated');
                });
        });
    });

    it('Should transform small files', () => {
        executeActionOnFile('./test/files/test.jpg', buffer => {
            processImage(buffer)
                .asSmall()
                .then(file => {
                    equal(fileSizeIsValid(file), false, 'Small file format is not being generated');
                });
        });
    });
});