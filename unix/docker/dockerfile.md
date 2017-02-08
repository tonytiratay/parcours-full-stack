# DockerFileExemple

## FROM et RUN

* FROM: Image de base
* RUN: instruction à executer dans cette image

```
FROM debian:jessie
RUN apt-get update
RUN apt-get install -y git
RUN apt-get install -y vim
```
## Chainer la commande RUN

* FROM: Image de base
* RUN: Instructions regroupées en une commande
* Pour éviter toute duplication dans l'installation des sources, il est recommandé de trier les packages à installer par ordre alphabetique.

```
FROM debian:jessie
RUN apt-get update && apt-get install -y \
  git\
  node\
  python\
  ruby\
  vim
```

### CMD

Cette commande est executée lorsque le container final est monté.

```
FROM debian:jessie
RUN apt-get update && apt-get install -y \
  git\
  vim
CMD ["echo", "Hello World!"]
```

### COPY and ADD

Ces commandes permettent de copier un fichier dans l'image pendant sa construction.

* COPY permet uniquement de copier des fichiers locaux
* ADD permet en plus de récupérer des fichiers distants, et d'automatiquement extraire un fichier compressé
```
COPY README.ms /src/site/README.md
```
