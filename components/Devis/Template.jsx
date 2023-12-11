import { Fragment, useContext, useState } from "react"
import { InputWithLabel, TextAreaWithLabel } from "../Inputs";
import Switch from "../Switch";
import Button from "../Button/Button";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { transformToUndefined } from "@/utils/strings.util";
import { useNotification } from "../ToastNotification";
import ModalContext from "@/contexts/ModalContext";

function Template({
  type = "standard" /* standard, ecommerce, standard_perso */
}) {
  const { setShowModal } = useContext(ModalContext);
  const [isAccept, setAccept] = useState(false);
  const [ toast ] = useNotification();

  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = (data) => {
    if (!isAccept) return toast("Vous devez cocher la case qui permet d'accepter\nque les informations saisies soient exploitée dans le cadre de la demande de devis.", 10, "warning");

    let { devis_desc, devis_name, devis_mail, devis_phone, devis_website } = data;

    let newData = {
      desc: devis_desc,
      name: devis_name,
      mail: devis_mail,
      phone: transformToUndefined(devis_phone),
      website: transformToUndefined(devis_website)
    }

    console.log(newData);
    setShowModal(false);
  }

  const onAccept = e => {
    const { checked } = e?.target;
    setAccept(checked);
  }

  const SwitchLabel = (
    <Fragment>
      J'accepte que les informations saisies soient exploitée<br/>dans le cadre de la demande de devis.
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
        type="tel"
        maxWidth="100%"
        register={register}
        uniqueId="devis_phone"
        placeholder="0658552538"
        label="Téléphone"
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

      <Switch leftLabel={SwitchLabel} containerStyle={{ justifyContent: "center" }} onChecked={e => onAccept(e)} fontSize={12}/>
      <Button _type="sumbit" leftIcon={<IoDocumentTextOutline size={20}/>} style={{ width: "100%", fontWeight: 600, fontSize: 15 }} rounded={5}>Demander le Devis</Button>
    </form>
  )
}

export default Template;