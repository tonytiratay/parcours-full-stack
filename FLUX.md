# Simplonline the Redux Way

## Redux
Le système qui lie tous les autres ensemble

##Store
Contient toutes les données de l'application. Il s'agit d'un state géant (Application Level State), avec autant de propriétés que de types de données.  Par exemple :
```javascript
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
