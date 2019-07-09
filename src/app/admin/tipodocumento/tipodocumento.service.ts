import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TipoDocumentosService {
    constructor(private http: HttpClient){

    }

    listar(){
        return this.http.get('./tipodocumento.json');
    }
}