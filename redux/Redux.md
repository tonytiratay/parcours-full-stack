# Simplonline the Redux Way

## Redux
Le système qui lie tous les autres ensemble

![Alt text](./redux-schema.png)

##Store
Contient toutes les données de l'application. Il s'agit d'un state géant (Application Level State), avec autant de propriétés que de types de données.  Par exemple :
```javascript
// Les propriétés 'users' et 'resources' sont liées chacune à un Reducer.
// C'est ce reducer qui se chargera de mettre à jour la propriété dans le state général.
// Comme tous les composants tirent leurs données de ce state, toute l'application est automatiquement mise à jour.

store = {
	users: usersReducer, // => activeUser: {},	selectedUsers: []
	resources: resourcesReducer // => listResources: [],	editResource: {}, viewResource: {}
}
```

##Reducers
Un Reducer gère une propriété du state général. C'est une fonction qui reçoit deux arguments. Le state actuel, et une action.

> ATTENTION ! Le state reçu par le reducer n'est pas LE state général de l'application. Il s'agit uniquement de la partie du state dont s'occupe le reducer.

Exemple du reducer_users.js

```javascript
export default function(state = null, action){
  switch (action.type) {
    case 'USERS_SELECT':
      return action.usersId;
      break;
  }
  return state;
  // Comme redux ne permet pas de retourner undefined comme state, nous lui donnons null comme valeur par défaut.
  }
}
```
Puis dans reducers/index.js

```javascript
import { combineReducers } from 'redux';
import UsersReducer from './reducer_users.js';

const rootReducer = combineReducers({
  users: UsersReducer
});

export rootReducer;
```

##Action et Action Creator

Tout changement dans le state de l'application ne peut se faire que par des actions.

#### Action Creator

C'est une simple fonction qui retourne une action. Par exemple :
Dans actions/index.js

```javascript
export function selectUsers(usersId){
  type: 'USER_SELECTED', // Le type est obligatoire, et est écrit en majuscules. Généralement il vient d'un const plutôt qu'une string
  usersId: usersId
})
```

la fonction retourne une action, qui n'est rien d'autre qu'un objet avec au minimum une propriété "type".
Toute autre propriété peut être ajoutée et nommée en fonction des besoins.

#### Action retournée par l'Action Creator

La convention veut généralement que la deuxième propriété, qui contient les données, soit appelée "payload". Ici pour plus de clarté nous l'avons appelée usersId dans l'action creator.
```javascript
 { type: 'USER_SELECTED', usersId: ['userIDjhg786']}
```

> Lorsqu'une action est envoyée, elle est automatiquement transmise à tous les reducers. Ces derniers, peuvent donc choisir de retourner un nouveau state ou non, en fonction du type et du contenu de l'action.

##Containers

Le but d'un container est d'être un lien entre Redux et React. Il s'agit d'un simple composant React, que l'on promeut "Container" grâce à la librairie react-redux. De cette façon, le composant a accès au state de l'application.

Exemple dans conatiners/UsersList.js

```javascript
import React, {Component} from 'react';
import {connect} from 'react-redux'; // Permet de convertir ce composant en container
import { selectUsers } from '../actions/index.js'; // Importe l'action creator dont on a besoin
import { bindActionCreators } from 'redux'; // Permet d'envoyer l'action à tous les reducers

// On n'exporte pas le composant directement.
// Il est exporté grâce à connect en bas de page

class UsersList extends Component{

  renderlist(){
    return this.props.users.map((user)=>{
      return (
        <li onClick={ () => this.props.selectUsers() } >{user.name}</li>
      )
    });
  }

  render(){
    return (
      <ul>{this.renderlist()}</ul>
    )
  }
}

function mapStateToProps(state){

  // Tout ce qui sera retourné par cette fonction
  // sera mappé en tant que props

  return {users: state.users.usersList};
}

function MapDispatchToProps(dispatch){

  // Dés que selectUsers est appelé, le résultat
  // doit être passé à tous nos reducers.

  return bindActionCreators({selectUsers: selectUsers}, dispatch);

  // Tout ce que retourne cette fonction sera passé comme props aux composants.
  // Dans ce cas on peut utiliser: this.props.selectUsers => Appelle l'Action Creator
  // Dans l'objet {selectUsers: selectUsers}, le premier selectUsers est le nom du props
  // passé au composant, et le second est la fonction exportée par l'Action Creator.
  // Le dispatch permet d'envoyer cette action à tous les reducers pour que les concernés
  // puiseent la traiter

}

//grâce à la fonction connect, importée de react-redux, on exporte le composant
//UsersList, en lui passant comme props ce qui est retourné par la fonction
//mapStateToProps et MapDispatchToProps

export default connect(mapStateToProps, MapDispatchToProps)(UsersList);

```

## React
React ne fait donc jamais lui même de manipulation de données. On peut distinguer en gros deux types de composants

#### Les Containers (ou Smarts Components)

Dans le cas de Redux, une librairie 'connect' permet de transformer un composant classique, en lui ajoutant automatiquement en tant que props des parties du state général de l'application. Ce sont les seuls composants a avoir connaissance de redux.

Il ne manipulent cependant jamais eux-même quelque donnée que ce soit. Ils émettent des actions, déclenchées ou non par l'utilisateur, et les reducers vont se charger de modifier ou non le state général. Le container héritera des changements du state automatiquement et les transmettra aux "dumbs components".

#### Les Dumbs Components

Ces composants sont des éléments React tout à fait classiques, ils reçoivent leurs props du container parent.
