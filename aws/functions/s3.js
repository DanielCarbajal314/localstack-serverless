const { S3, Endpoint } = require('aws-sdk');
const { localStackPort, region, isLocalStack, bucketName } = require('../../settings');
const { createHash } = require('crypto');

const localstackConfiguration = {
    credentials: {
        accessKeyId: 'foobar',
        secretAccessKey: 'foobar',
    },
    region: region,
    endpoint: new Endpoint(`host.docker.internal:${localStackPort}`),
    s3ForcePathStyle: true
}

const awsConfiguration = {
    region: region
}

const buildS3connection = () => new S3(isLocalStack ? localstackConfiguration : awsConfiguration);

const getFileName = (hashSign) => isLocalStack ? 
    `http://localhost:${localStackPort}/${bucketName}/${hashSign}.png`:
    `https://${bucketName}.s3.${region}.amazonaws.com/${hashSign}.png`;

const  savePNGImageToS3 = (pngBuffer) => {
    const hashSign = createHash('sha1').update(pngBuffer).digest('hex');
    const s3Client = buildS3connection();
    const url = getFileName(hashSign);
    console.log({ localStackPort, region, isLocalStack, bucketName });
    console.log({ filename: getFileName(hashSign) });
    return s3Client.putObject({
        Bucket: bucketName,
        Key: `${hashSign}.png`,
        Body: pngBuffer
    })
    .promise()
    .then(()=> ({ url }));
}

module.exports = { savePNGImageToS3 };