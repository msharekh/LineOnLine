import { Category } from "./Category";

export class Restaurant {
    constructor() {
        
    }

    Name:string;
    SubscriptionNumber: string;
    SubscriptionType: string;
    CategoryList:Array<Category>;

    register(){

    }
    getCategories(){
        return this.CategoryList;
    }
}