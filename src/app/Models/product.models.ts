import { Image } from "./image.models";

export class Product {
    productId: string;
    productName: string;
    sku: string;
    price: number;
    sale: string;
    Inventory: number;
    classify: string;
    status: boolean;
    listImgDTO: Image[];
    catalogId: number
    constructor(
    ){

    }
}
