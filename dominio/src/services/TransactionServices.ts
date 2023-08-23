import { injectable } from "inversify";
import { ITransaction, ITransactionServices } from "../main/interfaces";
import { Transaction } from "../model/Transaction";

@injectable()
export class TransactionServices implements ITransactionServices {
    createTransaction(): ITransaction {
        return new Transaction();
    }
}