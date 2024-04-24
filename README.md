<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripción

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Requisito Previo
Este arquetipo cuenta con una conexion TypeOrm a PostgreSQL, es necesario crear una Base de datos en ambiente local y reemplazar los valores de conexion en el archivo de variables de entorno.
Si se desea instalar otro proveedor de BD, consultar https://typeorm.io/

### Instancia de BD
Cuenta con un docker-compose el cual tiene una BD postgres y configurada en el puerto `5433`, inicialmente crea una base de datos con el nombre de `nestjs` y las credenciales por defecto son user: `postgres` pass: `postgres`.

Para iniciar el contenedor, es necesario tener instalado docker en tu ambiente local, y ejecutar el comando siguiente:
```bash 
$ docker-compose up
```
Esto disponibilizara la instancia de BD configurada en el archivo [docker-compose.yml](docker-compose.yml)

## Instalación

```bash 
$ npm install
```

## Ejecución de la Aplicación

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run tests

# e2e tests
$ npm run tests:e2e

# tests coverage
$ npm run tests:cov
```

## Despliegue
Una vez que la aplicación indique que se encuentra operativa, ingresa a http://localhost:3000/api donde encontraras la documentacion Swagger de la API Rest.
El puerto disponible tambien es configurable en el archivo de variables de entorno, por defecto es el puerto 3000

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - Juan Pablo Rodriguez

## License

Nest is [MIT licensed](LICENSE).
