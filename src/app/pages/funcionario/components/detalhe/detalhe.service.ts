import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DetalheService {
    url: string;
    urlServicos: string;
    constructor(private http: Http) {  
        this.url = "http://localhost:3000/v1/app/funcionario";
        this.urlServicos = "http://localhost:3000/v1/app/servico";
    }
    private contentHeader: Headers = new Headers({ "Content-Type": "application/json" });

    getFuncionario(id) {
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

    getServicos() {
        return new Promise((resolve, reject) => {
            this.http.get(this.urlServicos)
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