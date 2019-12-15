import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Pounds of Dough', 3),
    new Ingredient('Bags of Chocolate Chips', 5)
  ];
  constructor() { }

  ngOnInit() {
  }

}
