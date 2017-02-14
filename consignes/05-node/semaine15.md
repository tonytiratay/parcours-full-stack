# Semaine 15

## Objectifs de cette semaine

> Cette semaine nous allons introduire les notions suivantes. La plupart d'entre elles sont valables aussi bien pour le front que pour le back.

* Routing
* Layout
* requête API
* Components VS Containers (ou Smart Components)
* Notifications utilisateur

Pour comprendre ces notions et faciliter notre travail nous allons avoir besoin de plusieurs packages Node et Meteor

## Les packages utilisés

### Node - Packages à installer

Cliquez sur un package pour accéder à sa documentation

* [axios](https://www.npmjs.com/package/axios)
* [lodash](https://www.npmjs.com/package/lodash)
* [url](https://www.npmjs.com/package/url)
* [react-komposer](https://www.npmjs.com/package/react-komposer)
* [classnames](https://www.npmjs.com/package/classnames)
* [react-mounter](https://github.com/kadirahq/react-mounter)

```bash
meteor npm install --save axios lodash url react-komposer classnames react-mounter
```

### Meteor - Packages à installer

Cliquez sur un package pour accéder à sa documentation

* [kadira:flow-router-ssr](https://github.com/kadirahq/flow-router/tree/ssr)
* [themeteorchef:bert](https://atmospherejs.com/themeteorchef/bert)
* [accounts-base](https://atmospherejs.com/meteor/accounts-base)
* [accounts-github](https://atmospherejs.com/meteor/accounts-password)
* [okgrow:accounts-ui-react](https://github.com/okgrow/accounts-ui-react)

```bash
meteor add kadira:flow-router-ssr
meteor add themeteorchef:bert
meteor add accounts-base
meteor add accounts-github
meteor add okgrow:accounts-ui-react
```

### Lier le router aux layout et composants

 **/imports/startup/startup-client.js**
 ```javascript
 import '../routes/routes.js';
 ```
 **/imports/routes/routes.js**
 ```javascript
 import React from 'react';
 import {mount} from 'react-mounter';
 import {FlowRouter} from 'meteor/kadira:flow-router-ssr'

 import {MainLayout} from '../layouts/MainLayout.js';
 import Home from '../pages/Home.js';

 FlowRouter.route('/', {
   name: 'home',
   action: function() {
     mount(MainLayout, {content: <Home />});
   }
 });

 ```
 **/imports/layouts/MainLayout.js**
 ```javascript
 import React from 'react';
 import { Segment, Grid } from 'semantic-ui-react'


 export const MainLayout = ({ content }) => (

   <div className="main-layout">
     <div id="content">
         {content}
     </div>
   </div>
 );
 ```
 **/imports/pages/Home.js**
 ```javascript
 import React, {Component} from 'react';

 export default class Home extends Component {
   render(){
     return (
       <div className="">
         <h1>
           Home
         </h1>
       </div>
     );
   }
 }
 ```
## Exercice Github

> ####  Adresse pour l'API Github :
> https://api.github.com/search/repositories?q=
> * Ajouter après le 'q=' le terme à chercher
> * L'API renvoie un objet avec 'data' comme propriété
> * La proprité data contient uune propriété 'items'
> * 'items' contient un tableau avec les résultats

**Composants**

  * Créer un Container github
  * Créer un composant search
  * Créer un composant carte utilisateur

**Container**

  * Faire la requête vers l'API github
  * Transmettre les datas aux composants
  * Transmettre les méthodes aux composants
  * C'est le seul composant qui a à faire avec l'envoi ou la réception de données

**Components**

  * Ils reçoivent tout via des props

**Exercice**

 * Dossier containers > GithubSearch
 * GithubSeach importe les composants Search et UserCard
 * Lors du componentWillMount faire la requete avec les valeurs par défaut
 * Passer au composant search une méthode pour récupérer la valeur saisie
 * Debouncer la méthode
 * Alerter l'utilisateur lors d'une erreur avec la requête
