# Keycloak Themes

Keycloak Themes used by the Genny system.

## Contents
- [Overview](#Overview)
- [Developing Themes](#Developing-Themes)
- [Changelog](#Changelog)

## Overview
Implementation of Keycloak Themes for use by the genny system.

## Developing Themes
### Getting Started
To run keycloak on your machine, navigate to the directory and run the following command:

`docker-compose up -d`

Keycloak instance should now be running on `http://localhost:8080/`

To stop the instance of keycloak, run the following command:

`docker-compose down`

### Creating a Theme
To create a new theme, following these steps:

#### 1. Copy /themes/genny directory and change the directory name

#### 2. Change the logo or name

The file `/login/theme.properties` has the following lines that can be edited:

- projectName (string: any): The name of the project that will be displayed in the heading.
- projectLogo (string: image url): The url of the logo that will be displayed in the heading.
- displayProjectName (bool): If the name will be displayed.
- displayProjectLogo (bool): If the logo will be displayed.

#### 3. Change the colors

The file `/login/resources/css/login.css` has the following colours defined:

- PRIMARY COLOUR: The main colour used in the theme. Will be applied to the header background, buttons, input borders, the subheading text, and links.
- ON PRIMARY COLOUR: The color that will be used for the project name, if any.

Change all of the instances of the colour in those code blocks to the desired colour.

#### 4. Change the background image

The file `/login/resources/css/login.css` has the following image defined:

- BACKGROUND IMAGE: The main image used for the background. You can edit the file path to a new image you place in the directory `/login/resources/img/`, or you can replace the image `background1.jpg` with your new image.

---

## Deploying to production

To deploy your new or updated themes to the production keycloak server:

Package the Jar file:

`./package.sh <theme-name>`


SSH into the production server:

`ssh ubuntu@keycloak11`

Locate the repo and pull changes:

`cd keycloak-themes`

`git pull`

Copy the Jar to the docker container:

`docker cp <theme-name>.jar <keycloak-container>:/opt/jboss/keycloak/standalone/deployments`

You should now see your themes in the admin console of keycloak.

**Note:**

Alternatively you can package all themes at once using:

`./package-all.sh`


## Changelog

* Initial Test of updated Themes.
* Added documentation.
* Added packaging script
* Updated package.json 

