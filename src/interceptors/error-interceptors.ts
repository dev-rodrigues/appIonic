import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StorageService } from '../services/storage.service';
import { Observable } from 'rxjs';
import { AlertController } from 'ionic-angular';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    
    constructor(
            public storage : StorageService,
            public alertControler: AlertController){
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(req)
            .catch((error, caught) => {
            
            let errorObj = error;
            if (errorObj.error) {
                errorObj = errorObj.error;
            }
            if (!errorObj.status) {
                errorObj = JSON.parse(errorObj);
            }
            
            console.log("Erro detectado pelo interceptor:");
            console.log(errorObj);

            switch(errorObj.status) {
                case 403:
                this.handle403();
                break;

                case 401:
                this.handle401();
                break;

                default:
                this.handlerDefaultError(errorObj);
                break
            }
            
            return Observable.throw(errorObj);
        }) as any;
    }

    handle401() {
        let alert = this.alertControler.create({
            title: 'Falha de Autenticação',
            message: 'Email ou Senha incorretos',
            enableBackdropDismiss: false,
            buttons:[
                {
                    text:'Ok'
                }
            ]
        });
        alert.present();
    }

    handle403() {
        this.storage.setLocalUser(null);
    }

    handlerDefaultError(errorObj) {
        let alert = this.alertControler.create({
            title: 'Erro ' + errorObj.status + ': ' + errorObj.error,
            message: errorObj.message,
            enableBackdropDismiss: true,
            buttons: [
                {
                text: 'Ok'
                }
            ]
        });
        alert.present();
    }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};