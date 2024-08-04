

export const API_UPLOAD_REQUEST_MOCK = {
    "typeName": "Mutation",
    "fieldName": "getPresignedUrl",
    "arguments": {
      "key": "wayne-3.txt",
      "bucket": "post-man",
      "urlType": "UPLOAD"
    },
    "identity": null,
    "source": null,
    "request": {
      "headers": {
        "x-amzn-appsync-is-vpce-request": "false",
        "x-forwarded-for": "194.193.160.206, 3.172.26.45",
        "cloudfront-is-tablet-viewer": "false",
        "cloudfront-viewer-country": "AU",
        "x-amzn-requestid": "2001faba-e64f-4a43-9319-8b3a6b64287f",
        "x-amzn-remote-ip": "194.193.160.206",
        "via": "1.1 cca271c4e858a511eebdf1157dd0be74.cloudfront.net (CloudFront)",
        "x-api-key": "da2-ncvhb3q2unabrpqjt7nrj4ewea",
        "cloudfront-forwarded-proto": "https",
        "content-type": "application/json",
        "x-amzn-trace-id": "Root=1-66ab9290-68a47b8250a8e1266665d3ab",
        "x-amz-cf-id": "w6Fmb1p_y4h9--OBwfUOzPJVM2lmCZ_lJaYUE1hy1eGKK2IJTmcUmA==",
        "content-length": "177",
        "x-forwarded-proto": "https",
        "host": "jxjnu7bjcjeblgxadzej6mst64.appsync-api.ap-southeast-2.amazonaws.com",
        "user-agent": "PostmanClient/10.24.26 (AppId=73e39f97-800a-4113-86e8-d54828097b6a)",
        "cloudfront-is-desktop-viewer": "true",
        "accept": "application/json",
        "cloudfront-is-mobile-viewer": "false",
        "x-forwarded-port": "443",
        "cloudfront-is-smarttv-viewer": "false",
        "cloudfront-viewer-asn": "7545"
      },
      "domainName": null
    },
    "prev": null
  }

  export const API_DOWNLOAD_REQUEST_MOCK = {
    "typeName": "Mutation",
    "fieldName": "getPresignedUrl",
    "arguments": {
      "key": "wayne-3.txt",
      "bucket": "post-man",
      "urlType": "DOWNLOAD"
    },
    "identity": null,
    "source": null,
    "request": {
      "headers": {
        "x-amzn-appsync-is-vpce-request": "false",
        "x-forwarded-for": "194.193.160.206, 3.172.26.45",
        "cloudfront-is-tablet-viewer": "false",
        "cloudfront-viewer-country": "AU",
        "x-amzn-requestid": "2001faba-e64f-4a43-9319-8b3a6b64287f",
        "x-amzn-remote-ip": "194.193.160.206",
        "via": "1.1 cca271c4e858a511eebdf1157dd0be74.cloudfront.net (CloudFront)",
        "x-api-key": "da2-ncvhb3q2unabrpqjt7nrj4ewea",
        "cloudfront-forwarded-proto": "https",
        "content-type": "application/json",
        "x-amzn-trace-id": "Root=1-66ab9290-68a47b8250a8e1266665d3ab",
        "x-amz-cf-id": "w6Fmb1p_y4h9--OBwfUOzPJVM2lmCZ_lJaYUE1hy1eGKK2IJTmcUmA==",
        "content-length": "177",
        "x-forwarded-proto": "https",
        "host": "jxjnu7bjcjeblgxadzej6mst64.appsync-api.ap-southeast-2.amazonaws.com",
        "user-agent": "PostmanClient/10.24.26 (AppId=73e39f97-800a-4113-86e8-d54828097b6a)",
        "cloudfront-is-desktop-viewer": "true",
        "accept": "application/json",
        "cloudfront-is-mobile-viewer": "false",
        "x-forwarded-port": "443",
        "cloudfront-is-smarttv-viewer": "false",
        "cloudfront-viewer-asn": "7545"
      },
      "domainName": null
    },
    "prev": null
  }

  export const API_BAD_KEY_REQUEST_MOCK = {
    "typeName": "Mutation",
    "fieldName": "getPresignedUrl",
    "arguments": {
       "bucket": "post-man",
      "urlType": "DOWNLOAD"
    },
    "identity": null,
    "source": null,
    "request": {
      "headers": {
        "x-amzn-appsync-is-vpce-request": "false",
        "x-forwarded-for": "194.193.160.206, 3.172.26.45",
        "cloudfront-is-tablet-viewer": "false",
        "cloudfront-viewer-country": "AU",
        "x-amzn-requestid": "2001faba-e64f-4a43-9319-8b3a6b64287f",
        "x-amzn-remote-ip": "194.193.160.206",
        "via": "1.1 cca271c4e858a511eebdf1157dd0be74.cloudfront.net (CloudFront)",
        "x-api-key": "da2-ncvhb3q2unabrpqjt7nrj4ewea",
        "cloudfront-forwarded-proto": "https",
        "content-type": "application/json",
        "x-amzn-trace-id": "Root=1-66ab9290-68a47b8250a8e1266665d3ab",
        "x-amz-cf-id": "w6Fmb1p_y4h9--OBwfUOzPJVM2lmCZ_lJaYUE1hy1eGKK2IJTmcUmA==",
        "content-length": "177",
        "x-forwarded-proto": "https",
        "host": "jxjnu7bjcjeblgxadzej6mst64.appsync-api.ap-southeast-2.amazonaws.com",
        "user-agent": "PostmanClient/10.24.26 (AppId=73e39f97-800a-4113-86e8-d54828097b6a)",
        "cloudfront-is-desktop-viewer": "true",
        "accept": "application/json",
        "cloudfront-is-mobile-viewer": "false",
        "x-forwarded-port": "443",
        "cloudfront-is-smarttv-viewer": "false",
        "cloudfront-viewer-asn": "7545"
      },
      "domainName": null
    },
    "prev": null
  }


  export const API_BAD_BUCKET_REQUEST_MOCK = {
    "typeName": "Mutation",
    "fieldName": "getPresignedUrl",
    "arguments": {
      "key": "wayne-3.txt",
      "urlType": "DOWNLOAD"
    },
    "identity": null,
    "source": null,
    "request": {
      "headers": {
        "x-amzn-appsync-is-vpce-request": "false",
        "x-forwarded-for": "194.193.160.206, 3.172.26.45",
        "cloudfront-is-tablet-viewer": "false",
        "cloudfront-viewer-country": "AU",
        "x-amzn-requestid": "2001faba-e64f-4a43-9319-8b3a6b64287f",
        "x-amzn-remote-ip": "194.193.160.206",
        "via": "1.1 cca271c4e858a511eebdf1157dd0be74.cloudfront.net (CloudFront)",
        "x-api-key": "da2-ncvhb3q2unabrpqjt7nrj4ewea",
        "cloudfront-forwarded-proto": "https",
        "content-type": "application/json",
        "x-amzn-trace-id": "Root=1-66ab9290-68a47b8250a8e1266665d3ab",
        "x-amz-cf-id": "w6Fmb1p_y4h9--OBwfUOzPJVM2lmCZ_lJaYUE1hy1eGKK2IJTmcUmA==",
        "content-length": "177",
        "x-forwarded-proto": "https",
        "host": "jxjnu7bjcjeblgxadzej6mst64.appsync-api.ap-southeast-2.amazonaws.com",
        "user-agent": "PostmanClient/10.24.26 (AppId=73e39f97-800a-4113-86e8-d54828097b6a)",
        "cloudfront-is-desktop-viewer": "true",
        "accept": "application/json",
        "cloudfront-is-mobile-viewer": "false",
        "x-forwarded-port": "443",
        "cloudfront-is-smarttv-viewer": "false",
        "cloudfront-viewer-asn": "7545"
      },
      "domainName": null
    },
    "prev": null
  }

  export const API_BAD_URLTYPE__REQUEST_MOCK = {
    "typeName": "Mutation",
    "fieldName": "getPresignedUrl",
    "arguments": {
      "key": "wayne-3.txt",
      "bucket": "post-man",
      "urlType": "unknown"
    },
    "identity": null,
    "source": null,
    "request": {
      "headers": {
        "x-amzn-appsync-is-vpce-request": "false",
        "x-forwarded-for": "194.193.160.206, 3.172.26.45",
        "cloudfront-is-tablet-viewer": "false",
        "cloudfront-viewer-country": "AU",
        "x-amzn-requestid": "2001faba-e64f-4a43-9319-8b3a6b64287f",
        "x-amzn-remote-ip": "194.193.160.206",
        "via": "1.1 cca271c4e858a511eebdf1157dd0be74.cloudfront.net (CloudFront)",
        "x-api-key": "da2-ncvhb3q2unabrpqjt7nrj4ewea",
        "cloudfront-forwarded-proto": "https",
        "content-type": "application/json",
        "x-amzn-trace-id": "Root=1-66ab9290-68a47b8250a8e1266665d3ab",
        "x-amz-cf-id": "w6Fmb1p_y4h9--OBwfUOzPJVM2lmCZ_lJaYUE1hy1eGKK2IJTmcUmA==",
        "content-length": "177",
        "x-forwarded-proto": "https",
        "host": "jxjnu7bjcjeblgxadzej6mst64.appsync-api.ap-southeast-2.amazonaws.com",
        "user-agent": "PostmanClient/10.24.26 (AppId=73e39f97-800a-4113-86e8-d54828097b6a)",
        "cloudfront-is-desktop-viewer": "true",
        "accept": "application/json",
        "cloudfront-is-mobile-viewer": "false",
        "x-forwarded-port": "443",
        "cloudfront-is-smarttv-viewer": "false",
        "cloudfront-viewer-asn": "7545"
      },
      "domainName": null
    },
    "prev": null
  }