import { Model } from "./model";

/**
 * Entidade da empresa
 */
export class Empresa extends Model {


    constructor(
        public id: number,
        public nomeEmpresa: string) {
        super();
    }


    /**
       * converter nome em letras maiúsculas
       * @return string
       */
    get nomeNormalizado(): string {

        let nome = this.nomeEmpresa;
        return this.toCapitalizerString(nome);

    }


}