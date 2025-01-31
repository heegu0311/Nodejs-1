const http = require("http");
const cookie = require("cookie");
http
  .createServer(function (request, response) {
    if (request.headers.cookie) {
      const cookies = cookie.parse(request.headers.cookie);
      console.log(cookies.yummy_cookie);
    }

    response.writeHead(200, {
      "Set-Cookie": [
        "yummy_cookie=choco",
        "tasty_cookie=strawberry",
        `Permanent=cookies; Max-Age=${60 * 60 * 24 * 30}`,
        "Secure=Secure; Secure",
        "HttpOnly=HttpOnly; HttpOnly",
        "Path=Path; Path=/cookie",
        "Domain=Domain; Domain=o2.org",
      ],
    });
    response.end("Cookie!!");
  })
  .listen(3000);
