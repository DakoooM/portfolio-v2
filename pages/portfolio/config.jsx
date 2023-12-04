import { Fragment } from "react";

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