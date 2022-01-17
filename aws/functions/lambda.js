const headers = {
    'Content-Type': 'application/json'
};

const buildBadRequestResponse = (errors) => ({
    headers,
    statusCode: 400,
    body: JSON.stringify({ errors })
});

const buildSuccesResponse = (body) => ({
    statusCode: 200,
    headers,
    body: JSON.stringify(body)
});

module.exports = {
    buildBadRequestResponse,
    buildSuccesResponse
};