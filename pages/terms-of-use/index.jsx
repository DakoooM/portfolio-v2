import Heading from '@/components/Heading';

function TermsOfUsePage() {
  return (
    <div className="TermsOfUse">
      <Heading level={1} className="title">Conditions d'Utilisation</Heading>

      <Heading level={3} className="subtitle">Acceptation des conditions</Heading>
      <p className="text">En utilisant ce site, vous acceptez de vous conformer à ces conditions d'utilisation.</p>

      <Heading level={3} className="subtitle">Utilisation du site</Heading>
      <p className="text">Vous vous engagez à utiliser ce site conformément à toutes les lois et réglementations applicables.</p>

      <Heading level={3} className="subtitle">Propriété intellectuelle</Heading>
      <p className="text">Le contenu de ce site est protégé par des droits d'auteur et d'autres lois sur la propriété intellectuelle.</p>

      <Heading level={3} className="subtitle">Limitation de responsabilité</Heading>
      <p className="text">Nous ne sommes pas responsables des dommages directs, indirects, accessoires, consécutifs ou autres découlant de l'utilisation de ce site.</p>

      <Heading level={3} className="subtitle">Modification des conditions</Heading>
      <p className="text">Nous nous réservons le droit de modifier ces conditions à tout moment. Veuillez consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.</p>

      <p className="text">
        <strong className="strong">Date de dernière mise à jour : 29/11/2023</strong>
      </p>
    </div>
  )
}

export default TermsOfUsePage;