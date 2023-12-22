import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const DevisEmail = ({
  name = "John Doe",
  offer = { label: "Standard" },
}) => {


  return (
    <Html>
      <Head />
      <Preview>Gcassinis vous a crée automatiquement un devis pour la création du produit "{offer.label}"</Preview>
      <Body className="bg-blue-100 p-10">
        <Container className="bg-white border border-gray-200 p-10">
          <Img
            src={`https://cdn.discordapp.com/attachments/819049402097336340/1183774551415472201/logo-gc.png?ex=65898ef6&is=657719f6&hm=239c02907fe3d70b533afa39556510b2b0a6e3dd921fccbef2a06c7cd3fe2ded&`}
            width={60}
            height={60}
            alt="logotype Gcassinis"
          />

          <Section>
            <Text className="text-base text-black">
              Bonjour/Bonsoir {name},
            </Text>

            <Text className="text-base text-black">
              Vous avez récemment demandé un devis pour la création de votre site web {offer.label}
            </Text>

            <Text className="text-base text-black mt-4">
              Ci-dessous retrouvez le document PDF qui a était générer automatiquement par Gcassinis pour détailler votre liste de fonctionalité.{" "}
            </Text>

            <Text className="text-base text-black mt-4">
              Si vous souhaitez personalisée le devis ou autres, Veuillez me faire parvenir un email a l'adresse <Link className="underline" href="mailto:contact@cassinisgiovani.fr">contact@cassinisgiovani.fr</Link>
            </Text>

            <Text className="text-base text-black">Cordialement, Giovani Cassinis.</Text>
            <Button className="bg-blue-500 rounded text-white font-semibold text-base py-2 px-4 mt-4" href="http://www.cassinisgiovani.fr/">Visitez mon Site Web</Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default DevisEmail;
