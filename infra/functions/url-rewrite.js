// url-rewrite.js
// See other AWS examples at https://github.com/aws-samples/amazon-cloudfront-functions/)

function handler(event) {
    var request = event.request;

    if (request.uri.endsWith('/')) {
        request.uri += 'index.html';
    }

    return request;
}