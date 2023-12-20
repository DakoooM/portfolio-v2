// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { resend } from "@/lib/resend";
import { ContactEmail } from "@/emails/ContactEmail";
import { IsAPIKeyValid } from "@/utils/server.util";

/** @type {import("next").NextApiHandler} */
export default async (req, res) => {
  const { method, body } = req;
  const { data = {firstname: "", lastname: ""}, API_Key = undefined } = body;

  switch (method) {
    case "POST":
      IsAPIKeyValid(res, API_Key);

      try {
        const { data: resp_email } = await resend.emails.send({
          from: `Gcassinis <no-reply@cassinisgiovani.fr>`,
          to: "contact@cassinisgiovani.fr",
          subject: `Demande de contact de ${data?.firstname} ${data?.lastname}`,
          react: ContactEmail(data)
        });
  
        res.status(200).json({ 
          status: 200, 
          sended: true,
          email: resp_email 
        });
      } catch(error) {
        console.log("err", error);

        res.status(500).json({ 
          status: 500, 
          sended: false,
          error
        });
      }
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}