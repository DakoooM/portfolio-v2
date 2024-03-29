import Button from "@/components/Button/Button";
import Heading from "@/components/Heading";
import HtmlHeader from "@/components/HtmlHeader";
import { InputWithLabel, TextAreaWithLabel } from "@/components/Inputs";
import { useNotification } from "@/components/ToastNotification";
import APIContext from "@/contexts/APIContext";
import axios from "axios";
import Link from "next/link";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form"
import { IoMailUnreadOutline } from "react-icons/io5";

function ContactPage() {
  const [ toast ] = useNotification();
  const [isLoading, setLoading] = useState(false);
  const { API_Key } = useContext(APIContext);

  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = async (d) => {
    setLoading(true);

    try {
      await axios.post("/api/v1/send-email", { data: d, API_Key });
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
      <p className="desc">Pour une demande particulière, remplissez ce formulaire pour m'envoyer un email ou par téléphone <Link href="tel:0658552538">06 58 55 25 38</Link>.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="formulaire" autoComplete="on">
        <div className="row-group">
          <InputWithLabel maxWidth="90%" label="Prénom *" required register={register} uniqueId="firstname" placeholder="John"/>
          <InputWithLabel maxWidth="90%" label="Nom de Famille" register={register} uniqueId="lastname" placeholder="Doe"/>
        </div>

        <div className="row-group">
          <InputWithLabel maxWidth="90%" type="email" label="Adresse mail *" register={register} required uniqueId="email" placeholder="john.doe@gmail.com"/>
          <InputWithLabel maxWidth="90%" type="tel" pattern="[0-6]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" label="Téléphone *" register={register} required uniqueId="phone" placeholder="06 58 55 25 38"/>
        </div>

        <TextAreaWithLabel 
          maxWidth="90%" 
          uniqueId="description"
          minLength={100} 
          placeholder="Description détailler de 100 caractères minimum" 
          required 
          register={register} 
          label="Votre demande *"
        />

        <Button _type="submit" isLoading={isLoading} disabled={isLoading} rounded={15} style={{ fontWeight: "bold", fontSize: 17 }} leftIcon={<IoMailUnreadOutline size={25}/>}>Envoyer la demande</Button>
      </form>
    </div>
  )
}

export default ContactPage;