import { FaGoogle, FaRegBuilding } from "react-icons/fa";
import { HiMiniGlobeAmericas, HiMiniWrench } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoBulbOutline, IoMailUnreadOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { HiRefresh } from "react-icons/hi";
import { LuBrush } from "react-icons/lu";
import { Fragment } from "react";
import { IoIosPhonePortrait } from "react-icons/io";

export const TVA_Produits = 20;
export const show_homePageLogo = false;

const NavItemsIconsSize = 25;
export const NavItems = [
  {
    label: "Acceuil",
    to: "/home",
    icon: (size) => <FaRegBuilding size={NavItemsIconsSize || size} />
  },
  {
    label: "Projets",
    to: "/portfolio",
    icon: (size) => <HiMiniGlobeAmericas size={NavItemsIconsSize || size} />
  },
  {
    label: "Tarifs",
    to: "/tarifs",
    icon: (size) => <AiOutlineShoppingCart size={NavItemsIconsSize || size} />
  },
  {
    label: "Contact",
    to: "/contact",
    icon: (size) => <IoMailUnreadOutline size={NavItemsIconsSize || size} />
  },
];

const CardSkillIconSize = 30;

export const CardSkillsItems = [
  {
    title: "Gestion de projets web",
    description: "Site vitrine, évènementiel, e-commerce.",
    icon: (size, className) => <IoBulbOutline size={CardSkillIconSize || size} className={className} />,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className} />,
  },
  {
    title: "Développements Spécifiques",
    description: "Des outils adaptés à votre coeur de métier, applications & solutions personnalisées.",
    icon: (size, className) => <HiMiniWrench size={CardSkillIconSize || size} className={className} />,
  },
  {
    title: "Référencement Naturel",
    description: "Affichage sémantique des informations, des pages propres pour un référencement optimal.",
    icon: (size, className) => <FaGoogle size={CardSkillIconSize || size} className={className} />,
  },
  {
    title: "DYNAMISME DES PAGES",
    description: "Des animations de contenu non intrusives pour embellir votre projet.",
    icon: (size, className) => <HiRefresh size={CardSkillIconSize || size} className={className} />,
  },
  {
    title: "INTERFACE D'ADMINISTRATION",
    description: "Outils spécifiques au bon fonctionnement de votre entreprise.",
    icon: (size, className) => <IoShieldCheckmarkOutline size={CardSkillIconSize || size} className={className} />,
  },
  {
    title: "RESPONSIVE DESIGN",
    description: "Compatible tous supports, tablette & application mobile.",
    icon: (size, className) => <IoIosPhonePortrait size={CardSkillIconSize || size} className={className} />,
  },
  {
    title: "Conception & Intégration Design",
    description: "Création d'une Maquette Web sur mesure, Logo templates Web.",
    icon: (size, className) => <LuBrush size={CardSkillIconSize || size} className={className} />,
  },
];

export const CardsAdvantagesList = [
  {
    label: () => <strong>SITE VITRINE<br />STANDARD</strong>,
    price: 1299,
    advs: [
      {
        desc: "Développé sur Mesure",
        key: "creation_1",
        add: true,
        tooltip: (
          <Fragment>
            Je vous crée un site internet sur mesure avec le framework Javascript NextJS, React.js et SCSS
          </Fragment>
        )
      },
      {
        desc: "Panel Administrateur",
        key: "admin_1",
        add: false,
        tooltip: (
          <Fragment>
            Pour que vous n'ayez pas a devoir apprendre a coder, je vous crée un panel d'administration pré construit.<br/>
            Vous pourrez par la suite vous connectez et gérer votre site depuis une interface graphique.
          </Fragment>
        )
      },
      {
        desc: "Sélection d'une palette de couleur",
        key: "palette_colors",
        add: true,
        tooltip: <Fragment>Je vous choisi au préalable une palette de couleur correspondant a vos attentes</Fragment>
      },
      {
        desc: "Server side Rendering (SSR)",
        key: "ssr_1",
        add: true,
        tooltip: <Fragment>Mise en place du SSR (Server side rendering) avec NextJS pour un maximum de référencement</Fragment>
      },
      {
        desc: "Site responsive (tous supports)",
        key: "responsive_1",
        add: true,
        tooltip: (
          <Fragment>Le site sera fonctionnel avec tout les supports (mobile, ordinateur, tablette...)</Fragment>
        )
      },
      {
        desc: "Mise en place du contenu",
        key: "content_1",
        add: true,
        tooltip: <Fragment>Mise en place du contenu du site internet (textes, images, vidéos...)</Fragment>
      },
      {
        desc: "Formulaire de contact",
        key: "contact_1",
        add: true,
        tooltip: <Fragment>Mise en place d'un formulaire de contact pour vos clients, particuliers...</Fragment>
      },
      {
        desc: "Statistiques de visite",
        key: "stats_1",
        add: true,
        tooltip: <Fragment>Mise en place de statistiques Google Analytics pour garder un oeil sur les visites de votre site...</Fragment>
      },
      {
        desc: "Mise en ligne du site",
        key: "ligne_1",
        add: true,
        tooltip: <Fragment>Si vous souhaitez je peux vous aidez a mettre votre site en ligne pour de meilleur performances et très rapidement.</Fragment>
      },
      {
        desc: "Formation utilisation du site",
        key: "formation_1",
        add: true,
        tooltip: <Fragment>Je vous forme a savoir correctement utilisé votre site.</Fragment>
      },
      {
        desc: "Optimisation du référencement (SEO)",
        key: "seo_1",
        add: true,
        tooltip: <Fragment>Optimisation des balises HTML pour avoir le meilleur référencement naturel sur les moteurs de recherche tels que google, brave...</Fragment>
      }
    ]
  },
  {
    label: () => <strong>SITE VITRINE<br />PERSONNALISÉ</strong>,
    price: 1799,
    advs: [
      {
        desc: "Développé sur Mesure",
        key: "creation_1",
        add: true,
        tooltip: <Fragment>Je vous crée un site internet sur mesure avec le framework Javascript NextJS, React.js et SCSS</Fragment>
      },
      {
        desc: "Panel Administrateur",
        key: "admin_2",
        add: true,
        tooltip: (
          <Fragment>
            Pour que vous n'ayez pas a devoir apprendre a coder, je vous crée un panel d'administration pré construit.<br/>
            Vous pourrez par la suite vous connectez et gérer votre site depuis une interface graphique.
          </Fragment>
        )
      },
      {
        desc: "Sélection d'une palette de couleur",
        key: "palette_colors",
        add: true,
        tooltip: <Fragment>Je vous choisi au préalable une palette de couleur correspondant a vos attentes</Fragment>
      },
      {
        desc: "Server side Rendering (SSR)",
        key: "ssr_1",
        add: true,
        tooltip: <Fragment>Mise en place du SSR (Server side rendering) avec NextJS pour un maximum de référencement</Fragment>
      },
      {
        desc: "Site responsive (tous supports)",
        key: "responsive_1",
        add: true,
        tooltip: (
          <Fragment>Le site sera fonctionnel avec tout les supports (mobile, ordinateur, tablette...)</Fragment>
        )
      },
      {
        desc: "Mise en place du contenu",
        key: "content_1",
        add: true,
        tooltip: <Fragment>Mise en place du contenu du site internet (textes, images, vidéos...)</Fragment>
      },
      {
        desc: "Formulaire de contact",
        key: "contact_1",
        add: true,
        tooltip: <Fragment>Mise en place d'un formulaire de contact pour vos clients, particuliers...</Fragment>
      },
      {
        desc: "Statistiques de visite",
        key: "stats_1",
        add: true,
        tooltip: <Fragment>Mise en place de statistiques Google Analytics pour garder un oeil sur les visites de votre site...</Fragment>
      },
      {
        desc: "Mise en ligne du site",
        key: "ligne_1",
        add: true,
        tooltip: <Fragment>Si vous souhaitez je peux vous aidez a mettre votre site en ligne pour de meilleur performances et très rapidement.</Fragment>
      },
      {
        desc: "Formation utilisation du site",
        key: "formation_1",
        add: true,
        tooltip: <Fragment>Je vous forme a savoir correctement utilisé votre site.</Fragment>
      },
      {
        desc: "Optimisation du référencement (SEO)",
        key: "seo_1",
        add: true,
        tooltip: <Fragment>Optimisation des balises HTML pour avoir le meilleur référencement naturel sur les moteurs de recherche tels que google, brave...</Fragment>
      }
    ]
  },
  {
    label: () => <strong>SITE E-COMMERCE<br />PERSONNALISÉ</strong>,
    price: 2999,
    advs: [
      {
        desc: "Développé sur Mesure",
        key: "creation_1",
        add: true,
        tooltip: <Fragment>Je vous crée un site internet sur mesure avec le framework Javascript NextJS, React.js et SCSS</Fragment>
      },
      {
        desc: "Panel Administrateur",
        key: "admin_2",
        add: true,
        tooltip: (
          <Fragment>
            Pour que vous n'ayez pas a devoir apprendre a coder, je vous crée un panel d'administration pré construit.<br/>
            Vous pourrez par la suite vous connectez et gérer votre site depuis une interface graphique.
          </Fragment>
        )
      },
      {
        desc: "Sélection d'une palette de couleur",
        key: "palette_colors",
        add: true,
        tooltip: <Fragment>Je vous choisi au préalable une palette de couleur correspondant a vos attentes</Fragment>
      },
      {
        desc: "Server side Rendering (SSR)",
        key: "ssr_1",
        add: true,
        tooltip: <Fragment>Mise en place du SSR (Server side rendering) avec NextJS pour un maximum de référencement</Fragment>
      },
      {
        desc: "Site responsive (tous supports)",
        key: "responsive_1",
        add: true,
        tooltip: (
          <Fragment>Le site sera fonctionnel avec tout les supports (mobile, ordinateur, tablette...)</Fragment>
        )
      },
      {
        desc: "Mise en place du contenu",
        key: "content_1",
        add: true,
        tooltip: <Fragment>Mise en place du contenu du site internet (textes, images, vidéos...)</Fragment>
      },
      {
        desc: "Formulaire de contact",
        key: "contact_1",
        add: true,
        tooltip: <Fragment>Mise en place d'un formulaire de contact pour vos clients, particuliers...</Fragment>
      },
      {
        desc: "Statistiques de visite",
        key: "stats_1",
        add: true,
        tooltip: <Fragment>Mise en place de statistiques Google Analytics pour garder un oeil sur les visites de votre site...</Fragment>
      },
      {
        desc: "Mise en ligne du site",
        key: "ligne_1",
        add: true,
        tooltip: <Fragment>Si vous souhaitez je peux vous aidez a mettre votre site en ligne pour de meilleur performances et très rapidement.</Fragment>
      },
      {
        desc: "Formation utilisation du site",
        key: "formation_1",
        add: true,
        tooltip: <Fragment>Je vous forme a savoir correctement utilisé votre site.</Fragment>
      },
      {
        desc: "Optimisation du référencement (SEO)",
        key: "seo_1",
        add: true,
        tooltip: <Fragment>Optimisation des balises HTML pour avoir le meilleur référencement naturel sur les moteurs de recherche tels que google, brave...</Fragment>
      }
    ]
  },
];