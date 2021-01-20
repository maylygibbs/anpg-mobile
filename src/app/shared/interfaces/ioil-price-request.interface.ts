import { IOilPrice } from "./ioil-price.interface";

export interface IOilPriceRequest {
    status: string;
    data: IOilPrice;
}
