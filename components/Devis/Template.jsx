import { Fragment, useContext, useState, useEffect } from "react"
import { InputWithLabel, TextAreaWithLabel } from "../Inputs";
import Switch from "../Switch";
import Button from "../Button/Button";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { jsxToString, transformToUndefined } from "@/utils/strings.util";
import { useNotification } from "../ToastNotification";
import ModalContext from "@/contexts/ModalContext";
import axios from "axios";
import APIContext from "@/contexts/APIContext";
import { findOfferByName } from "@/utils/search.util";

/* 
 client info needed:
   
  name: "JOHN DOE",
  adress: "54 Rue de la ferme",
  postal: "16000 ANGOULÊME",
  tel: "06 58 55 25 38"
*/
function Template({
  type = "standard" /* standard, ecommerce, standard_perso */
}) {
  const [isAccept, setAccept] = useState(false);
  const [dataIsLoading, setDataLoading] = useState(false);
  const { API_Key } = useContext(APIContext);
  const { setShowModal } = useContext(ModalContext);
  const [toast] = useNotification();

  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = async (data) => {
    if (!isAccept) return toast("Vous devez cocher la case qui permet d'accepter\nque les informations saisies soient exploitée dans le cadre de la demande de devis.", 10, "warning");
    
    const offer = findOfferByName(type);
    if (!offer) return toast(`Cette offre n'existe pas, veuillez contactez le développeur !`, 20, "danger");
    
    let newData = {
      name: data.devis_name,
      mail: data.devis_mail,
      desc: data.devis_desc,
      adress: data.devis_adress,
      phone: data.devis_phone,
      website: transformToUndefined(data.devis_website),
    }

    try {
      await axios.post("/api/v1/send-email-devis", {
        API_Key,
        data: newData,
        features: {
          
        },
        offer: { 
          label: replaceAllTagWith(jsxToString(offer.label())),
        },
      });

      setDataLoading(true);
      setShowModal(false);
      toast("Vous avez recu un email contenant le devis, si vous n'avez rien recu contactez l'adresse mail suivante: contact@cassinisgiovani.fr", 20, "success");
    } catch (err) {
      console.log(err);
      toast(`Une erreur s'est produite lors de l'envoi du devis par mail, message d'erreur: ${err?.request?.statusText ?? ""}`, 20, "danger");
    } finally {
      setDataLoading(false);
    }
  }

  const onAccept = e => {
    const { checked } = e?.target;
    setAccept(checked);
  }

  const SwitchLabel = (
    <Fragment>
      J'accepte que les informations saisies soient exploitée<br />dans le cadre de la demande de devis.
    </Fragment>
  );

  return (
    <form className="DevisContainer" onSubmit={handleSubmit(onSubmit)}>
      <InputWithLabel
        type="text"
        maxWidth="100%"
        required={true}
        register={register}
        uniqueId="devis_name"
        placeholder="Doe John"
        label="Nom & Prénom *"
      />

      <InputWithLabel
        type="email"
        maxWidth="100%"
        required={true}
        register={register}
        uniqueId="devis_mail"
        placeholder="johndoe@gmail.com"
        label="Adresse Mail *"
      />

      <InputWithLabel
        type="text"
        maxWidth="100%"
        register={register}
        required={true}
        uniqueId="devis_adress"
        placeholder="11 Avenue du Général de Gaulle, 16000 Angoulême"
        label="Adresse de Facturation *"
      />

      <InputWithLabel
        type="tel"
        maxWidth="100%"
        required={true}
        register={register}
        uniqueId="devis_phone"
        placeholder="0658552538"
        label="Téléphone *"
      />

      <InputWithLabel
        type="text"
        maxWidth="100%"
        register={register}
        uniqueId="devis_website"
        placeholder="cassinisgiovani.fr (falcutatif)"
        label="Website"
      />

      <TextAreaWithLabel
        maxWidth="100%"
        uniqueId="devis_desc"
        minLength={100}
        register={register}
        required={true}
        label="Description *"
        placeholder="Description de votre projet... Merci de détailler le plus possible votre besoin afin de faciliter nos futurs échanges. (falcutatif)"
      />

      <Switch leftLabel={SwitchLabel} containerStyle={{ justifyContent: "center" }} onChecked={e => onAccept(e)} fontSize={12} />
      <Button _type="sumbit" disabled={dataIsLoading} isLoading={dataIsLoading} leftIcon={<IoDocumentTextOutline size={20} />} style={{ width: "100%", fontWeight: 600, fontSize: 15 }} rounded={5}>Demander le Devis</Button>
    </form>
  )
}

export default Template;