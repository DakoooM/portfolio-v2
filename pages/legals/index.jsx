import Heading from "@/components/Heading";

function LegalsPage() {
  return (
    <div className="LegalsPage">
      <Heading level={1} className="title">Mentions Légales</Heading>

      <Heading level={3} className="subtitle">Informations Générales</Heading>
      <p className="text"><strong className="strong">Raison sociale :</strong> Gcassinis</p>
      <p className="text"><strong className="strong">Numéro de siret :</strong> 98132827100011</p>
      <p className="text"><strong className="strong">Adresse :</strong> Aucune relié a l'entreprise</p>
      <p className="text"><strong className="strong">Téléphone :</strong> 06 58 55 25 38</p>
      <p className="text"><strong className="strong">Email :</strong> contact@cassinisgiovani.fr</p>

      <Heading level={3} className="subtitle">Directeur de la publication</Heading>
      <p className="text"><strong className="strong">Nom :</strong> Cassinis</p>
      <p className="text"><strong className="strong">Prénom :</strong> Giovani</p>

      <Heading level={3} className="subtitle">Hébergement du site</Heading>
      <p className="text"><strong className="strong">Nom de l'hébergeur :</strong> Gandi</p>
      <p className="text"><strong className="strong">Adresse :</strong> 63-65 Boulevard Masséna, 75013 Paris</p>

      <Heading level={3} className="subtitle">Propriété intellectuelle</Heading>
      <p className="text">Ce site et son contenu sont la propriété de Gcassinis.</p>

      <Heading level={3} className="subtitle">Données personnelles</Heading>
      <p className="text">Ce site ne collecte pas de données personnelles.</p>

      <p className="text">
        <strong className="strong">Date de dernière mise à jour : 29/11/2023</strong>
      </p>
    </div>
  )
}

export default LegalsPage;