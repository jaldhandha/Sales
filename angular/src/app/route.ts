import { CreatesaleComponent } from './components/sale/create-sale/create-sale.component'

import { Routes } from '@angular/router'
import { ListOfsaleComponent } from './components/sale/list-of-sale/list-of-sale.component'
import { EditsaleComponent } from './components/sale/edit-sale/edit-sale.component'

export const appRoutes: Routes = [
    {
        path: 'sales',
        children: [
            { path: 'list', component: ListOfsaleComponent },
            { path: 'create', component: CreatesaleComponent },
            { path: 'edit/:id', component: EditsaleComponent }
        ]
    }
]