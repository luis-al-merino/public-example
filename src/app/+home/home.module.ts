import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SmallSpotsComponent } from './small-spots/small-spots.component';
import { GameSpotComponent } from './game-spot/game-spot.component';
import { TileComponent } from '../_tile/tile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    SmallSpotsComponent,
    GameSpotComponent,
    TileComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
