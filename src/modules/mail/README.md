# Uso de Plantillas de Correo en el Módulo de Envío de Correos

[![nestjs-modules/mailer version](https://img.shields.io/npm/v/@nestjs-modules/mailer?label=@nestjs-modules/mailer)](https://www.npmjs.com/package/@nestjs-modules/mailer)
[![handlebars version](https://img.shields.io/npm/v/handlebars?label=handlebars)](https://www.npmjs.com/package/handlebars)
[![nodemailer version](https://img.shields.io/npm/v/nodemailer?label=nodemailer)](https://www.npmjs.com/package/nodemailer)

Este módulo de envío de correos electrónicos en NestJS utiliza archivos .hbs para las plantillas de correo. A continuación, se detallan los pasos para agregar y utilizar nuevas plantillas de correo al proyecto.

Para enviar correos electrónicos desde una aplicación NestJS, es posible utilizar 
el módulo @nestjs-modules/mailer junto con nodemailer.

## Configuración

1. Instala las dependencias necesarias:
 ```bash
 npm install @nestjs-modules/mailer nodemailer
 ```

2. Configura el módulo de envío de correos electrónicos en la aplicación NestJS. 
Es posible hacerlo en un módulo separado, por ejemplo, MailModule:

````typescript
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST'),
          port: config.get('MAIL_PORT'),
          secure: true,
          auth: {
            user: config.get('MAIL_USER'),
            pass: config.get('MAIL_PASSWORD'),
          },
        },
        defaults: {
          from: `"No Reply" <${config.get('MAIL_FROM')}>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
````

3. Crear la plantillas de correo electrónico en el directorio especificado en la configuración (templates en este caso). 

    _**Nota: Es posible utilizar archivos .hbs o cualquier otro formato compatible con el adaptador de plantillas.**_


4. Importante agregar en el archivo nest-cli.json las siguientes dos propiedades:
````json lines
"assets": ["modules/mail/templates/**/*"],
"watchAssets": true
````

- La propiedad assets hace referencia a donde se almacenaran las plantillas de correo
- Deberia quedar algo como esto:
````json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true,
    "builder": "swc",
    "typeCheck": true,
    "assets": ["modules/mail/templates/**/*"],
    "watchAssets": true
  }
}
````
5. inyectar el servicio MailerService en cualquier componente o controlador donde se necesite enviar correos electrónicos.

## Estructura de Directorios
Antes de comenzar, asegúrate de tener la siguiente estructura de directorios:
```
src
│
└───modules
    └───mail
        └───templates
```

En este directorio /modules/mail/templates, almacenaremos todas nuestras plantillas de correo.

## Crear una Plantilla de Correo
Crear un nuevo archivo .hbs en el directorio /modules/mail/templates. Por ejemplo, welcome.hbs.
Dentro de este archivo, escribe el contenido del correo electrónico utilizando el formato Handlebars. Por ejemplo:
 

```html
<style>
   @import
   url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
   * { font-family: Poppins, system-ui; padding: 0px; margin: 0px; }
</style>
<div class='container-content' style='display: flex;align-items: center;justify-content: center;'>
   <div class='card' style='border-radius: 10px;background-color: white;box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);text-align: center;padding: 40px 30px; width: auto;'>
      <div class='card-header'>
         <h1><strong>Envío de correo electrónico con éxito</strong></h1>
      </div>
      <div class='card-body'>
         <img src='https://cdn-icons-png.flaticon.com/512/4144/4144781.png' class='my-3' alt='Email image' style='margin-top: 30px; width: 150px;height: 150px;' />
         <h1 class='my-3' style='margin: 30px 0px;'>Bienvenido {{name}},</h1>
         <p style='padding: 0px; margin: 0px;'>Gracias por enviar emails con NestJs, grandes cosas te esperan.</p>
      </div>
   </div>
</div>
```
Utiliza las variables de Handlebars (**{{ name }}** en este ejemplo) para insertar datos dinámicos en la plantilla.

## Test
El módulo de envío de correos electrónicos tiene dos servicios REST:

* **POST /mail/send:** Envía un correo electrónico sin adjunto.
* **POST /mail/send-attach:** Envía un correo electrónico con adjunto.

Ambos servicios aceptan un cuerpo JSON que incluye la información necesaria para enviar el correo electrónico, incluyendo la plantilla a utilizar y los datos dinámicos.

```json
{
   "name": "string",
   "email": "string",
   "template": "string"
}
```

### Ejemplo
```json
{
   "name": "Test Usuario",
   "email": "usuario@dominio.cl",
   "template": "welcome"
}

```
El parametro template es opcional, en este caso si no se envia, por defecto la plantilla que utilizará, será la de welcome

¡Y eso es todo! Ahora estás listo para utilizar plantillas de correo en tu proyecto NestJS.

## Documentación 

[nestjs-modules/mailer](https://nest-modules.github.io/mailer/docs/mailer)
