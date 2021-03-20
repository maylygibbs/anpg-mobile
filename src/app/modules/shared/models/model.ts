/**
 * Base model
 */
export class Model {

  /**
   * Create from a json structure
   * @param json json data
   */
  public fromJSON(json) {
    if (json) {
      for (const propName of Object.keys(json)) {
        this[propName] = json[propName];
      }
    }
    return this;
  }

  /**
   * Criar a partir de uma estrutura serializada JSON
   * @param json json data
   */
  public fromString(json: string) {
    return this.fromJSON(JSON.parse(json));
  }

  /**
   * Serializar o objeto
   */
  public toString(): string {
    return JSON.stringify(this);
  }

  /**
   * Converter para capitalizer
   * @param value 
   */
  public toCapitalizerString(value: string): string {
    if (!value) {
      return '';
    }
    value = value.toLowerCase().trim();
    let buildNomeNormalizado = '';
    value.split(' ').map((subnome) => {
      buildNomeNormalizado += subnome.charAt(0).toUpperCase() + subnome.substring(1) + ' ';
    });
    return buildNomeNormalizado.trim();
  }


  /**
   * Converter para upperCase
   * @param value 
   */
  public toUpperCaseString(value: string): string {
    if (!value) {
      return '';
    }
    value = value.toLowerCase().trim();
    let buildNomeNormalizado = '';
    value.split(' ').map((subnome) => {
      buildNomeNormalizado += subnome.toUpperCase() + ' ';
    });
    return buildNomeNormalizado.trim();
  }


}
