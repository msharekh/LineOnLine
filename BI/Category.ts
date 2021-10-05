import { Item } from "./Item";
import { Restaurant } from "./Restaurant";

export class Category {

    Name:string;
    Restaurant:Restaurant;
    ItemList: Array<Item>

    constructor(Name, restaurant) {
        
    }

    addItem(Item){

    }
    getItems(){
        return this.ItemList;
    }


}