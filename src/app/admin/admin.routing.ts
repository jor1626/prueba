import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TipodocumentoComponent } from './tipodocumento/tipodocumento.component';
import { TipodocumentoFormComponent } from './tipodocumento/tipodocumento-form/tipodocumento-form.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    { 
        path: '', 
        component: TipodocumentoComponent,
        children:[
            {
                path: 'form/:id',
                component: TipodocumentoFormComponent
            }
        ]
    }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }