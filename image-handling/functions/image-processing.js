const Sharp = require('sharp');

const sizes = {
    big : { width: 400, height: 300},
    medium : { width: 160, height: 120},
    small : { width: 120, height: 120}
}

const resizeImage = (data, size) => Sharp(data)
    .resize(size.width, size.height)
    .toFormat('png')
    .toBuffer();

function processImage(data) {
    return {
        asBig: () => resizeImage(data, sizes.big),
        asMedium: () => resizeImage(data, sizes.medium),
        asSmall: () => resizeImage(data, sizes.small)
    };
}

module.exports = { processImage };