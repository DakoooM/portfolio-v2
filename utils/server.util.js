export function IsAPIKeyValid(res, key) {
  if (key !== process.env.API_KEY) {
    return res.status(401).end("Unknown API Key");
  }
}