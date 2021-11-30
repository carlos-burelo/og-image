const { parseRequest } = require("./parser");
const { getHtml } = require("./template");
const { getScreenshot } = require("./chromium");
const isDev = !process.env.AWS_REGION;

module.exports = async (req, res) => {
  console.log(req.query);
  try {
    const parsedReq = parseRequest(req);
    const html = getHtml(parsedReq);
    const { ext } = parsedReq;
    const file = await getScreenshot(html, ext, isDev);
    res.statusCode = 200;
    res.setHeader("Content-Type", `image/${ext}`);
    res.setHeader(
      "Cache-Control",
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.end(file);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");
  }
};
