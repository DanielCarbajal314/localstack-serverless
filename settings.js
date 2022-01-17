module.exports = {
    localStackPort: process.env.LOCALSTACK_EDGE_PORTPORT,
    region: process.env.AWS_REGION,
    isLocalStack: process.env.IS_LOCAL_STACK,
    bucketName: process.env.OUTPUT_BUCKET
}