import { Component, Output, EventEmitter, Input, ViewChild, ViewChildren } from '@angular/core';
import { TipoDocumentosClass } from '../tipodocumento.class';
import { DataTableDirective } from 'angular-datatables';
import data  from './../tipodocumento.json';
import { Subject } from 'rxjs';
import { SnotifyService } from 'ng-snotify';
import { TipoDocumentosService } from '../tipodocumento.service';

@Component({
    selector: 'tipodocumento-table',
    templateUrl: 'tipodocumento-table.component.html',
    styleUrls: ['tipodocumento-table.component.css']
})
export class TipodocumentoTableComponent {
    @ViewChildren(DataTableDirective)
    dtElement: DataTableDirective;
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    tipos_documentos: TipoDocumentosClass[];

    @Input() set cambio(cambio: Number) {
        if (cambio > 1) {
        this.listar_tipodocumentos();
        }
    }

    @Output() close = new EventEmitter();

    estadoFilt: number;

    constructor(
        private snotifyService: SnotifyService,
        private tipoService: TipoDocumentosService,
    ) {
        this.estadoFilt = 1;
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
    }

    ngAfterViewInit(): void {
        this.dtTrigger.next();
    }

    ngOnInit() {
        
        this.listar_tipodocumentos();
    }

    async listar_tipodocumentos() {
        this.tipos_documentos = data;
        // this.tipoService.listar().subscribe((data: any) => this.tipos_documentos = data);
        // this.rerender();
    }

      ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
      }
    
      rerender(): void {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          // Destroy the table first
          dtInstance.destroy();
          // Call the dtTrigger to rerender again
          this.dtTrigger.next();
        });
      }

    editar(id: String) {
        this.close.emit({ tipo: 2, id: id });
    }

    async desactivar(id: string) {
        try {
        let result = await this.tipos_documentos.findIndex(tipo => tipo.codigo == id);
        this.tipos_documentos[result].estado = 0;
        if (!result) {
            throw new Error();
        }
        this.snotifyService.success('Correctamente', 'Desactivado');
        this.close.emit({ tipo: 3 });
        this.listar_tipodocumentos();
        } catch (err) {
        console.log(err);
        this.snotifyService.error('Se ha presentado un error inesperado.', 'Atención');
        }
    }

    async reactivar(id: string) {
        try {
        let result = await this.tipos_documentos.findIndex(tipo => tipo.codigo == id);
        this.tipos_documentos[result].estado = 0;
        if (!result) {
            throw new Error();
        }
        this.snotifyService.success('Correctamente', 'Reactivado');
        this.close.emit({ tipo: 4 });
        this.listar_tipodocumentos();
        } catch (err) {
        console.log(err);
        this.snotifyService.error('Se ha presentado un error inesperado.', 'Atención');
        }
  }


    

}
