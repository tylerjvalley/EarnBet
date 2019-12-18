import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopComponent } from './components/top/top.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { GameComponent } from './components/game/game.component';
import { SpecialOfferComponent } from './components/special-offer/special-offer.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    JumbotronComponent,
    MenuBarComponent,
    GameComponent,
    SpecialOfferComponent,
    LeaderboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
