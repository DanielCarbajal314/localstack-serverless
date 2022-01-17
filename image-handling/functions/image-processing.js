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

const processImage = (data) => Promise.all([
    resizeImage(data, sizes.big),
    resizeImage(data, sizes.medium),
    resizeImage(data, sizes.small)
]).then(results => {
    const [ big, medium, small ] = results;
    return { big, medium, small };
});

module.exports = { processImage };