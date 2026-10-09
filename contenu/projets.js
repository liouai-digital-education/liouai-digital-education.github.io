/* ==========================================================================
   LIOUAÏ DIGITAL EDUCATION — LISTE DES PROJETS
   --------------------------------------------------------------------------
   Ce fichier est le SEUL à modifier pour ajouter, retirer ou mettre à jour
   un projet. La page se met à jour toute seule au prochain chargement.

   AJOUTER UN PROJET EN 4 ÉTAPES
   1. Copiez le bloc « MODÈLE » ci-dessous (de { à },).
   2. Collez-le dans la liste LIOUAI_PROJETS, à l'endroit voulu :
      l'ordre de la liste = l'ordre des colonnes sur la page.
   3. Remplacez les textes entre guillemets, en français (fr) ET en anglais (en).
   4. Enregistrez, puis rechargez la page dans le navigateur.

   RÈGLES À RESPECTER
   - Chaque texte est entre guillemets droits "…". Une apostrophe ' à
     l'intérieur ne pose aucun problème. Un guillemet " à l'intérieur doit
     s'écrire \" (ou utilisez « … »).
   - Chaque bloc { … } se termine par une virgule, sauf éventuellement le dernier.
   - Les champs marqués (facultatif) peuvent être supprimés ou laissés vides ("" ou []).
   - Un seul projet doit avoir  vedette: true  : il s'affiche en grand dans
     « À la une ». Les autres restent  vedette: false.
   - En cas de page blanche après modification : une virgule ou un guillemet
     manque presque toujours. Appuyez sur F12 > Console pour voir la ligne fautive.

   ------------------------------------------------------------------------
   MODÈLE À COPIER
   ------------------------------------------------------------------------
   {
     id: "mon-nouveau-projet",     // identifiant unique : minuscules, tirets, sans accent
     vedette: false,               // true = projet « À la une » (un seul à la fois)
     statut: "prep",               // "publie" | "test" | "prep"
     annee: "2027",
     illustration: "donnees",      // "reseau" | "donnees" | "nombres" | "algebre" | "proba"
                                   // ou une image : "images/mon-projet.png"
     lien: "",                     // (facultatif) adresse d'une page externe, sinon ""
     fr: {
       titre: "Titre du projet",
       sousTitre: "Sous-titre court",
       resume: "Deux phrases maximum : ce que le lecteur apprend et pourquoi.",
       public: "À qui s'adresse le projet.",
       format: "Workbook PDF · 80 pages",
       themes: ["Thème 1", "Thème 2"],
       outils: ["Python", "Tableur"],   // (facultatif)
       quoi: "",                   // (facultatif) description plus longue
       chiffres: [],               // (facultatif) ex. { valeur: "10", label: "chapitres" }
       parcours: [],               // (facultatif) ex. { etape: "Ch. 1–3", texte: "…" }
       conception: []              // (facultatif) ex. { titre: "…", texte: "…" }
     },
     en: {
       titre: "Project title",
       sousTitre: "Short subtitle",
       resume: "Two sentences at most.",
       public: "Who it is for.",
       format: "PDF workbook · 80 pages",
       themes: ["Topic 1", "Topic 2"],
       outils: ["Python", "Spreadsheet"],
       quoi: "",
       chiffres: [],
       parcours: [],
       conception: []
     }
   },
   ========================================================================== */

window.LIOUAI_PROJETS = [

  /* ---------------- Projet 1 : À la une ---------------- */
  {
    id: "maths-de-linkedin",
    vedette: true,
    statut: "test",
    annee: "2026",
    illustration: "reseau",
    lien: "",
    fr: {
      titre: "Les mathématiques de LinkedIn",
      sousTitre: "Mesurer avant d'agir : un manuel pour stratèges",
      resume: "Un workbook pour lire la forme de son réseau LinkedIn (cercles, ponts, liens faibles, communautés) et décider sur des mesures plutôt que sur des impressions.",
      public: "Adultes en reconversion vers la data, à l'aise avec un tableur et Python.",
      format: "Workbook PDF · env. 90 pages · scripts, notebooks et jeu de données",
      themes: ["Théorie des graphes", "Centralités", "Communautés", "TF-IDF", "Test A/B"],
      outils: ["Python", "NetworkX", "pandas", "scikit-learn", "Tableur", "LaTeX"],
      quoi: "Votre réseau LinkedIn a une forme que l'écran ne montre pas. Ce manuel apprend à la mesurer à partir de l'export officiel de vos relations et de relevés faits à la main, à comprendre la logique des suggestions, de la recherche et du fil sans prétendre en connaître la recette, puis à agir avec un plan de 30 jours suivi par un tableau de bord.",
      chiffres: [
        { valeur: "10", label: "chapitres, avec corrigés" },
        { valeur: "150", label: "relations fictives dans le jeu compagnon" },
        { valeur: "21", label: "références sourcées" },
        { valeur: "3", label: "niveaux de confiance" }
      ],
      parcours: [
        { etape: "Ch. 0–2", texte: "Recueillir ses données sans exposer personne, et en faire un graphe." },
        { etape: "Ch. 3–5", texte: "Lire la forme du réseau : distances, ponts, liens faibles, communautés." },
        { etape: "Ch. 6–8", texte: "Comprendre les suggestions, la recherche de profils et le fil d'actualité." },
        { etape: "Ch. 9", texte: "Agir pendant 30 jours, et mesurer honnêtement ce qui a changé." }
      ],
      conception: [
        { titre: "Un point de départ resserré", texte: "Une synthèse de 14 pages sur les modèles mathématiques des réseaux sociaux, recentrée sur LinkedIn et sur un lecteur précis : l'adulte en reconversion vers la data." },
        { titre: "Une séquence fixe", texte: "Chaque chapitre suit le même fil : un modèle, un relevé, une décision. Le calcul se fait d'abord à la main sur un mini-réseau de 5 personnes, puis au tableur et en Python." },
        { titre: "Un jeu de données reproductible", texte: "150 relations fictives générées par script avec une graine fixe : chaque lecteur obtient exactement les résultats des corrigés." },
        { titre: "Des chiffres réellement calculés", texte: "Chaque résultat vient d'un script exécuté. Scripts, notebooks et sorties console sont fournis pour tout refaire." },
        { titre: "Des affirmations étiquetées", texte: "Toute affirmation sur LinkedIn porte une source ou une étiquette : Publié, Modèle classique ou Jouet." },
        { titre: "Un cadre éthique", texte: "Aucune collecte automatisée, pseudonymisation dès la saisie et respect des conditions d'utilisation de LinkedIn." }
      ]
    },
    en: {
      titre: "The Mathematics of LinkedIn",
      sousTitre: "Measure before you act: a handbook for strategists",
      resume: "A workbook to read the shape of your LinkedIn network (circles, bridges, weak ties, communities) and decide on measurements rather than impressions.",
      public: "Adults moving into data careers, comfortable with spreadsheets and Python.",
      format: "PDF workbook · about 90 pages · scripts, notebooks and dataset",
      themes: ["Graph theory", "Centrality", "Communities", "TF-IDF", "A/B testing"],
      outils: ["Python", "NetworkX", "pandas", "scikit-learn", "Spreadsheet", "LaTeX"],
      quoi: "Your LinkedIn network has a shape the screen does not show. This handbook teaches you to measure it from the official export of your connections and from records you take by hand, to understand how suggestions, search and the feed work without claiming to know the recipe, and then to act with a 30-day plan tracked on a dashboard.",
      chiffres: [
        { valeur: "10", label: "chapters, with solutions" },
        { valeur: "150", label: "fictional connections in the companion dataset" },
        { valeur: "21", label: "cited references" },
        { valeur: "3", label: "confidence levels" }
      ],
      parcours: [
        { etape: "Ch. 0–2", texte: "Collect your data without exposing anyone, and turn it into a graph." },
        { etape: "Ch. 3–5", texte: "Read the network's shape: distances, bridges, weak ties, communities." },
        { etape: "Ch. 6–8", texte: "Understand suggestions, profile search and the news feed." },
        { etape: "Ch. 9", texte: "Act for 30 days, and measure honestly what changed." }
      ],
      conception: [
        { titre: "A focused starting point", texte: "A 14-page synthesis on mathematical models of social networks, refocused on LinkedIn and on one reader: an adult moving into data." },
        { titre: "A fixed sequence", texte: "Every chapter follows the same thread: a model, a record, a decision. Calculations are first done by hand on a 5-person mini-network, then in a spreadsheet and in Python." },
        { titre: "A reproducible dataset", texte: "150 fictional connections generated by a script with a fixed seed, so every reader gets exactly the results in the solutions." },
        { titre: "Numbers that were actually computed", texte: "Every result comes from a script that was run. Scripts, notebooks and console outputs are included so you can redo everything." },
        { titre: "Labelled claims", texte: "Every claim about LinkedIn carries a source or a label: Published, Classic model or Toy model." },
        { titre: "An ethical frame", texte: "No automated collection, pseudonymisation at the point of entry, and respect for LinkedIn's terms of use." }
      ]
    }
  },

  /* ---------------- Projet 2 ---------------- */
  {
    id: "maths-du-data-analyst",
    vedette: false,
    statut: "prep",
    annee: "2026",
    illustration: "donnees",
    lien: "",
    fr: {
      titre: "Les maths du data analyst",
      sousTitre: "Les prérequis, en autonomie",
      resume: "Un workbook de remise à niveau pour acquérir les bases mathématiques de l'analyse de données, à son rythme.",
      public: "Adultes autodidactes et en reconversion vers la data.",
      format: "Workbook · prototype en LaTeX",
      themes: ["Prérequis", "Remise à niveau", "Analyse de données"],
      outils: ["Python", "Tableur", "LaTeX"]
    },
    en: {
      titre: "Maths for Data Analysts",
      sousTitre: "The prerequisites, self-paced",
      resume: "A refresher workbook to build the mathematical foundations of data analysis at your own pace.",
      public: "Self-taught adults and career changers moving into data.",
      format: "Workbook · LaTeX prototype",
      themes: ["Prerequisites", "Refresher", "Data analysis"],
      outils: ["Python", "Spreadsheet", "LaTeX"]
    }
  },

  /* ---------------- Projet 3 ---------------- */
  {
    id: "explorations-arithmetiques",
    vedette: false,
    statut: "prep",
    annee: "2026",
    illustration: "nombres",
    lien: "",
    fr: {
      titre: "Explorations arithmétiques",
      sousTitre: "Pour adultes curieux",
      resume: "Des explorations à mener avec un crayon et du papier, pour le plaisir de découvrir les nombres et leurs régularités.",
      public: "Adultes à l'aise avec le calcul qui veulent explorer les mathématiques en autonomie.",
      format: "Deux tomes · PDF A4",
      themes: ["Arithmétique", "Découverte", "Autonomie"],
      outils: ["Papier et crayon", "LaTeX"]
    },
    en: {
      titre: "Arithmetic Explorations",
      sousTitre: "For curious adults",
      resume: "Explorations to work through with pencil and paper, for the pleasure of discovering numbers and their patterns.",
      public: "Adults comfortable with arithmetic who want to explore mathematics on their own.",
      format: "Two volumes · A4 PDF",
      themes: ["Arithmetic", "Discovery", "Self-study"],
      outils: ["Pencil and paper", "LaTeX"]
    }
  }

];
