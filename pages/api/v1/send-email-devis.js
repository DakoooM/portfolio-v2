// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { resend } from "@/lib/resend";
import DevisEmail from "@/emails/DevisEmail";

const randomInt = (min = 0, max = 999) => Math.floor(Math.random() * (max - min) + min);

export default async function SendEmail(req, res) {
  const { method, body } = req;
  const { firstname="john", lastname="doe" } = body;

  switch (method) {
    case "POST":
      try {
        const generated = randomInt(); 
        const { data } = await resend.emails.send({
          from: `Gcassinis <contact@cassinisgiovani.fr>`,  
          to: ["cassinisgiovani@gmail.com"],
          subject: "Demande de Devis",
          
          react: DevisEmail({
            name: `${firstname} ${lastname}`,
            offer: { label: "Standard" }
          }),

          attachments: [
            {
              path: "http://www.code-verificationpermis.fr/pdf/tableau-question.pdf",
              filename: `Gcassinis-Devis-#${generated}.pdf`
            },
          ]
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