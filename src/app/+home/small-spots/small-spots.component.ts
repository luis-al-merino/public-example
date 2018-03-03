import { Component, OnInit } from '@angular/core';
import { ProductObject } from '../../_tile/tile';
import { CartObject } from '../../_menu/cart/cart';

@Component({
  selector: 'app-small-spots',
  templateUrl: './small-spots.component.html',
  styleUrls: ['./small-spots.component.scss']
})
export class SmallSpotsComponent implements OnInit {
  tiles: ProductObject[] = [
    {
      'id': 1,
      'name': `OddWorld: Stranger's wrath`,
      'image': '../../../assets/img-oddworld.png',
      'price': 9.99,
      'discount': 50,
      'status': 'onSale',
      'url': 'https://www.gog.com/game/oddworld_strangers_wrath'
    }, {
      'id': 2,
      'name': 'chaos on Deponia',
      'image': '../../../assets/img-deponia.png',
      'status': 'owned',
      'url': 'https://www.gog.com/game/deponia_2_chaos_on_deponia',
    }, {
      'id': 3,
      'name': 'The Settlers 2: Gold Edition',
      'image': '../../../assets/img-settlersII.png',
      'price': 5.99,
      'status': 'onSale',
      'url': 'https://www.gog.com/game/the_settlers_2_gold_edition'
    }, {
      'id': 4,
      'name': 'Neverwinter nights',
      'image': '../../../assets/img-NeverwinterNights.png',
      'price': 13.45,
      'discount': 50,
      'status': 'onSale'
    }, {
      'id': 5,
      'name': `Assassin's creed: Director's cut`,
      'image': '../../../assets/img-assassinsCreed.png',
      'price': 9.99,
      'status': 'onSale',
      'url': 'https://www.gog.com/game/assassins_creed_directors_cut'
    }
  ];

  constructor() {}

  ngOnInit() {
  }

}
