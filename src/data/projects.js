const projects = [
  {
    title: "Mon Vieux Grimoire",
    description: "Site de notation de livres - Backend API avec Node.js",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt", "Sharp"],
    githubLink: "https://github.com/ljutvi31/P6-MonVieuxGrimmoire",
  },
  {
    title: "Kasa",
    description: "Application web de location immobilière développée avec React.",
    techStack: ["React", "React Router", "SASS"],
    githubLink: "https://github.com/ljutvi31/Projet5-LocationImmo-React",
    hasDetails: true, // Ajout d'un indicateur pour les détails
    details: {
      objectif: "Développer une application avec React et organiser le code en composants réutilisables.",
      competences: [
        "Utilisation de React Router pour la navigation.",
        "Manipulation du state avec useState et useParams.",
        "Structuration d’un projet en composants réutilisables.",
      ],
      difficultes: [
        {
          probleme: "Organisation des fichiers dans un projet React.",
          solution: "J'ai suivi les conventions de structuration des fichiers React et séparé les composants et les pages pour une meilleure lisibilité."
        },
        {
          probleme: "Gérer les données dynamiquement sans rafraîchir la page.",
          solution: "Utilisation du state et des hooks React pour assurer une mise à jour dynamique."
        },
        {
          probleme: "Correction des erreurs React, notamment les clés dans `.map()`.",
          solution: "Ajout d'une clé unique à chaque élément de liste pour éviter les erreurs de rendu."
        },
      ]
    }
  },
  {
    title: "Sophie Bluel",
    description: "Portfolio dynamique d'architecte développé en JavaScript avec gestion d’API.",
    techStack: ["JavaScript", "HTML", "CSS", "API REST"],
    githubLink: "https://github.com/ljutvi31/projet3",
    hasDetails: true, // Ajout d'un indicateur pour les détails
    details: {
      objectif: "Dynamiser une page statique avec JavaScript et gérer les requêtes API.",
      competences: [
        "Récupérer et afficher des données d’une API.",
        "Gérer l’authentification utilisateur avec un token.",
        "Modifier dynamiquement le contenu de la page avec JavaScript (DOM)."
      ],
      difficultes: [
        {
          probleme: "Comprendre la logique des appels API et leur réponse.",
          solution: "J'ai utilisé `fetch()` et `async/await` pour mieux comprendre le fonctionnement des promesses et la gestion des erreurs."
        },
        {
          probleme: "Gérer les erreurs d’authentification et de connexion.",
          solution: "Mise en place d’une gestion d’erreur et affichage de messages d’erreur explicites pour l’utilisateur."
        },
        {
          probleme: "Structurer mon code pour qu’il soit plus lisible.",
          solution: "J'ai séparé la logique en plusieurs fonctions réutilisables et organisé mon code en modules."
        },
      ]
    }
  },
  {
    title: "Nina Carducci",
    description: "Site vitrine de photographe avec optimisation SEO.",
    techStack: ["HTML", "CSS", "JavaScript", "SEO", "Lighthouse", "Wave"],
    githubLink: "https://github.com/ljutvi31/Projet4-Debug-site-",
  },
  {
    title: "Booki",
    description: "Site d'agence de voyage, création de la page d'accueil.",
    techStack: ["HTML", "CSS"],
    githubLink: "https://github.com/ljutvi31/P2-pageWeb",
  }
];

export default projects;
