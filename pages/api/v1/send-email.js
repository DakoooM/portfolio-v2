// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { resend } from "@/lib/resend";
import { ContactEmail } from "@/emails/ContactEmail";

export default async function SendEmail(req, res) {
  const { method, body } = req;
  const { firstname, lastname, email, phone, description } = body;
  console.log(firstname, lastname, email, phone, description);

  switch (method) {
    case "POST":
      try {
        const { data } = await resend.emails.send({
          from: `Gcassinis <contact@cassinisgiovani.fr>`,
          to: "cassinisgiovani@gmail.com",
          subject: `[WARN] Demande de contact de ${firstname} ${lastname}`,
          react: ContactEmail(body),
          /* attachments: [
            {
              path: "http://www.code-verificationpermis.fr/pdf/tableau-question.pdf",
              filename: "Two.pdf"
            },
          ] */
        });
  
        res.status(200).json({ 
          status: 200, 
          sended: true,
          email: data 
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