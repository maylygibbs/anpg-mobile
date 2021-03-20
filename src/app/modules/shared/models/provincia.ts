import { Model } from "./model";

/**
 * Entidade da empresa
 */
export class Provincia extends Model {


    constructor(
        public id: number,
        public nomeProvincia: string) {
        super();
    }


    /**
   * converter nome em letras maiúsculas
   * @return string
   */
    get nomeNormalizado(): string {

        let nome = this.nomeProvincia;
        return this.toCapitalizerString(nome);

    }
}