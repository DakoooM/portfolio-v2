// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { resend } from "@/lib/resend";
import DevisEmail from "@/emails/DevisEmail";
import { renderToBuffer } from "@react-pdf/renderer";
import DevisPDF from "@/templates/Devis.pdf";
import { IsAPIKeyValid } from "@/utils/server.util";
import { addDevis, getFileExistence, saveFileAs } from "@/utils/file.util";

const randomInt = (min = 0, max = 999) => Math.floor(Math.random() * (max - min) + min);

/** @type {import("next").NextApiHandler} */
export default async (req, res) => {
  const { method, body } = req;
  const { 
    data = {
      name: "Inconnu",
    },
    offer = {
      label: "Standard",
    },
    API_Key = undefined,
  } = body;
  
  switch (method) {
    case "POST":
      IsAPIKeyValid(res, API_Key);
      
      try {
        const generated = randomInt(199, 999);
        
        const devisInfos = {
          number: 999,
          date: new Date().toLocaleDateString("fr-FR"),
          total_ht: 100,
          total_ttc: 200,
          tvaPrice: 7,
          client: {
            name: data.name,
            adress: data.adress,
            tel: data.phone
          },
          features: {
            description: ["Création de Site Web", "Hébergement Pendant 1 ans"],
            quantity: [1, 2],
            prix_unitaire_ht: [1040.20, 100.25],
            prix_total_ht: [1040.2, 200.50]
          }
        };

        const renderedPDF = await renderToBuffer(<DevisPDF {...devisInfos} />);

        addDevis()

        await resend.emails.send({
          from: "Gcassinis <contact@cassinisgiovani.fr>",
          to: data.mail,
          subject: "Demande de Devis",
          
          react: DevisEmail({
            name: data.name,
            offer: { label: offer.label }
          }),

          attachments: [
            {
              content: renderedPDF,
              filename: `Gcassinis-Devis-#${generated}.pdf`
            },
          ]
        });

        saveFileAs(`/public/devis/devis-#${generated}.pdf`, renderedPDF);
  
        res.status(200).json({ 
          status: 200, 
          sended: true
        });
      } catch(error) {
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