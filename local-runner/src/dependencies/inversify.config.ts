import "reflect-metadata";
import { Container } from "inversify";
import { ModuleAppCore } from "baaskit-demo-app";
import { DomainModelContainer } from "baaskit-demo-domain";

const container = new Container();

/* Componentes */

/* Dominio */
container.load( DomainModelContainer );

/* Aplicación */
container.load( ModuleAppCore );

export { container };