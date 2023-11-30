import Button from "@/components/Button/Button";
import Heading from "@/components/Heading";
import HtmlHeader from "@/components/HtmlHeader";
import { InputWithLabel, TextAreaWithLabel } from "@/components/Inputs";
import { useNotification } from "@/components/ToastNotification";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { IoMailUnreadOutline } from "react-icons/io5";

function ContactPage() {
  const [ toast ] = useNotification();
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = async (d) => {
    console.log("data", d);
    setLoading(true);

    // toast(`Bravo ${d.firstname} ${d.lastname}! Vous avez envoyée un email a Giovani, il vous répondera dans 7 jour(s) ouvrés maximum!`, 15, "success");

    try {
      const { data } = await axios.post("/api/v1/send-email", d);
      console.info("data", data);
      toast(`Bravo ${d.firstname} ${d.lastname}! Vous avez envoyée un email a Giovani, il vous répondera dans 7 jour(s) ouvrés maximum!`, 15, "success");
      setLoading(false);
    } catch(err) {
      console.error("err", err);
      toast(`${d.firstname} ${d.lastname}, Une erreur s'est produite! → ${err?.request?.statusText ?? ""}`, 5, "danger");
      setLoading(false);
    }
  }

  return (
    <div className="ContactPage">
      <HtmlHeader title="Cassinis Giovani - Contactez-moi" desc="Contactez Giovani Cassinis pour une demande particulière."/>
      <Heading level={1} className="title">Contactez moi</Heading>
      <p className="desc">Pour une demande particulière, remplissez ce formulaire pour m'envoyer un email.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="formulaire" autoComplete="on">
        <div className="row-group">
          <InputWithLabel label="Prénom *" required register={register} uniqueId="firstname" placeholder="John"/>
          <InputWithLabel label="Nom de Famille" register={register} uniqueId="lastname" placeholder="Doe"/>
        </div>

        <div className="row-group">
          <InputWithLabel type="email" label="Adresse mail *" register={register} required uniqueId="email" placeholder="john.doe@gmail.com"/>
          <InputWithLabel type="tel" pattern="[0-6]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" label="Téléphone *" register={register} required uniqueId="phone" placeholder="06 58 55 25 38"/>
        </div>

        <TextAreaWithLabel uniqueId="description" placeholder="Description de 100 caractères minimum" required register={register} label="Votre demande *"/>

        <Button _type="submit" isLoading={isLoading} disabled={isLoading} rounded={15} style={{ fontWeight: "bold", fontSize: 17 }} leftIcon={<IoMailUnreadOutline size={25}/>}>Envoyer la demande</Button>
      </form>
    </div>
  )
}

export default ContactPage;