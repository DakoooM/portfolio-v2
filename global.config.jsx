import { Fragment } from "react";

// Icons
import { FaGoogle, FaRegBuilding } from "react-icons/fa";
import { HiMiniGlobeAmericas, HiMiniWrench } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoBulbOutline, IoMailUnreadOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { HiRefresh } from "react-icons/hi";
import { LuBrush } from "react-icons/lu";
import { IoIosPhonePortrait } from "react-icons/io";

// JSX Components
import Template from "./components/Devis/Template";

// Global Variables
export const TVA_Produits = 20; /* TVA sur le prix des tarifications */
export const show_homePageLogo = false; /* Voir ou cacher le logo de la page d'acceuil */

export const ProjectList = [
  {
    title: "Code and chill",
    website: undefined,
    category: "Développement Web",
    maxTags: 3,
    gallery: [
      {type: "image", src: "assets/codeandchill/darkmode.png"},
      {type: "image", src: "assets/codeandchill/index.png"},
      {type: "image", src: "assets/codeandchill/video.png"},
      {type: "image", src: "assets/codeandchill/tutoriels.png"},
      {type: "image", src: "assets/codeandchill/tutoriel_one.png"},
      {type: "image", src: "assets/codeandchill/tutoriel_two.png"},
      {type: "image", src: "assets/codeandchill/signup.png"},
      {type: "image", src: "assets/codeandchill/login.png"},
      {type: "image", src: "assets/codeandchill/footer.png"},
    ],
    tags: ["Web", "ReactJS", "NextJS", "Javascript", "HTML", "CSS", "Autres"], 
    desc: (
      <Fragment>
        Code & Chill est une communauté d'entraide et d'apprentissage autodidacte du développement web front et back-end<br/>
        J'ai crée ce site internet dans le but d'apprendre pleins de choses a travers de cours tutoriels vidéo et écris.
      </Fragment>
    ), 
    minia: "assets/codeandchill/darkmode.png",
    publishedAt: "31 Juillet 2023"
  },
  {
    title: "ADN's",
    website: "https://adns-tech.fr",
    category: "Développement Web", 
    maxTags: 3,
    gallery: [
      {type: "video", src: "zPFX9KnQKTA"},
      {type: "image", src: "/assets/adns/homepage.png"},
      {type: "image", src: "/assets/adns/scripts.png"},
      {type: "image", src: "/assets/adns/download.png"}
    ],
    tags: ["HTML", "Pro", "Javascript", "CSS", "PHP", "Web"], 
    desc: "ADN'S est un projet qui a démarré en avril 2021, Nous avons commencer avec peux de connaissance et l'envie de changer l'environnement de développement dans lequel nous étions et pouvoir offrir des services de développement.", 
    minia: "/assets/adns/homepage.png",
    publishedAt: "7 Juin 2022"
  },
  {
    title: "Portfolio",
    website: "https://adns-tech.fr/portfolio/",
    category: "Développement Web", 
    maxTags: 3,
    gallery: [
      {type: "image", src: "assets/portfolio/home.png"},
      {type: "image", src: "assets/portfolio/competences.png"},
      {type: "image", src: "assets/portfolio/footer.png"},
    ],
    tags: ["Web", "PHP", "Javascript", "HTML", "CSS", "Autres", "Webing"], 
    desc: "Cette version est la première version de mon portfolio qui a été pensez pour mettre mes compétences en évidence.", 
    minia: "assets/portfolio/home.png",
    publishedAt: "22 Juillet 2022"
  },
  {
    title: "Banner maker",
    website: "https://adns-tech.fr/banner_maker/?name=Gcassinis&color=blueviolet",
    category: "Outil de Création Web",
    maxTags: 3,
    gallery: [
      {type: "image", src: "assets/banner/index.png"},
      {type: "image", src: "assets/banner/template.png"},
    ],
    tags: ["Web", "PHP", "HTML", "CSS"], 
    desc: "J'ai crée un outil permettant de crée une bannière réactive sur la plateforme de jeux FiveM", 
    minia: "assets/banner/index.png",
    publishedAt: "22 Juillet 2022"
  },
  {
    title: "Codeandbot",
    website: "https://github.com/DakoooM/codeandbot",
    category: "Robot Discord",
    maxTags: 3,
    gallery: [
      {type: "image", src: "assets/codeandbot/index.png"},
      {type: "image", src: "assets/codeandbot/ticket.png"},
      {type: "image", src: "assets/codeandbot/ticket_open.png"},
    ],
    tags: ["Javascript", "DiscordJS", "NodeJS"], 
    desc: (
      <Fragment>
        J'ai crée ce robot discord dans le but d'automiser certaines actions, tels que:

        <ul>
          <li>Commande pour bannir les membres</li>
          <li>Commande pour supprimer des messages</li>
          <li>Système de ticket avec logs des message lors de la fermeture</li>
          <li>Création d'un salon temporaire quand un membre rejoins un salon</li>
        </ul>
      </Fragment>
    ), 
    minia: "assets/codeandbot/index.png",
    publishedAt: "22 Juillet 2022"
  },
];

const NavItemsIconsSize = 25;
export const NavItems = [
  {
    label: "Acceuil",
    to: "/",
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

export const CardsAdvantagesModal = {
  "standard": {
    title: "Standard",
    element: <Template type="standard"/>
  },

  "standard_perso": {
    title: "Standard Personalisée",
    element: <Template type="standard_perso"/>
  },

  "ecommerce_perso": {
    title: "E-commerce Personalisée",
    element: <Template type="ecommerce"/>
  }
};

export const CardsAdvantagesList = [
  {
    label: () => <strong>SITE VITRINE<br />STANDARD</strong>,
    price: 1299,
    type: "standard",
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
    type: "standard_perso",
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
    type: "ecommerce_perso",
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