import Button from "@/components/Button";
import { CardSkill, CardSkillContainer } from "@/components/CardSkill";
import Heading from "@/components/Heading";
import HtmlHeader from "@/components/HtmlHeader";
import Section from "@/components/Section";
import MaTete from "@/public/ma-tete.jpg";
import Image from "next/image";
import { IoBulbOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { CardSkillsItems } from "@/config";
import { v4 as uuidv4 } from "uuid";

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
          <Heading level={1} className="TitlePresent">
            Cassinis Giovani<br />
            <span className="titles">Développeur Web Freelance</span>
          </Heading>

          <p className="pDesc">
            21 ans et passionée d'informatique depuis l'âge de 13 ans.
          </p>

          <div className="buttonsPresent">
            <Button variant="outlined" rounded={10} href="#competences">Découvrir mes compétences</Button>
            <Button href="/portfolio" rounded={10}>Découvrir mes préstations</Button>
          </div>
        </div>
      </Section>
      <Section className="Services" uniqueId="mes-services">
        <div className="topServices">
          <Heading level={2} className="titleService">
            MES SERVICES
          </Heading>

          <p className="ServiceDesc">Des prestations adaptées à vos besoins</p>

          <CardSkillContainer>
            {
              CardSkillsItems.map(item => {
                const uniqueId = uuidv4();

                return (
                  <CardSkill title={item.title} icon={item.icon} key={uniqueId}>
                    {item.description}
                  </CardSkill>
                )
              })
            }
          </CardSkillContainer>
        </div>
      </Section>
    </div>
  )
}
