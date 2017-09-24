import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DetalheService {
    url: string;
    urlCategoria: string;
    constructor(private http: Http) {  
        this.url = "http://localhost:3000/v1/app/servico";
        this.urlCategoria = "http://localhost:3000/v1/app/categoria";
    }
    private contentHeader: Headers = new Headers({ "Content-Type": "application/json" });

    getServico(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.url+'/' + id)
                .map(res => res)
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    getCategorias() {
        return new Promise((resolve, reject) => {
            this.http.get(this.urlCategoria)
                .map(res => res)
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    editar(data,id) {
        return new Promise((resolve, reject) => {
            this.http.put(this.url + "/" + id , JSON.stringify(data), { headers: this.contentHeader })
                .map(res => res)
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

 }