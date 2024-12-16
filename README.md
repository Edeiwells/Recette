Ceci est une application web permettant de gérer des recettes de cuisine. Vous pouvez ajouter, consulter, rechercher et supprimer des recettes. L'application permet également de marquer des recettes comme favorites.

## Prérequis : 

Node.js (version 14 ou supérieure)
npm (version 6 ou supérieure)
MongoDB
Installation



## Clonez le dépôt :

git clone <URL_DU_PROJET>
cd receipes

Installer les dépendances pour le frontend :   

npm install

installez les dépendances pour le backend : 

cd backend
npm install
cd ..



Configuration :  

Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale. Par défaut, l'application se connecte à mongodb://localhost:27017/recipesDB.

Vous pouvez modifier les configurations de la base de données dans le fichier index.js.

## Restaurer la base de données

Pour restaurer la base de données MongoDB à partir des fichiers exportés, utilisez MongoDB Compass ou la ligne de commande.

### Utilisation de MongoDB Compass

1. Ouvrez MongoDB Compass et connectez-vous à votre base de données.
2. Sélectionnez la base de données `recipesDB`.
3. Pour chaque collection, cliquez sur **Import Data**.
4. Sélectionnez le fichier JSON correspondant et cliquez sur **Import**.

### Utilisation de la ligne de commande

Utilisez la commande `mongoimport` pour importer chaque fichier JSON. Par exemple :

 ` ``sh
mongoimport --db recipesDB --collection recipesDB.recipes --file ./dump/recipesDB.recipes.json --jsonArray




## Utilisation : 

Dans un terminal démarrer le backend avec npm start et dans un terminal démarrer le frontend avec npm run dev

Ouvrez votre navigateur et accédez à http://localhost:5173 pour voir l'application en action.



## Fonctionnalités : 

Ajouter une recette
Accédez à la page "Ajouter des recettes" via le menu de navigation.
Remplissez le formulaire et soumettez-le pour ajouter une nouvelle recette.

Consulter les recettes
La page d'accueil affiche toutes les recettes disponibles.
Cliquez sur une recette pour voir les détails.

Rechercher des recettes
Utilisez la barre de recherche dans l'en-tête pour rechercher des recettes par titre.

Supprimer une recette
Cliquez sur le bouton de suppression dans la carte de la recette pour la supprimer.

Ajouter aux favoris
Cliquez sur le bouton "Ajouter aux favoris" dans la carte de la recette pour ajouter une recette à vos favoris.

Consulter les recettes favorites
Accédez à la page "Mes favoris" via le menu de navigation pour voir vos recettes favorites.



## Structure du projet 

receipes/
    backend/
        controllers/
            recipeController.js
        models/
            Recipe.js
        index.js
        package.json
    src/
        components/
            footer/
                footer.jsx
                footer.scss
            header/
                Header.jsx
                header.scss
            recipes/
                add/
                cards/
                details/
                Filter/
                search/
        Pages/
            Add/
                AddRecipes.jsx
                recipes.scss
            Favorite/
                RecipeFavorite.jsx
                recipeFavorite.scss
            Home/
                Home.jsx
                home.scss
        App.jsx
        App.scss
        main.jsx
        index.css
    index.html
    package.json
    vite.config.js
    README.md
    


## Dépendances

Frontend :

React
React Router DOM
Axios
Sass

Backend :

Express
Mongoose
Cors
Nodemon

