import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { AdminComponent } from './admin.component';
import { TipodocumentoComponent } from './tipodocumento/tipodocumento.component';
import { TipodocumentoTableComponent } from './tipodocumento/tipodocumento-table/tipodocumento-table.component';
import { TipodocumentoFormComponent } from './tipodocumento/tipodocumento-form/tipodocumento-form.component';
import { AdminRoutingModule } from './admin.routing';
import { ToastDefaults, SnotifyService, SnotifyModule } from 'ng-snotify';
import { TipoDocumentosService } from './tipodocumento/tipodocumento.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
    declarations: [
        AdminComponent,
        TipodocumentoComponent, TipodocumentoTableComponent, TipodocumentoFormComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule,
        AdminRoutingModule,
        SnotifyModule,
        HttpClientModule
    ],
    exports: [],
    providers: [
        TipoDocumentosService,
        { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
        SnotifyService
    ],
})
export class AdminModule {}