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
import { FaCss3Alt, FaHtml5, FaJs, FaSass } from "react-icons/fa";

// JSX Components
import Template from "./components/Devis/Template";

// Global Variables
export const TVA_Enabled = false; /* si la tva n'est pas applicable alors "false" */
export const TVA_Produits = 20; /* TVA sur le prix des tarifications */
export const show_homePageLogo = false; /* Voir ou cacher le logo de la page d'acceuil */

export const ProjectList = [
  {
    title: "Code & Chill",
    path: "code-and-chill",
    website: "https://codeandchill.fr",
    category: "Développement Web",
    maxTags: 3,
    gallery: [
      {type: "image", src: "/assets/codeandchill/darkmode.png"},
      {type: "image", src: "/assets/codeandchill/index.png"},
      {type: "image", src: "/assets/codeandchill/video.png"},
      {type: "image", src: "/assets/codeandchill/tutoriels.png"},
      {type: "image", src: "/assets/codeandchill/tutoriel_one.png"},
      {type: "image", src: "/assets/codeandchill/tutoriel_two.png"},
      {type: "image", src: "/assets/codeandchill/signup.png"},
      {type: "image", src: "/assets/codeandchill/login.png"},
      {type: "image", src: "/assets/codeandchill/footer.png"},
    ],
    tags: ["Web", "ReactJS", "NextJS", "Javascript", "HTML", "CSS", "Autres"], 
    desc: `
      Code & Chill est une communauté d'entraide et d'apprentissage autodidacte du développement web front et back-end<br/>
      J'ai crée ce site internet dans le but d'apprendre pleins de choses a travers de cours tutoriels vidéo et écris.
    `, 
    minia: "/assets/codeandchill/darkmode.png",
    publishedAt: "31 Juillet 2023"
  },
  {
    title: "ADN's",
    path: "adns",
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
    path: "portfolio-v1",
    website: undefined,
    category: "Développement Web", 
    maxTags: 3,
    gallery: [
      {type: "image", src: "/assets/portfolio/home.png"},
      {type: "image", src: "/assets/portfolio/competences.png"},
      {type: "image", src: "/assets/portfolio/footer.png"},
    ],
    tags: ["Web", "PHP", "Javascript", "HTML", "CSS", "Autres", "Webing"], 
    desc: "Cette version est la première version de mon portfolio qui a été pensez pour mettre mes compétences en évidence.", 
    minia: "/assets/portfolio/home.png",
    publishedAt: "22 Juillet 2022"
  },
  {
    title: "Codeandbot",
    path: "codeandbot",
    website: "https://github.com/DakoooM/codeandbot",
    category: "Robot Discord",
    maxTags: 3,
    gallery: [
      {type: "image", src: "/assets/codeandbot/index.png"},
      {type: "image", src: "/assets/codeandbot/ticket.png"},
      {type: "image", src: "/assets/codeandbot/ticket_open.png"},
    ],
    tags: ["Javascript", "DiscordJS", "NodeJS"], 
    desc: `
      J'ai crée ce robot discord dans le but d'automiser certaines actions, tels que:\n\n

      Commande pour bannir les membres\n
      Commande pour supprimer des messages\n
      Système de ticket avec logs des message lors de la fermeture\n
      Création d'un salon temporaire quand un membre rejoins un salon
    `, 
    minia: "/assets/codeandbot/index.png",
    publishedAt: "22 Juillet 2022"
  },
];

const dev_iconSize = 50;

export const devSkills = [
  {
    lang: "Javascript", 
    key: "lang_js",
    icon: (info, style) => <FaJs size={dev_iconSize} className="icon" title={info} style={style}/>,
    rotate: 90,
    height: 7,
    info: "JavaScript est un langage de programmation polyvalent et orienté objet largement utilisé pour le développement web. Il permet d'ajouter des fonctionnalités interactives aux pages web, de manipuler le contenu dynamiquement, et de créer des applications côté client.",
    colors: ["#FFCA28", "#ffd028"],
    percent: 80
  },
  {
    lang: "CSS (Cascade Style Sheet)", 
    key: "lang_css",
    icon: (info, style) => <FaCss3Alt size={dev_iconSize} className="icon" title={info} style={style}/>,
    rotate: 90,
    height: 7,
    info: "CSS est un langage de programmation utilisé pour définir la présentation visuelle des pages web.",
    colors: ["#42A5F5", "#2f8cd8"],
    percent: 90
  },
  {
    lang: "HTML5 (Hyper Text Markup Language)", 
    key: "lang_html",
    icon: (info, style) => <FaHtml5 size={dev_iconSize} className="icon" title={info} style={style}/>,
    rotate: 90,
    height: 7,
    info: "HTML est un langage de balisage utilisé pour créer la structure et le contenu des pages web.",
    colors: ["#CB4827", "#cb5b27"],
    percent: 80
  },
  {
    lang: "SCSS (Syntactically awesome stylesheets)", 
    key: "lang_scss",
    icon: (info, style) => <FaSass size={dev_iconSize} className="icon" title={info} style={style}/>,
    rotate: 90,
    height: 7,
    info: "SCSS est une extension de syntaxe du langage CSS. Il ajoute des fonctionnalités supplémentaires telles que les variables, les mixins et les opérations arithmétiques, facilitant ainsi la création et la gestion des feuilles de style pour les pages web.",
    colors: ["#CC689A", "#cc68bb"],
    percent: 60
  },
]

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

  "ecommerce": {
    title: "E-commerce Personalisée",
    element: <Template type="ecommerce"/>
  }
};

export const CardsAdvantagesList = [
  {
    label: () => <strong>SITE VITRINE <br/> STANDARD</strong>,
    price: 1039.20,
    price_ttc: 1299,
    type: "standard",
    features: {
      description: [
        "Création de Site Web", 
        "Hébergement Pendant 1 ans", 
        "Mise en place du contenu"
      ],
      quantity: [
        1, 
        1, 
        1,
        1
      ],
      prix_unitaire_ht: [
        1000, 
        100, 
        50, 
        50
      ],
      prix_total_ht: [
        1000, 
        100, 
        50, 
        50
      ]
    },
    advs: [
      {
        desc: "Développé sur Mesure",
        add: true,
        tooltip: <Fragment>Je vous crée un site internet sur mesure avec le framework Javascript NextJS, React.js et SCSS</Fragment>
      },
      {
        desc: "Panel Administrateur",
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
        add: true,
        tooltip: <Fragment>Je vous choisi au préalable une palette de couleur correspondant a vos attentes</Fragment>
      },
      {
        desc: "Server side Rendering (SSR)",
        add: true,
        tooltip: <Fragment>Mise en place du SSR (Server side rendering) avec NextJS pour un maximum de référencement</Fragment>
      },
      {
        desc: "Site responsive (tous supports)",
        add: true,
        tooltip: (
          <Fragment>Le site sera fonctionnel avec tout les supports (mobile, ordinateur, tablette...)</Fragment>
        )
      },
      {
        desc: "Mise en place du contenu",
        add: true,
        tooltip: <Fragment>Mise en place du contenu du site internet (textes, images, vidéos...)</Fragment>
      },
      {
        desc: "Formulaire de contact",
        add: true,
        tooltip: <Fragment>Mise en place d'un formulaire de contact pour vos clients, particuliers...</Fragment>
      },
      {
        desc: "Statistiques de visite",
        add: true,
        tooltip: <Fragment>Mise en place de statistiques Google Analytics pour garder un oeil sur les visites de votre site...</Fragment>
      },
      {
        desc: "Mise en ligne du site",
        add: true,
        tooltip: <Fragment>Si vous souhaitez je peux vous aidez a mettre votre site en ligne pour de meilleur performances et très rapidement.</Fragment>
      },
      {
        desc: "Formation utilisation du site",
        add: true,
        tooltip: <Fragment>Je vous forme a savoir correctement utilisé votre site.</Fragment>
      },
      {
        desc: "Optimisation du référencement (SEO)",
        add: true,
        tooltip: <Fragment>Optimisation des balises HTML pour avoir le meilleur référencement naturel sur les moteurs de recherche tels que google, brave...</Fragment>
      }
    ]
  },
  {
    label: () => <strong>SITE VITRINE <br/> PERSONNALISÉ</strong>,
    price: 1439.20,
    price_ttc: 1799,
    type: "standard_perso",
    features: {
      description: ["Création de Site Web", "Hébergement Pendant 1 ans"],
      quantity: [1, 2],
      prix_unitaire_ht: [1040.20, 100.25],
      prix_total_ht: [1040.2, 200.50]
    },
    advs: [
      {
        desc: "Développé sur Mesure",
        add: true,
        tooltip: <Fragment>Je vous crée un site internet sur mesure avec le framework Javascript NextJS, React.js et SCSS</Fragment>
      },
      {
        desc: "Panel Administrateur",
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
        add: true,
        tooltip: <Fragment>Je vous choisi au préalable une palette de couleur correspondant a vos attentes</Fragment>
      },
      {
        desc: "Server side Rendering (SSR)",
        add: true,
        tooltip: <Fragment>Mise en place du SSR (Server side rendering) avec NextJS pour un maximum de référencement</Fragment>
      },
      {
        desc: "Site responsive (tous supports)",
        add: true,
        tooltip: (
          <Fragment>Le site sera fonctionnel avec tout les supports (mobile, ordinateur, tablette...)</Fragment>
        )
      },
      {
        desc: "Mise en place du contenu",
        add: true,
        tooltip: <Fragment>Mise en place du contenu du site internet (textes, images, vidéos...)</Fragment>
      },
      {
        desc: "Formulaire de contact",
        add: true,
        tooltip: <Fragment>Mise en place d'un formulaire de contact pour vos clients, particuliers...</Fragment>
      },
      {
        desc: "Statistiques de visite",
        add: true,
        tooltip: <Fragment>Mise en place de statistiques Google Analytics pour garder un oeil sur les visites de votre site...</Fragment>
      },
      {
        desc: "Mise en ligne du site",
        add: true,
        tooltip: <Fragment>Si vous souhaitez je peux vous aidez a mettre votre site en ligne pour de meilleur performances et très rapidement.</Fragment>
      },
      {
        desc: "Formation utilisation du site",
        add: true,
        tooltip: <Fragment>Je vous forme a savoir correctement utilisé votre site.</Fragment>
      },
      {
        desc: "Optimisation du référencement (SEO)",
        add: true,
        tooltip: <Fragment>Optimisation des balises HTML pour avoir le meilleur référencement naturel sur les moteurs de recherche tels que google, brave...</Fragment>
      }
    ]
  },
  {
    label: () => <strong>SITE E-COMMERCE <br/> PERSONNALISÉ</strong>,
    price: 2399.20,
    price_ttc: 2999,
    type: "ecommerce",
    features: {
      description: ["Création de Site Web", "Hébergement Pendant 1 ans"],
      quantity: [1, 2],
      prix_unitaire_ht: [1040.20, 100.25],
      prix_total_ht: [1040.2, 200.50]
    },
    advs: [
      {
        desc: "Développé sur Mesure",
        add: true,
        tooltip: <Fragment>Je vous crée un site internet sur mesure avec le framework Javascript NextJS, React.js et SCSS</Fragment>
      },
      {
        desc: "Panel Administrateur",
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
        add: true,
        tooltip: <Fragment>Je vous choisi au préalable une palette de couleur correspondant a vos attentes</Fragment>
      },
      {
        desc: "Server side Rendering (SSR)",
        add: true,
        tooltip: <Fragment>Mise en place du SSR (Server side rendering) avec NextJS pour un maximum de référencement</Fragment>
      },
      {
        desc: "Site responsive (tous supports)",
        add: true,
        tooltip: (
          <Fragment>Le site sera fonctionnel avec tout les supports (mobile, ordinateur, tablette...)</Fragment>
        )
      },
      {
        desc: "Mise en place du contenu",
        add: true,
        tooltip: <Fragment>Mise en place du contenu du site internet (textes, images, vidéos...)</Fragment>
      },
      {
        desc: "Formulaire de contact",
        add: true,
        tooltip: <Fragment>Mise en place d'un formulaire de contact pour vos clients, particuliers...</Fragment>
      },
      {
        desc: "Statistiques de visite",
        add: true,
        tooltip: <Fragment>Mise en place de statistiques Google Analytics pour garder un oeil sur les visites de votre site...</Fragment>
      },
      {
        desc: "Mise en ligne du site",
        add: true,
        tooltip: <Fragment>Si vous souhaitez je peux vous aidez a mettre votre site en ligne pour de meilleur performances et très rapidement.</Fragment>
      },
      {
        desc: "Formation utilisation du site",
        add: true,
        tooltip: <Fragment>Je vous forme a savoir correctement utilisé votre site.</Fragment>
      },
      {
        desc: "Optimisation du référencement (SEO)",
        add: true,
        tooltip: <Fragment>Optimisation des balises HTML pour avoir le meilleur référencement naturel sur les moteurs de recherche tels que google, brave...</Fragment>
      }
    ]
  },
];