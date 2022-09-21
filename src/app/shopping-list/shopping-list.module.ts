import { NgModule } from "@angular/core";
import {RouterModule} from "@angular/router"
import {CommonModule} from "@angular/common"
import {FormsModule} from "@angular/forms"
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

@NgModulee({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        RouterModule.forChild([
            CommonModule,
            FormsModule,
            {path: 'shopping-list', component: ShoppingListComponent}
        ])
    ]
})

export class ShoppingListModule{}