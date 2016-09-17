# Simplonline the Redux Way

## Redux
Le système qui lie tous les autres ensemble

##Store
Contient toutes les données de l'application. Il s'agit d'un state géant (Application Level State), avec autant de propriétés que de types de données.  Par exemple :
```javascript
// Les propriétés 'users' et 'resources' sont liées chacune à un Reducer.
// C'est ce reducer qui se chargera de mettre à jour la propriété dans le state général.
//Comme tous les composants tirent leurs données de ce state, toute l'application est automatiquement mise à jour.
store = {
	users: {
		activeUser: {},
		selectedUsers: [],
	},
	resources: {
		listRessources: [],
		editedRessource: {},
		viewingRessource: {}
	}
}
```

##Reducers
Un Reducer gère une propriété du state général.

##Action Dispatcher

##Containers

## React
