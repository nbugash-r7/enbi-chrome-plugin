///<reference path="../node_modules/@angular/core/src/application_ref.d.ts"/>
/**
 * Created by nbugash on 2016-09-08.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
//noinspection TypeScriptValidateTypes
platform.bootstrapModule(AppModule);
