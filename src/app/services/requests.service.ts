import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Global } from './global';

@Injectable()
export class RequestsService {

    public url: string;

    constructor(private http: HttpClient) {
        this.url = Global.url;
    }

    getProjects(url) {
        return this.http.get(url);
    }
}
