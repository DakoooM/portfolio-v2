import Button from "@/components/Button";
import Heading from "@/components/Heading";
import HtmlHeader from "@/components/HtmlHeader";
import Section from "@/components/Section";
import MaTete from "@/public/ma-tete.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="Homepage">
      <HtmlHeader
        title="Cassinis Giovani - Développeur Web Freelance"
        desc="Giovani Cassinis, Développer Web en Freelance depuis 2022, je réalise vos projets professionnel en réalisant un cahier des charges et un devis"
      />

      <Section className="Presentation">
        <Image src={MaTete} height={300} draggable={false} className="logo-personnal" />

        <div className="boxPresent">
          <Heading level={1}>
            Cassinis Giovani<br />
            Développeur Web Freelance
          </Heading>

          <p className="pDesc">
            Bonjour, Je m'appel Giovani, j'ai <span className="imp">21 ans</span> et je suis passionée d'informatique depuis l'âge de <span className="imp">13-14 ans</span>. j'ai a mon actif <span className="imp">beaucoup de compétences</span> en proggramation ou dans beaucoup de logiciels tels que Adobe Photoshop, Adobe After Effects, Sony vegas pro ect...
          </p>

          <div className="buttonsPresent">
            <Button variant="outlined" rounded={10} href="#competences">Découvrir mes compétences</Button>
            <Button href="/portfolio" rounded={10}>Découvrir mes préstations</Button>
          </div>
        </div>
      </Section>
      <Section className="Competences" uniqueId="mes-services">
        <Heading level={2}>
          MES SERVICES
        </Heading>
      </Section>
    </div>
  )
}
