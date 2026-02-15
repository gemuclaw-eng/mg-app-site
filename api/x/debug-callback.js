export default async function handler(req, res) {
  try {
    const query = req.query || {};
    const headerNames = Object.keys(req.headers || {});
    res.setHeader('Content-Type','application/json; charset=utf-8');
    res.status(200).end(JSON.stringify({
      note: "DEBUG - request received",
      url: req.url,
      query,
      headerNames
    }, null, 2));
  } catch (err) {
    res.status(500).end(String(err));
  }
}
