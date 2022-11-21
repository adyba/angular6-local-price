import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { registerLocaleData } from '@angular/common';
import localeCs from '@angular/common/locales/cs';
import { PriceComponent } from './price/price.component';
registerLocaleData(localeCs, 'cs');

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, PriceComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
