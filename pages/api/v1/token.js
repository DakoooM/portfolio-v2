export default async function getToken(req, res) {
  const { method } = req;
  const apiKey = process.env.API_KEY;

  switch (method) {
    case "GET":
    res.status(200).send({key: apiKey});
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}