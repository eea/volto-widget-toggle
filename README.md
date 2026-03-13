# volto-widget-toggle

[![Releases](https://img.shields.io/github/v/release/eea/volto-widget-toggle)](https://github.com/eea/volto-widget-toggle/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-widget-toggle%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-widget-toggle/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-widget-toggle%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-widget-toggle/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle&branch=develop)

[Volto](https://github.com/plone/volto) add-on: Replace any checkbox with a nice toggle button within edit forms

## Features

![Toogle Checkboxes](https://raw.githubusercontent.com/eea/volto-widget-toggle/master/docs/volto-widget-toggle.gif)

## Getting started

### Try volto-widget-toggle with Docker

      git clone https://github.com/eea/volto-widget-toggle.git
      cd volto-widget-toggle
      make
      make start

Go to http://localhost:3000

`make start` now defaults to Volto 18. To run the same setup against Volto 17, use:

      VOLTO_VERSION=17 make
      VOLTO_VERSION=17 make start

### Add volto-widget-toggle to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "dependencies": {
       "@eeacms/volto-widget-toggle": "*"
   }
   ```

   and `volto.config.js`:

   ```JavaScript
   const addons = ['@eeacms/volto-widget-toggle'];
   ```

* If not, create one with Cookieplone, as recommended by the official Plone documentation for Volto 18+:

   ```
   uvx cookieplone project
   cd project-title
   ```

1. Install or update dependencies, then start the project:

   ```
   make install
   ```

   For a Cookieplone project, start the backend and frontend in separate terminals:

   ```
   make backend-start
   make frontend-start
   ```

   For a legacy Volto 17 project, install the package with `yarn` and restart the frontend as usual.

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-widget-toggle/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-widget-toggle/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-widget-toggle/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
