import { Model } from "./model";

/**
 * Entidade da empresa
 */
export class Bacia extends Model {


    constructor(
        public id: number,
        public nomeBacia: string) {
        super();
    }



    /**
       * converter nome em letras uppercase
       * @return string
       */
    get nomeNormalizado(): string {

        let nome = this.nomeBacia;
        return this.toCapitalizerString(nome);

    }
}