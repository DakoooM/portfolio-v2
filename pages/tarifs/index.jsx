import { CardAdvantage, CardAdvantagesContainer } from "@/components/CardAdvantages/CardAdvantages";
import Heading from "@/components/Heading";
import HtmlHeader from "@/components/HtmlHeader";
import Switch from "@/components/Switch";
import { CardsAdvantagesList, TVA_Produits } from "@/global.config";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { formatPrice } from "@/utils/price.util";

function TarifsPage() {
  const [showHT, setShowHT] = useState(false);

  const onChangePrices = (e) => {
    const { checked } = e?.target;

    // 10 * 20 / 100
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

      <Switch onChecked={onChangePrices} leftLabel="Voir les Prix HT"/>

      <CardAdvantagesContainer mBottom={100}>
        {
          CardsAdvantagesList.map(item => {
            const calculTVA = (item.price - (item.price * TVA_Produits / 100)).toFixed(2);

            return (
              <CardAdvantage ttc={!showHT} price={showHT ? calculTVA : item.price} advs={item.advs} key={uuidv4()}>
                {item.label()}
              </CardAdvantage>
            )
          })
        }
      </CardAdvantagesContainer>

      <p className="tarifsInfos">
        Prix à titre informatif : Changement possible selon les demandes et les choix du client.<br/>
        Estimation du temps de travail appuyé par un devis.<br/>
        Maintenance annuelle (engagement 12 mois).<br/>
        Droit d'auteur & propriété intellectuelle : Vous êtes à la fin du projet, propriétaire de l'ensemble des sources (fichiers) composant celui-ci.<br/>
        Paiment possible en plusieurs fois.
      </p>
    </div>
  )
}

export default TarifsPage;