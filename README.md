# volto-widget-toggle
[![Releases](https://img.shields.io/github/v/release/eea/volto-widget-toggle)](https://github.com/eea/volto-widget-toggle/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-widget-toggle%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-widget-toggle/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-widget-toggle%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-widget-toggle/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-toggle-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-toggle-develop)


[Volto](https://github.com/plone/volto) add-on: Replace any checkbox with a nice toggle button within edit forms

## Features

![Toogle Checkboxes](https://raw.githubusercontent.com/eea/volto-widget-toggle/docs/docs/volto-widget-toggle.gif)

## Getting started

1. Create new volto project if you don't already have one:

   ```
   $ npm install -g yo @plone/generator-volto
   $ yo @plone/volto my-volto-project --addon @eeacms/volto-widget-toggle

   $ cd my-volto-project
   $ yarn add -W @eeacms/volto-widget-toggle
   ```

1. If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-widget-toggle"
   ],

   "dependencies": {
       "@eeacms/volto-widget-toggle": "^2.0.0"
   }
   ```

1. Install new add-ons and restart Volto:

   ```
   $ yarn
   $ yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-widget-toggle/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-widget-toggle/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
