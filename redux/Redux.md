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
	users: { // usersReducer => activeUser: {},	selectedUsers: [],
	},
	resources: { // resourcesReducer => listResources: [],	editResource: {}, viewResource: {}
	}
}
```

##Reducers
Un Reducer gère une propriété du state général.

Exemple du reducer_users.js
```javascript
export default function(){
  return {
    activeUser: {id: 'A765FH786'},
    selectedUsers: [user1, user3, user42],
    usersList: [...]
  }
}
```
Puis dans reducers/index.js

```javascript
import { combineReducers } from 'redux';
import ResourcesReducer from './reducer_books.js';
import UsersReducer from './reducer_books.js';

const rootReducer = combineReducers({
  users: UsersReducer,
  resources: ResourcesReducer
});

export rootReducer;
```


##Action et Action Creator

Tout changement dans le state de l'application ne peut se faire que par des actions.

#### Action Creator

C'est une simple fonction qui retourne une action. Par exemple :

```javascript
function(return {
  type: 'USER_SELECTED',
  user: 'userIDjhg786'
})
```
la fonction retourne une action, qui n'est rien d'autre qu'un objet avec au minimum une propriété "type".
Toute autre propriété peut être ajoutée et nommée en fonction des besoins.

#### Action retournée par l'Action Creator

La convention veut généralement que la deuxième propriété, qui contient les données, soit appelée "payload". Ici pour plus de clarté nous l'avons appelée user dans l'action creator.
```javascript
 { type: 'USER_SELECTED', user: 'userIDjhg786'}
```

> Lorsqu'une action est envoyée, elle est automatiquement transmise à tous les reducers. Ces derniers, peuvent donc choisir de retourner un nouveau state ou non, en fonction du type et du contenu de l'action.

##Containers

Le but d'un container est d'être un lien entre Redux et React. Il s'agit d'un simple composant React, que l'on promeut "Container" grâce à la librairie react-redux. De cette façon, le composant a accès au state de l'application.

Exemple dans conatiners/UsersList.js
```javascript
import React, {Component} from 'react';
import {connect} from 'react-redux'; // permet de convertir ce composant en container

//On n'exporte pas le composant directement. Il est exporté grâce à connect en bas de page
class UsersList extends Component{
  renderlist(){
    return this.props.users.map((user)=>{
      return (
        <li>{user.name}</li>
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
  //Tout ce qui sera retourné par cette fonction
  //sera mappé en tant que props
  return {users: state.users.usersList};
}

  //grâce à la fonction connect, importé de react-redux, on exporte le composant
  //UsersList, en lui passant comme props ce qui est retourné par la fonction
  //mapStateToProps
export default connect(mapStateToProps)(UsersList);

```

## React
