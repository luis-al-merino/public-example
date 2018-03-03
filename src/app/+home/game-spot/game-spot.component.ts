import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TileComponent } from '../../_tile/tile.component';
import { ProductObject } from '../../_tile/tile';

@Component({
  selector: 'app-game-spot',
  templateUrl: './game-spot.component.html',
  styleUrls: ['./game-spot.component.scss']
})

export class GameSpotComponent implements OnInit, AfterViewInit {

  gameOfTheWeek: ProductObject = {
    'name': 'The Witcher - adventure game',
    'image': '../../../assets/img-game-of-the-week.png',
    'status': 'onSale',
    'url': 'https://www.gog.com/game/witcher_adventure_game'
  };
  secretBtnActive = false;
  player;

  constructor() { }

  ngOnInit() {
    (<any>window).onYouTubeIframeAPIReady = () => {
      this.player = new (<any>window).YT.Player('player', {
        events: {
          'onReady': () => {
            console.log('ready');
          },
          'onStateChange': () => {
          }
        }
      });
    };
  }

  ngAfterViewInit() {
    const doc = (<any>window).document;
    const playerApiScript = doc.createElement('script');
    playerApiScript.type = 'text/javascript';
    playerApiScript.src = 'https://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApiScript);
  }

  play() {
    this.secretBtnActive = true;
    this.player.playVideo();
  }
}
