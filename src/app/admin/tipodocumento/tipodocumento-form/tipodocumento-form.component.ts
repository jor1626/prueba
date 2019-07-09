import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TipoDocumentosClass } from '../tipodocumento.class';
import { SnotifyService } from 'ng-snotify';
import { FormControl } from '@angular/forms';
declare var $: any;

@Component({
    selector: 'tipodocumento-form',
    templateUrl: 'tipodocumento-form.component.html',
    styleUrls: ['tipodocumento-form.component.css']
})
export class TipodocumentoFormComponent {

    c_accion: Number;
    formData: TipoDocumentosClass;
    tipos_documentos: TipoDocumentosClass[];

    @Input() set accion(accion: Number) {
        this.c_accion = accion;
        switch (accion) {
            case 1:
                this.formData = new TipoDocumentosClass();
                $('#modal-tipo-documento').modal('show')
                break;
            case 2:
                $('#modal-tipo-documento').modal('show')
                break;
        }
    }
    @Input() set idIn(data: any) {
        if (data) {
            this.cargar_tipo_documento(data);
        }
    }
    @Output() close = new EventEmitter();

    constructor(
        private snotifyService: SnotifyService
    ) {
        this.formData = new TipoDocumentosClass();
    }

    ngOnInit() {
    }

    async cargar_tipo_documento(data: any) {
     
        this.formData = Object.assign({}, data);
    }

    cerrar() {
        // $('#modal-tipo-documento').modal('close')
        this.close.emit({ tipo: 1 });
    }

    submitForm(form: FormControl){
        if(this.c_accion == 1){
            this.guardar(form)
        }else{
            this.editar(form)
        }
    }

    async guardar(form: FormControl) {
        try {
            this.snotifyService.success('Correctamente', 'Guardado');
            $('#modal-tipo-documento').modal('close')
            this.close.emit({ tipo: 2, data: this.formData });
        } catch (err) {
            console.log(err);
            this.snotifyService.error('Se ha presentado un error inesperado.', '');
        }
    }
    async editar(form: FormControl) {
        try {
           
            this.snotifyService.success('Correctamente', 'Actualizado');
            $('#modal-tipo-documento').modal('close')
            this.close.emit({ tipo: 3, data: this.formData });
        } catch (err) {
            console.log(err);
            this.snotifyService.error('Se ha presentado un error inesperado.', '');
        }
    }


}
