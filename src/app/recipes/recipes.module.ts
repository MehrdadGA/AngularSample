import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { NgModule } from '../shopping-list/app-routing.module';
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesRoutingModule } from './recipe-start/recipe-routing.module';
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations:[
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
    ],
    imports: [RouterModule, CommonModule, ReactiveFormsModule, RecipesRoutingModule]
});
export class RecipeModule{}
