import { FaRegBuilding } from "react-icons/fa";
import { HiMiniGlobeAmericas } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoBulbOutline, IoMailUnreadOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

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

const CardSkillIconSize = 40;

export const CardSkillsItems = [
  {
    title: "Gestion de projets web",
    description: "Site vitrine, évènementiel, e-commerce, intranet.",
    icon: (size, className) => <IoBulbOutline size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
]

import { Fragment } from "react";

export const CardsAdvantagesList = [
  {
    label: () => <strong>SITE VITRINE<br/>STANDARD</strong>,
    price: 1299,
    advs: [
      {
        desc: "Développé sur Mesure",
        key: "creation_1",
        tooltip: <Fragment>Je vous crée un site internet sur mesure avec le framework Javascript NextJS, React.js et SCSS</Fragment>
      },
      {
        desc: "Sélection d'une palette de couleur",
        key: "palette_colors",
        tooltip: <Fragment>Je vous choisi au préalable une palette de couleur correspondant a vos attentes</Fragment>
      },
      {
        desc: "Server side Rendering (SSR)",
        key: "ssr_1",
        tooltip: <Fragment>Mise en place du SSR (Server side rendering) avec NextJS pour un maximum de référencement</Fragment>
      },
      {
        desc: "Site responsive (tous supports)",
        key: "responsive_1",
        tooltip: (
          <Fragment>Le site sera fonctionnel avec tout les supports (mobile, ordinateur, tablette...)</Fragment>
        )
      },
      {
        desc: "Mise en place du contenu",
        key: "content_1",
        tooltip: <Fragment>Mise en place du contenu du site internet (textes, images, vidéos...)</Fragment>
      },
      {
        desc: "Formulaire de contact",
        key: "contact_1",
        tooltip: <Fragment>Mise en place d'un formulaire de contact pour vos clients, particuliers...</Fragment>
      },
      {
        desc: "Statistiques de visite",
        key: "stats_1",
        tooltip: <Fragment>Mise en place de statistiques Google Analytics pour garder un oeil sur les visites de votre site...</Fragment>
      },
      {
        desc: "Mise en ligne du site",
        key: "ligne_1",
        tooltip: <Fragment>Si vous souhaitez je peux vous aidez a mettre votre site en ligne pour de meilleur performances et très rapidement.</Fragment>
      },
      {
        desc: "Formation utilisation du site",
        key: "formation_1",
        tooltip: <Fragment>Je vous forme a savoir correctement utilisé votre site.</Fragment>
      },
      {
        desc: "Optimisation du référencement (SEO)",
        key: "seo_1",
        tooltip: <Fragment>Optimisation des balises HTML pour avoir le meilleur référencement naturel sur les moteurs de recherche tels que google, brave...</Fragment>
      }
    ]
  },
  {
    label: () => <strong>SITE VITRINE<br/>PERSONNALISÉ</strong>,
    price: 1799,
    advs: [
      {
        desc: "Développé sur Mesure",
        key: "creation_1",
        tooltip: <Fragment>Je vous crée un site internet sur mesure avec le framework Javascript NextJS, React.js et SCSS</Fragment>
      },
      {
        desc: "Sélection d'une palette de couleur",
        key: "palette_colors",
        tooltip: <Fragment>Je vous choisi au préalable une palette de couleur correspondant a vos attentes</Fragment>
      },
      {
        desc: "Server side Rendering (SSR)",
        key: "ssr_1",
        tooltip: <Fragment>Mise en place du SSR (Server side rendering) avec NextJS pour un maximum de référencement</Fragment>
      },
      {
        desc: "Site responsive (tous supports)",
        key: "responsive_1",
        tooltip: (
          <Fragment>Le site sera fonctionnel avec tout les supports (mobile, ordinateur, tablette...)</Fragment>
        )
      },
      {
        desc: "Mise en place du contenu",
        key: "content_1",
        tooltip: <Fragment>Mise en place du contenu du site internet (textes, images, vidéos...)</Fragment>
      },
      {
        desc: "Formulaire de contact",
        key: "contact_1",
        tooltip: <Fragment>Mise en place d'un formulaire de contact pour vos clients, particuliers...</Fragment>
      },
      {
        desc: "Statistiques de visite",
        key: "stats_1",
        tooltip: <Fragment>Mise en place de statistiques Google Analytics pour garder un oeil sur les visites de votre site...</Fragment>
      },
      {
        desc: "Mise en ligne du site",
        key: "ligne_1",
        tooltip: <Fragment>Si vous souhaitez je peux vous aidez a mettre votre site en ligne pour de meilleur performances et très rapidement.</Fragment>
      },
      {
        desc: "Formation utilisation du site",
        key: "formation_1",
        tooltip: <Fragment>Je vous forme a savoir correctement utilisé votre site.</Fragment>
      },
      {
        desc: "Optimisation du référencement (SEO)",
        key: "seo_1",
        tooltip: <Fragment>Optimisation des balises HTML pour avoir le meilleur référencement naturel sur les moteurs de recherche tels que google, brave...</Fragment>
      }
    ]
  },
  {
    label: () => <strong>SITE VITRINE<br/>PERSONNALISÉ</strong>,
    price: 1799,
    advs: [
      {
        desc: "Développé sur Mesure",
        key: "creation_1",
        tooltip: <Fragment>Je vous crée un site internet sur mesure avec le framework Javascript NextJS, React.js et SCSS</Fragment>
      },
      {
        desc: "Sélection d'une palette de couleur",
        key: "palette_colors",
        tooltip: <Fragment>Je vous choisi au préalable une palette de couleur correspondant a vos attentes</Fragment>
      },
      {
        desc: "Server side Rendering (SSR)",
        key: "ssr_1",
        tooltip: <Fragment>Mise en place du SSR (Server side rendering) avec NextJS pour un maximum de référencement</Fragment>
      },
      {
        desc: "Site responsive (tous supports)",
        key: "responsive_1",
        tooltip: (
          <Fragment>Le site sera fonctionnel avec tout les supports (mobile, ordinateur, tablette...)</Fragment>
        )
      },
      {
        desc: "Mise en place du contenu",
        key: "content_1",
        tooltip: <Fragment>Mise en place du contenu du site internet (textes, images, vidéos...)</Fragment>
      },
      {
        desc: "Formulaire de contact",
        key: "contact_1",
        tooltip: <Fragment>Mise en place d'un formulaire de contact pour vos clients, particuliers...</Fragment>
      },
      {
        desc: "Statistiques de visite",
        key: "stats_1",
        tooltip: <Fragment>Mise en place de statistiques Google Analytics pour garder un oeil sur les visites de votre site...</Fragment>
      },
      {
        desc: "Mise en ligne du site",
        key: "ligne_1",
        tooltip: <Fragment>Si vous souhaitez je peux vous aidez a mettre votre site en ligne pour de meilleur performances et très rapidement.</Fragment>
      },
      {
        desc: "Formation utilisation du site",
        key: "formation_1",
        tooltip: <Fragment>Je vous forme a savoir correctement utilisé votre site.</Fragment>
      },
      {
        desc: "Optimisation du référencement (SEO)",
        key: "seo_1",
        tooltip: <Fragment>Optimisation des balises HTML pour avoir le meilleur référencement naturel sur les moteurs de recherche tels que google, brave...</Fragment>
      }
    ]
  },
  {
    label: () => <strong>SITE VITRINE<br/>PERSONNALISÉ</strong>,
    price: 2000,
    advs: [
      {
        desc: "Développé sur Mesure",
        key: "creation_1",
        tooltip: <Fragment>Je vous crée un site internet sur mesure avec le framework Javascript NextJS, React.js et SCSS</Fragment>
      },
      {
        desc: "Sélection d'une palette de couleur",
        key: "palette_colors",
        tooltip: <Fragment>Je vous choisi au préalable une palette de couleur correspondant a vos attentes</Fragment>
      },
      {
        desc: "Server side Rendering (SSR)",
        key: "ssr_1",
        tooltip: <Fragment>Mise en place du SSR (Server side rendering) avec NextJS pour un maximum de référencement</Fragment>
      },
      {
        desc: "Site responsive (tous supports)",
        key: "responsive_1",
        tooltip: (
          <Fragment>Le site sera fonctionnel avec tout les supports (mobile, ordinateur, tablette...)</Fragment>
        )
      },
      {
        desc: "Mise en place du contenu",
        key: "content_1",
        tooltip: <Fragment>Mise en place du contenu du site internet (textes, images, vidéos...)</Fragment>
      },
      {
        desc: "Formulaire de contact",
        key: "contact_1",
        tooltip: <Fragment>Mise en place d'un formulaire de contact pour vos clients, particuliers...</Fragment>
      },
      {
        desc: "Statistiques de visite",
        key: "stats_1",
        tooltip: <Fragment>Mise en place de statistiques Google Analytics pour garder un oeil sur les visites de votre site...</Fragment>
      },
      {
        desc: "Mise en ligne du site",
        key: "ligne_1",
        tooltip: <Fragment>Si vous souhaitez je peux vous aidez a mettre votre site en ligne pour de meilleur performances et très rapidement.</Fragment>
      },
      {
        desc: "Formation utilisation du site",
        key: "formation_1",
        tooltip: <Fragment>Je vous forme a savoir correctement utilisé votre site.</Fragment>
      },
      {
        desc: "Optimisation du référencement (SEO)",
        key: "seo_1",
        tooltip: <Fragment>Optimisation des balises HTML pour avoir le meilleur référencement naturel sur les moteurs de recherche tels que google, brave...</Fragment>
      }
    ]
  },
];