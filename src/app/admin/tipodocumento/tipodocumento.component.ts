import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
    selector: 'tipodocumento',
    templateUrl: 'tipodocumento.component.html',
    styleUrls: ['tipodocumento.component.css']
})
export class TipodocumentoComponent {
    c_id_table: number;
    c_accion_form: Number;
    c_cambio_table: number;

    constructor(private titleService: Title) {
        this.titleService.setTitle('Tipo documentos');
        this.c_accion_form = 0;
        this.c_cambio_table = 1;
    }

    ngOnInit() {
    }

    nuevo() {
        this.event_table_tipo_documento({ tipo: 1 });
    }

    // ?----------------------------APLICACIONES---------------------------
    event_table_tipo_documento(event: any): void {
        switch (event.tipo) {
            case 1: // * Nuevo
                this.c_accion_form = event.tipo;
                break;
            case 2: // * Editar
                this.c_accion_form = event.tipo;
                this.c_id_table = event.data;
                break;
            case 3: // * Desactivado

                break;
            case 4: // * Reactivado

                break;
        }
    }
    event_form_tipo_documento(event): void {
        switch (event.tipo) {
            case 1: // * Cerró
            $('#modal-tipo-documento').modal('close')
                break;
            case 2: // * Guardó
                this.c_accion_form = event.tipo;
                this.c_id_table = event.data;
                // this.c_cambio_table++;
                break;
            case 3: // * Editó
                this.c_cambio_table++;
                break;
        }
        this.c_accion_form = 0;
        this.c_id_table = null;
    }


}
