// url-rewrite.js
// See other AWS examples at https://github.com/aws-samples/amazon-cloudfront-functions/)

function isFile(uri) {
  var lastFragment = uri.split("/").pop();
  return lastFragment.indexOf(".") > -1;
}

function handler(event) {
  var request = event.request;
  if (request.uri === "/graph/") {
    request.uri += "index.html";
    return request;
  } else if (request.uri === "/graph") {
    var slashUri = request.uri += "/";
    var response = {
      statusCode: 301,
      statusDescription: "Moved",
      headers: { location: { value: slashUri } },
    };
    return request;
  } else if (request.uri !== "/" && request.uri.endsWith("/")) {
    var noSlashUri = request.uri.slice(0, -1);
    var response = {
      statusCode: 301,
      statusDescription: "Moved",
      headers: { location: { value: noSlashUri } },
    };

    return response;
  } else if (request.uri !== "/" && !isFile(request.uri)) {
    request.uri += "/index.html";
  }

  return request;
}
