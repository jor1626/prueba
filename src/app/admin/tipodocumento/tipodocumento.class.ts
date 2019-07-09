export class TipoDocumentosClass {
    constructor(
        public codigo?: string,
        public nombre?: string,
        public estado?: number,
    ){
        this.codigo = null;
        this.nombre = null;
        this.estado = 1;
    }
}
