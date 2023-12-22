// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { resend } from "@/lib/resend";
import DevisEmail from "@/emails/DevisEmail";
import { renderToBuffer } from "@react-pdf/renderer";
import DevisPDF from "@/templates/Devis.pdf";
import { IsAPIKeyValid } from "@/utils/server.util";
import { addDevis, getDevisLength, saveFileAs } from "@/utils/file.util";

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
    prices = {
      ttc: 0,
      ht: 0,
      tva: 0, 
      tva_pourcent: 0
    },
    features = {
      description: ["Aucune"],
      quantity: [1],
      prix_unitaire_ht: [0],
      prix_total_ht: [0]
    },
    API_Key = undefined,
  } = body;
  
  switch (method) {
    case "POST":
      IsAPIKeyValid(res, API_Key);
      
      try {
        const devisNumber = getDevisLength();
        const actualDate = new Date();
        
        const devisInfos = {
          number: devisNumber + 1,
          date: actualDate.toLocaleDateString("fr-FR"),
          total_ht: prices.ht,
          total_ttc: prices.ttc,
          tvaPrice: prices.tvaPrice,
          tva_pourcent: prices.tva_pourcent,
          client: {
            name: data.name,
            adress: data.adress,
            tel: data.phone
          },

          features: features
        };

        const renderedPDF = await renderToBuffer(<DevisPDF {...devisInfos} />);

        addDevis(devisInfos);

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
              filename: `Gcassinis-Devis-#${devisNumber + 1}.pdf`
            },
          ]
        });

        saveFileAs(`/public/devis/devis-#${devisNumber + 1}.pdf`, renderedPDF);
  
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