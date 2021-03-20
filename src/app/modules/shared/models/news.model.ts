import { INews } from "../interfaces/inews.interface";

export class News implements INews {

    id: number;
    titulo: string;
    img: string;
    imgMedium: string;
    imgFull: string;
    sector: string;
    texto: string;
    data: string;

    constructor() {
            this.id = 0;
            this.titulo = '';
            this.img = '';
            this.imgMedium = '';
            this.imgFull = '';
            this.sector = '';
            this.texto = '';
                
    }
}
