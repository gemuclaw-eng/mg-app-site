export default async function handler(req, res) {
  // 簡易ハンドラ：code の有無をチェックして返す（デバッグ用）
  const code = req.query?.code || null;
  const state = req.query?.state || null;
  if (!code) {
    res.status(400).send('Missing code');
    return;
  }
  // 本来はここで token 交換を行う（省略）
  res.status(200).json({ ok: true, code, state });
}
