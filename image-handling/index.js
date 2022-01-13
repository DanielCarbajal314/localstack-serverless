const { processImage } = require('./functions/image-processing');
const { fileSizeIsValid } = require('./functions/validate-file-size');
const { imageFormatIsValid } = require('./functions/validate-format');

module.exports = {
    processImage,
    fileSizeIsValid,
    imageFormatIsValid
};