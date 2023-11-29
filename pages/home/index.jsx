import Button from "@/components/Button";
import { CardSkill, CardSkillContainer } from "@/components/CardSkill";
import Heading from "@/components/Heading";
import HtmlHeader from "@/components/HtmlHeader";
import Section from "@/components/Section";
import MaTete from "@/public/ma-tete.jpg";
import Image from "next/image";
import { CardSkillsItems } from "@/global.config";
import { v4 as uuidv4 } from "uuid";
import { FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { CardAdvantage, CardAdvantagesContainer } from "@/components/CardAdvantages/CardAdvantages";
import { CardsAdvantagesList } from "@/components/CardAdvantages/config";

export default function Home() {
  return (
    <div className="Homepage">
      <HtmlHeader
        title="Cassinis Giovani - Développeur Web Freelance"
        desc="Giovani Cassinis, Développer Web en Freelance depuis 2022, je réalise vos projets professionnel en réalisant un cahier des charges et un devis"
      />

      <Section className="Presentation">
        <Image src={MaTete} alt="tete giovani cassinis" height={300} draggable={false} className="logo-personnal" />

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

      <Section className="Services" uniqueId="services">
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

      <Section className="Competences" uniqueId="competences">
        <Heading level={2} className="titleComp">
          MES COMPETENCES
        </Heading>

        <p className="compDesc">Des compétences à votre service</p>

        <div className="comp_ctn">
          <div className="comp_left">
            <Button title="Javascript" bgColor="#FFCA28" rounded={5} href="#" leftIcon={<FaJs size={30} />} />
            <Button title="CSS (Cascade Style sheet)" bgColor="#42A5F5" rounded={5} href="#" leftIcon={<FaCss3Alt size={30} />} />
            <Button title="HTML (Hyper text markdown language)" bgColor="#CB4827" rounded={5} href="#" leftIcon={<FaHtml5 size={30} />} />
          </div>

          <hr className="HorizontalSeparator" />

          <div className="comp_right">

          </div>
        </div>
      </Section>

      <Section className="Tarifs" uniqueId="mes-tarifs">
        <Heading level={2} className="titleTarifs">
          MES TARIFS
        </Heading>

        <p className="TarifsDesc">
          Un tarif adapté à un site internet de qualité !
        </p>

        <CardAdvantagesContainer>
          {CardsAdvantagesList.map(item => (
            <CardAdvantage price={item.price} advs={item.advs} key={uuidv4()}>
              {item.label()}
            </CardAdvantage>
          ))}
        </CardAdvantagesContainer>
      </Section>
    </div>
  )
}
