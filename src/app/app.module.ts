import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { TabsMenuComponent } from './components/tabs-menu/tabs-menu.component';
import { TextWrapComponent } from './components/text-wrap/text-wrap.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    ResultListComponent,
    TabsMenuComponent,
    TextWrapComponent,
    SettingsPageComponent,
    TopMenuComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
