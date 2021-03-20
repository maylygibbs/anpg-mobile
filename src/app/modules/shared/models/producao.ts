import { Model } from "./model";
import { TipoRecurso } from "./tipo-recurso";
import { TipoUnidadeMedida } from "./tipo-unidade-medida";

/**
 * Classe que representa informações de produção
 */
export class Producao extends Model{


    constructor(
        public mes:string,
        public ano:string,
        public quantidade:any,
    ){
        super()
    }


}