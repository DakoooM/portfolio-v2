import Button from "@/components/Button/Button";
import { CardSkill, CardSkillContainer } from "@/components/CardSkill/CardSkill";
import Heading from "@/components/Heading";
import HtmlHeader from "@/components/HtmlHeader";
import Section from "@/components/Section";
import MaTete from "@/public/ma-tete.jpg";
import Image from "next/image";
import { CardSkillsItems, show_homePageLogo } from "@/global.config";
import { v4 as uuidv4 } from "uuid";
import { CardAdvantage, CardAdvantagesContainer } from "@/components/CardAdvantages/CardAdvantages";
import { CardsAdvantagesList } from "@/global.config";
import { SkillProgressContainer, SkillProgress } from "@/components/SkillProgress";
import { devSkills } from "@/pages/home/home.config";
import { AiOutlineSafetyCertificate, AiOutlineShoppingCart } from "react-icons/ai";

export default function Home() {
  return (
    <div className="Homepage">
      <HtmlHeader
        title="Cassinis Giovani - Développeur Web Freelance"
        desc="Giovani Cassinis, Développer Web en Freelance depuis 2022, je réalise vos projets professionnel en réalisant un cahier des charges et un devis"
      />

      <Section className="Presentation">
        {
          show_homePageLogo && (
            <Image src={MaTete} alt="tete giovani cassinis" height={300} draggable={false} className="logo-personnal" />
          )
        }

        <div className="boxPresent">
          <Heading level={1} className="TitlePresent">
            Cassinis Giovani<br />
            <span className="titles">Développeur Web Freelance</span>
          </Heading>

          <p className="pDesc">
            21 ans, passionée d'informatique depuis l'âge de 13 ans.
          </p>

          <div className="buttonsPresent">
            <Button href="#competences" variant="outlined" style={{minHeight: 50}} leftIcon={<AiOutlineSafetyCertificate size={20}/>} rounded={10}>Mes compétences</Button>
            <Button href="/tarifs" style={{minHeight: 50}} rounded={10} leftIcon={<AiOutlineShoppingCart size={20}/>}>Mes Tarifs</Button>
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
          MES COMPÉTENCES
        </Heading>

        <p className="compDesc">Des compétences à votre service</p>

        <div className="comp_ctn">
          <div className="comp_left">
            <Heading level={4}>Compétences en Développement</Heading>

            <SkillProgressContainer>
              {devSkills.map(skill => <SkillProgress key={skill.key} {...skill}/>)}
            </SkillProgressContainer>
          </div>

          <hr className="HorizontalSeparator" />

          <div className="comp_right">
            <Heading level={4}>Domaines de compétences</Heading>

            <SkillProgressContainer>
              {devSkills.map(skill => <SkillProgress key={skill.key} {...skill}/>)}
            </SkillProgressContainer>
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
          {
            CardsAdvantagesList.filter((_, k) => k >= 2).map(item => (
              <CardAdvantage price={item.price} advs={item.advs} key={uuidv4()}>
                {item.label()}
              </CardAdvantage>
            ))
          }
        </CardAdvantagesContainer>
      </Section>
    </div>
  )
}
