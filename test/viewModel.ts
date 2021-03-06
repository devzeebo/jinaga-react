import { Mutable } from "../src";
import { Item, Name } from "./model";

export interface SubSubItemViewModel {
    id: string;
}

export interface SubItemViewModel {
    createdAt: Date | string;
    subSubItems: SubSubItemViewModel[];
}

export interface MadeUpViewModel {
    key: string;
}

export interface ItemViewModel {
    key: string;
    description: string;
    fact: Item;
    subItems: SubItemViewModel[];
    madeUp: MadeUpViewModel;
}

export interface DeletedItemViewModel {
    key: string;
    fact: Item;
}

export interface RecycleBin {
    deletedItems: DeletedItemViewModel[];
}

export interface ApplicationState {
    name: string;
    nameWithConflicts: Mutable<Name, string>;
    items: ItemViewModel[];
    recycleBin: RecycleBin;
}