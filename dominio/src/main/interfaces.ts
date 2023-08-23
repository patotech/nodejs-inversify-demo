export interface ITransaction {
    getId(): string;
}

export interface ITransactionServices {
    createTransaction(): ITransaction;
}