const { imageFormatIsValid, fileSizeIsValid } = require('./image-handling');

module.exports.hello = async (event) => {
  const fileContent = event.isBase64Encoded ? Buffer.from(event.body, 'base64') : event.body;
  const formatIsValid = imageFormatIsValid(fileContent);
  const sizeIsValid = fileSizeIsValid(fileContent);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v2.0! Your function executed successfully!',
        input: { formatIsValid, sizeIsValid, isBase64Encoded: event.isBase64Encoded},
      },
      null,
      2
    ),
  };
};
