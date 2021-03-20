import { IOilPrice } from "../interfaces/ioil-price.interface";

export class OilPrice implements IOilPrice {
    price: number;
    formatted: string;
    currency: string;
    code: string;
    type: string;
    created_at: string;
    
    label: string;
    img: string;

    constructor() {
        this.price = 0;
        this.formatted = '';
        this.currency = '';
        this.code = '';
        this.type = '';
        this.created_at = '';
        
        this.label = '';
        this.img = '';
    }
}