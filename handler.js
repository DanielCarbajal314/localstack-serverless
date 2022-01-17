const { imageFormatIsValid, fileSizeIsValid, processImage } = require('./image-handling');
const { savePNGImageToS3, buildSuccesResponse, buildBadRequestResponse} = require('./aws');

module.exports.hello = async (event) => {
  const fileContent = event.isBase64Encoded ? Buffer.from(event.body, 'base64') : event.body;
  const validation = validateRequest(fileContent);
  if (validation.hasErrors) {
    return buildBadRequestResponse(validation.errors);
  }
  const urls = await uploadFileThumbnails(fileContent);
  return buildSuccesResponse(urls);
};

function validateRequest(fileContent){
  const formatIsValid = imageFormatIsValid(fileContent);
  const sizeIsValid = fileSizeIsValid(fileContent);
  if ( !formatIsValid || !sizeIsValid ) {
    const errors = [
      formatIsValid? '' : 'Only PNG and JPG formats are allowed',
      sizeIsValid? '' : 'Only files under 5mbs are allowed',
    ].filter(x => x !== '') ;
    return { hasErrors: true, errors };
  } else {
    return { hasErrors: false };
  }
}

async function uploadFileThumbnails(fileContent) {
  const resizedImages = await processImage(fileContent);
  return await Promise.all([
    savePNGImageToS3(resizedImages.big),
    savePNGImageToS3(resizedImages.medium),
    savePNGImageToS3(resizedImages.small)
  ]).then(results=>{
    const [ big, medium, small ] = results.map(x => x.url);
    return { big, medium, small }
  })
}