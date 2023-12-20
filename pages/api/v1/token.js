import { addDevis, getDevis } from "@/utils/file.util";

/** @type {import("next").NextApiHandler} */
export default async (req, res) => {
  const { method } = req;
  const apiKey = process.env.API_KEY;

  console.log("devis", getDevis());

  addDevis()

  switch (method) {
    case "POST":
    res.status(200).send({ "key": apiKey });
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}