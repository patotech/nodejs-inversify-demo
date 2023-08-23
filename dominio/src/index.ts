import { ContainerModule, interfaces as InversifyInterfaces } from "inversify";
import { ITransactionServices } from "./main/interfaces";
import { ITransaction } from "./main/interfaces";
import { DOMAIN_TYPES  } from "./main/types";
import { TransactionServices } from "./services/TransactionServices";

let DomainModelContainer = new ContainerModule(
    (bind: InversifyInterfaces.Bind, unbind: InversifyInterfaces.Unbind ) => {
        bind<ITransactionServices>( DOMAIN_TYPES.TransactionServices ).to( TransactionServices );
    }
);

export { DomainModelContainer, DOMAIN_TYPES };
export type { ITransactionServices, ITransaction };