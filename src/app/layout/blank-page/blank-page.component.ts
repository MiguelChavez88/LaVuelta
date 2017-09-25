import { Component, OnInit } from '@angular/core';
import { CK_Header807, ApiServiceProxy } from "app/shared/services/invoiceService";


@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
        Ck_InvoiceList: CK_Header807[];

    constructor(private _invoiceService: ApiServiceProxy) {
    }

    ngOnInit() {
        this.cargarDatos();
    }

    cargarDatos(){
       this._invoiceService.invoice()
        .subscribe((result) => {
            this.Ck_InvoiceList = result;
        })
    }
}
