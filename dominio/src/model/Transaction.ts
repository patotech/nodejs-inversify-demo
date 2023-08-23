import { ITransaction  } from "../main/interfaces";
import { v4 as uuidv4 } from 'uuid';

export class Transaction implements ITransaction {
    private id : string;

    constructor() {
        this.id = uuidv4();
    }

    getId(): string {
        return this.id;
    }

}