import { SelectOption } from './select-option';
import { TipoUnidadeMedidaEnum } from '../enums/tipo-unidade-medida-enum';

/**
 * Clase que representa los tipos unidades de medida
 */

export class TipoUnidadeMedida extends SelectOption {


  constructor(
    value?: string,
    public label?: string,
  ) {
    super(value);

    switch (this.value) {
      case TipoUnidadeMedidaEnum.type1:
        this.label = this.label ? this.label : 'm3';
        break;
      case TipoUnidadeMedidaEnum.type2:
        this.label = this.label ? this.label : 'm3/d';
        break;
      case TipoUnidadeMedidaEnum.type3:
        this.label = this.label ? this.label : 'bbl';
        break;
      case TipoUnidadeMedidaEnum.type4:
        this.label = this.label ? this.label : 'bbl/d';
        break;
    }
  }
}
