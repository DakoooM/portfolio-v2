import { Html, Text, Font, Container } from "@react-email/components";

export const ContactEmail = ({ 
  firstname, 
  lastname, 
  email, 
  phone, 
  description 
}) => (
    <Html lang="fr">
       <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />

      <Container>
        <Text>Vous avez recu un nouveau email de la part de {firstname} {lastname} avec l'adresse mail: {email}</Text>
        <Text>Numéro de Téléphone: {phone}</Text>
        <Text>Sujet de la demande : {description}</Text>
      </Container>
    </Html>
);