import { INews } from "../interfaces/inews.interface";

export class News implements INews {
    id: number;
    expanded: boolean;
    title: string;
    img: string;
    sector: string;
    text: string;

    constructor() {
            this.id = 0;
            this.expanded = false;
            this.title = '';
            this.img = '';
            this.sector = '';
            this.text = '';
                
    }
}
