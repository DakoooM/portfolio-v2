import apiHomePage from "@/lib/api_home";

export default async function home(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      const htmlPage = apiHomePage();
      res.write(htmlPage);
      res.end();
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}