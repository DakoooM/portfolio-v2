/** {@import("Next.js").Response} */
export default async function api(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).send("Bienvenue sur la v1 de mon API !\nRoute disponible:\n\n/api/v1/ (actuel)\n/api/v1/send-email")
  
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}