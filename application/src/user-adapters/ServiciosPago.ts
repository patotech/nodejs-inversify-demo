import { injectable, inject } from "inversify";

import { IServiciosPago } from "../main/interfaces";

import { DOMAIN_TYPES } from "baaskit-demo-domain";
import type { ITransactionServices, ITransaction } from "baaskit-demo-domain";

@injectable()
export class ServiciosPago implements IServiciosPago {

    private _transactionServices : ITransactionServices; 

    public constructor (
        @inject( DOMAIN_TYPES.TransactionServices ) _transactionServices: ITransactionServices
    ) {
        this._transactionServices = _transactionServices;
    }

    pagoTarjeta(): void {
        let trx : ITransaction = this._transactionServices.createTransaction();
        console.log( "Id de la nueva transacción : " + trx.getId() );
    }
}