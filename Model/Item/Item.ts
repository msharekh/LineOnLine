import { Category } from "./Category";

export class Item {

    private _ItemCode: string;
    public get ItemCode(): string {
        return this._ItemCode;
    }
    public set ItemCode(value: string) {
        this._ItemCode = value;
    }
    private _Name: string;
    public get Name(): string {
        return this._Name;
    }
    public set Name(value: string) {
        this._Name = value;
    }
    private _Category: Category;
    public get Category(): Category {
        return this._Category;
    }
    public set Category(value: Category) {
        this._Category = value;
    }

    constructor() {
        
    }

    
}