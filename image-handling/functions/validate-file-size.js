const fileSizeLimit = 5242880;

function fileSizeIsValid(file){
    return Buffer.byteLength(file) <= fileSizeLimit;
}

module.exports = { fileSizeIsValid };