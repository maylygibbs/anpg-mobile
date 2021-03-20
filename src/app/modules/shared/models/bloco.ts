import { Model } from "./model";

/**
 * Entidade da empresa
 */
export class Bloco extends Model {


    constructor(
        public id: number,
        public nomeBloco: string) {
        super();
    }


    /**
   * converter nome em letras uppercase
   * @return string
   */
    get nomeUpperCase(): string {

        let nome = this.nomeBloco;
        return this.toUpperCaseString(nome);

    }
}