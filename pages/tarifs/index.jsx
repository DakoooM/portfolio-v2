import { CardAdvantage, CardAdvantagesContainer } from "@/components/CardAdvantages/CardAdvantages";
import Heading from "@/components/Heading";
import HtmlHeader from "@/components/HtmlHeader";
import Switch from "@/components/Switch";
import { CardsAdvantagesList, TVA_Enabled, TVA_Produits } from "@/global.config";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TarifsPage() {
  const [showHT, setShowHT] = useState(false);

  const onChangePrices = (e) => {
    const { checked } = e?.target;

    // 10 * 20 (pourcent) / 100
    // prendre le calcule au dessus et moins le prix du produit
    setShowHT(checked);
  }

  return (
    <div className="TarifsPage">
      <HtmlHeader
        title="Cassinis Giovani - Mes Tarifications"
        desc="Giovani Cassinis, Développer Web en Freelance depuis 2022, je réalise vos projets professionnel en réalisant un cahier des charges et un devis"
      />

      <div>
        <Heading level={1} className="pageTitle">MES TARIFS</Heading>
        <p className="desc">Découvrez nos offres particulièrement intéréssante niveaux qualité/prix.</p>
      </div>

      {TVA_Enabled && (
        <Switch onChecked={onChangePrices} leftLabel="Voir les Prix HT" />
      )}

      <CardAdvantagesContainer>
        {
          CardsAdvantagesList.map((item, k) => (
            <CardAdvantage type={item.type} cardKey={k} ttc={!showHT} price={showHT ? item.price : item.price_ttc} advs={item.advs} key={uuidv4()}>
              {item.label()}
            </CardAdvantage>
          ))
        }
      </CardAdvantagesContainer>

      <p className="tarifsInfos">
        Prix à titre informatif : Changement possible selon les demandes et les choix du client.<br />
        Estimation du temps de travail appuyé par un devis.<br />
        Maintenance annuelle (engagement 12 mois).<br />
        Droit d'auteur & propriété intellectuelle : Vous êtes à la fin du projet, propriétaire de l'ensemble des sources (fichiers) composant celui-ci.<br />
        Paiment possible en plusieurs fois.
      </p>
    </div>
  )
}

export default TarifsPage;