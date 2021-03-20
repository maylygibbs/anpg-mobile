import { SelectOption } from './select-option';
import { TipoRecursoEnum } from '../enums/tipo-recurso-enum';

/**
 * Classe que representa os tipos de recursos não renováveis
 */

export class TipoRecurso extends SelectOption {


  constructor(
    value?: string,
    public label?: string,
  ) {
    super(value);

    switch (this.value) {
      case TipoRecursoEnum.type1:
        this.label = this.label ? this.label : 'Petróleo Bruto';
        break;
      case TipoRecursoEnum.type2:
        this.label = this.label ? this.label : 'Gás Natural';
        break;
      case TipoRecursoEnum.type3:
        this.label = this.label ? this.label : 'Óleo Equivalente';
        break;
    }
  }
}
