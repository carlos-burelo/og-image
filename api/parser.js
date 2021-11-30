const { parse } = require("url");

function parseRequest(req) {
  const { query } = parse(req.url || "/", true);
  const { title, ext, desc } = query || {};
  return {
    title,
    ext,
    desc,
  };
}
module.exports = {
  parseRequest,
};
