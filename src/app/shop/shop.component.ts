import { Component, OnInit } from '@angular/core';
import {Items} from '../items.model';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  shopList:  Items[] =[
    new Items("Black Vesper", "./assets/shoe-1.jpg", 300),
    new Items("Predator", "./assets/shoe-2.jpg", 250),
    
  ]

}
