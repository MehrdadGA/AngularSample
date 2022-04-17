import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  reciepes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'C:\Users\me.ghafari\Downloads\Wallpapers\Cute-Dog-White1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
