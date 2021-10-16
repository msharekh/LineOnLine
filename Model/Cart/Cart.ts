import { Time } from "@angular/common"
import { Customer } from "../Customer/Customer";
import { ItemSelection } from "../ItemSelection/ItemSelection";

export class Cart {

    CartDate: Time
    Customer: Customer;
    Status: string
    ItemSelectionList: Array<ItemSelection>

    constructor() {

    }

    addItemSelection(itemSelection): void { }
    deleteItemSelection(itemSelectionId): void { }
    confirmCart() { }
    cancelCart() { }
}