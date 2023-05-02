 
import { HttpInterceptor,HttpEvent,HttpHandler,HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import{Observable} from "rxjs";
import { LoginService } from "./login.service";
 

// const token_header='Authorizatio';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private login:LoginService){}
 
    intercept(req:HttpRequest<any>,next:HttpHandler):
    Observable<HttpEvent<any>>
    {
        
        // throw new Error("Method not implementrd")

        //add jwt token
        const token=this.login.GetToken();
        let authreq=req;
        if(token!=null)
        {
            authreq=authreq.clone({
                setHeaders:{Authorization:`Bearer ${token}`},
            });

        }
        return next.handle(authreq);

    }
     

}
export const authInterceptorprovider=[{

    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
    ɵprov: AuthInterceptor
    
},
 
] ;