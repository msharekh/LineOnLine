import { Item } from "./Item";
import { ItemOption } from "./ItemOption";

export class ItemSelection {

    ItemSelectionId: number
    Item: Item;
    Quantity: number;
    Value: number;
    ItemOptionList: Array<ItemOption>;

    constructor(item: Item, quantity: number) {

    }

    addOption(itemOption: ItemOption) {
        this.ItemOptionList.push(itemOption);
    }
    deleteItemSelection(ItemSelectionId: number) {

    }
    createCart(): void {

    }
    setValue(val: number): void {
        this.Value = val;
    }
}