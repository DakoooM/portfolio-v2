import fs from "fs";

export default function apiHomePage() {
  const apiRoutes = fs.readdirSync("./pages/api/v1/").filter(file => !file.includes("index") && file.endsWith(".js"));

  return `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        <title>Gcassinis - API v1</title>
        <style>
          body {
            font-family: 'Roboto', sans-serif;
          }
        </style>
      </head>
      <body>
          <h1>Bienvenue sur l'api de Gcassinis</h1>
          <h2>Liste des routes disponible</h2>
          <ul>
            ${
              apiRoutes.map(route => {
                const routeName = route.replace(".js", "");

                return `<li>/v1/${routeName}</li>`;
              }).join("")
            }
          </ul>
      </body>
    </html>
  `;
}