export default async function handler(req, res) {
  try {
    // 返す内容：安全な要約（ヘッダ名とクエリキーのみ）
    const headers = Object.keys(req.headers || {}).reduce((o,k)=>{ o[k]=req.headers[k]; return o; },{});
    const query = req.query || {};
    res.setHeader('Content-Type','application/json; charset=utf-8');
    res.status(200).end(JSON.stringify({
      note: "DEBUG - showing received request metadata (no secrets)",
      url: req.url,
      queryKeys: Object.keys(query),
      headersSample: Object.keys(headers).slice(0,20), // list header names only
    }, null, 2));
  } catch (err) {
    res.status(500).end(String(err));
  }
}
