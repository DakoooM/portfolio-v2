/** @type {import("next").NextApiHandler} */
export default async (req, res) => {
  const { method } = req;
  const apiKey = process.env.API_KEY;

  switch (method) {
    case "POST":
    res.status(200).send({ "secret_key": apiKey });
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}