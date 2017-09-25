import { NgModule } from "@angular/core";
import * as serviceProxy from "app/shared/services/invoiceService";

@NgModule({
    providers: [
        serviceProxy.ApiServiceProxy
    ]
})

export class ServiceProxy {}