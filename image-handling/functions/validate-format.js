const isJpg = (buffer) => {
    if (!buffer || buffer.length < 3) {
        return false;
    }
    
    return buffer[0] === 255
        && buffer[1] === 216
        && buffer[2] === 255;
}

const isPng = (buffer) => {
    if (!buffer || buffer.length < 8) {
		return false;
	}

	return buffer[0] === 0x89
		&& buffer[1] === 0x50
		&& buffer[2] === 0x4E
		&& buffer[3] === 0x47
		&& buffer[4] === 0x0D
		&& buffer[5] === 0x0A
		&& buffer[6] === 0x1A
		&& buffer[7] === 0x0A;
}

function imageFormatIsValid(image){
    return isJpg(image) || isPng(image)
}

module.exports = { imageFormatIsValid };