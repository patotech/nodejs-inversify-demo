import { ContainerModule, interfaces as InversifyInterfaces } from "inversify";
import { IServiciosPago } from "./main/interfaces";
import { APP_CORE_TYPES  } from "./main/types";
import { ServiciosPago } from "./user-adapters/ServiciosPago";

let ModuleAppCore = new ContainerModule(
    ( bind: InversifyInterfaces.Bind, unbind: InversifyInterfaces.Unbind ) => {
        bind<IServiciosPago>( APP_CORE_TYPES.ServiciosPago ).to( ServiciosPago );
    }
);

export { ModuleAppCore, APP_CORE_TYPES };
export type { IServiciosPago };