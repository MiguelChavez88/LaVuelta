/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.7.2.0 (NJsonSchema v9.6.3.0) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, Optional, OpaqueToken } from '@angular/core';
import { Http, Headers, ResponseContentType, Response } from '@angular/http';

import * as moment from 'moment';

export const API_BASE_URL = new OpaqueToken('API_BASE_URL');

@Injectable()
export class ApiServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:56648";
    }

    getPaginatedInvoices(indice: number, tamanoPagina: number): Observable<CK_Header807[]> {
        let url_ = this.baseUrl + "/api/Invoice/GetPaginatedInvoices?";
        if (indice === undefined || indice === null)
            throw new Error("The parameter 'indice' must be defined and cannot be null.");
        else
            url_ += "indice=" + encodeURIComponent("" + indice) + "&"; 
        if (tamanoPagina === undefined || tamanoPagina === null)
            throw new Error("The parameter 'tamanoPagina' must be defined and cannot be null.");
        else
            url_ += "tamanoPagina=" + encodeURIComponent("" + tamanoPagina) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processGetPaginatedInvoices(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetPaginatedInvoices(response_);
                } catch (e) {
                    return <Observable<CK_Header807[]>><any>Observable.throw(e);
                }
            } else
                return <Observable<CK_Header807[]>><any>Observable.throw(response_);
        });
    }

    protected processGetPaginatedInvoices(response: Response): Observable<CK_Header807[]> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(CK_Header807.fromJS(item));
            }
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<CK_Header807[]>(<any>null);
    }
    
    /**
     * @return OK
     */
    invoice(): Observable<CK_Header807[]> {
        let url_ = this.baseUrl + "/api/Invoice";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processInvoice(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processInvoice(response_);
                } catch (e) {
                    return <Observable<CK_Header807[]>><any>Observable.throw(e);
                }
            } else
                return <Observable<CK_Header807[]>><any>Observable.throw(response_);
        });
    }

    protected processInvoice(response: Response): Observable<CK_Header807[]> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(CK_Header807.fromJS(item));
            }
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<CK_Header807[]>(<any>null);
    }

    // /**
    //  * @return OK
    //  */
    // invoice(id: string): Observable<CK_Header807[]> {
    //     let url_ = this.baseUrl + "/api/Invoice/{id}";
    //     if (id === undefined || id === null)
    //         throw new Error("The parameter 'id' must be defined.");
    //     url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
    //     url_ = url_.replace(/[?&]$/, "");

    //     let options_ = {
    //         method: "get",
    //         headers: new Headers({
    //             "Content-Type": "application/json", 
    //             "Accept": "application/json"
    //         })
    //     };

    //     return this.http.request(url_, options_).flatMap((response_) => {
    //         return this.processInvoice(response_);
    //     }).catch((response_: any) => {
    //         if (response_ instanceof Response) {
    //             try {
    //                 return this.processInvoice(response_);
    //             } catch (e) {
    //                 return <Observable<CK_Header807[]>><any>Observable.throw(e);
    //             }
    //         } else
    //             return <Observable<CK_Header807[]>><any>Observable.throw(response_);
    //     });
    // }

    // protected processInvoice(response: Response): Observable<CK_Header807[]> {
    //     const status = response.status; 

    //     let _headers: any = response.headers ? response.headers.toJSON() : {};
    //     if (status === 200) {
    //         const _responseText = response.text();
    //         let result200: any = null;
    //         let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
    //         if (resultData200 && resultData200.constructor === Array) {
    //             result200 = [];
    //             for (let item of resultData200)
    //                 result200.push(CK_Header807.fromJS(item));
    //         }
    //         return Observable.of(result200);
    //     } else if (status !== 200 && status !== 204) {
    //         const _responseText = response.text();
    //         return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    //     }
    //     return Observable.of<CK_Header807[]>(<any>null);
    // }
}

export class CK_Header807 implements ICK_Header807 {
    shipmentno: string;
    lineaProductoId: string;
    viaTransporteId: string;
    destinoId: string;
    destinoId2: string;
    fechaTransaccion: moment.Moment;
    userId: string;
    fechaEmbarque: moment.Moment;
    erroresValidacion: { [key: string] : string[]; };

    constructor(data?: ICK_Header807) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.shipmentno = data["shipmentno"];
            this.lineaProductoId = data["lineaProductoId"];
            this.viaTransporteId = data["viaTransporteId"];
            this.destinoId = data["destinoId"];
            this.destinoId2 = data["destinoId2"];
            this.fechaTransaccion = data["fechaTransaccion"] ? moment(data["fechaTransaccion"].toString()) : <any>undefined;
            this.userId = data["userId"];
            this.fechaEmbarque = data["fechaEmbarque"] ? moment(data["fechaEmbarque"].toString()) : <any>undefined;
            if (data["erroresValidacion"]) {
                this.erroresValidacion = {};
                for (let key in data["erroresValidacion"]) {
                    if (data["erroresValidacion"].hasOwnProperty(key))
                        this.erroresValidacion[key] = data["erroresValidacion"][key] !== undefined ? data["erroresValidacion"][key] : [];
                }
            }
        }
    }

    static fromJS(data: any): CK_Header807 {
        let result = new CK_Header807();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["shipmentno"] = this.shipmentno;
        data["lineaProductoId"] = this.lineaProductoId;
        data["viaTransporteId"] = this.viaTransporteId;
        data["destinoId"] = this.destinoId;
        data["destinoId2"] = this.destinoId2;
        data["fechaTransaccion"] = this.fechaTransaccion ? this.fechaTransaccion.toISOString() : <any>undefined;
        data["userId"] = this.userId;
        data["fechaEmbarque"] = this.fechaEmbarque ? this.fechaEmbarque.toISOString() : <any>undefined;
        if (this.erroresValidacion) {
            data["erroresValidacion"] = {};
            for (let key in this.erroresValidacion) {
                if (this.erroresValidacion.hasOwnProperty(key))
                    data["erroresValidacion"][key] = this.erroresValidacion[key];
            }
        }
        return data; 
    }
}

export interface ICK_Header807 {
    shipmentno: string;
    lineaProductoId: string;
    viaTransporteId: string;
    destinoId: string;
    destinoId2: string;
    fechaTransaccion: moment.Moment;
    userId: string;
    fechaEmbarque: moment.Moment;
    erroresValidacion: { [key: string] : string[]; };
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
	headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
		super();

        this.message = message;
        this.status = status;
        this.response = response;
		this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return Observable.throw(result);
    else
        return Observable.throw(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => { 
        let reader = new FileReader(); 
        reader.onload = function() { 
            observer.next(this.result);
            observer.complete();
        }
        reader.readAsText(blob); 
    });
}