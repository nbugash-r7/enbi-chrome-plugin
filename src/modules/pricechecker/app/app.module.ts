/**
 * Created by nbugash on 2016-09-08.
 */
import { NgModule, NgModuleMetadataType } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
@NgModule(<NgModuleMetadataType>{
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }