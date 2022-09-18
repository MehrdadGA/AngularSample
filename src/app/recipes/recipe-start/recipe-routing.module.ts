import { NgModule } from "@angular/core";
import { ROUTES } from "@angular/router";
import { AuthGuard } from "src/app/auth/auth.guard";
import { RecipeDetailComponent } from "../recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "../recipe-edit/recipe-edit.component";
import { RecipesResolveService } from "../recipe-resolver.service";
import { RecipesComponent } from "../recipes.component";
import { RecipeStartComponent } from "./recipe-start.component";

const routes = Routes = [
    {
        path: 'recipes', 
        canActivate: [AuthGuard],
        component: RecipesComponent,
        children:[
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolveService]},
        {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolveService]}
      ]
    }
]

@NgModule({})
export class RecipesRoutingModule{}