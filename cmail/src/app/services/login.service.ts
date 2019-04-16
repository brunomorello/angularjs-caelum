import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    private readonly endpoint = 'http://localhost:3200/login';
    
    constructor(private httpClient: HttpClient) {

    }

    authenticate(loginData) {

        return this.httpClient.post(this.endpoint, loginData)
            .pipe(
                map((response: any) => {
                    localStorage.setItem('cmail-token', response.token);
                    return {
                        user_name: response.name,
                        user_email: response.email,
                        user_avatar: response.avatarUrl
                    }
                })
            )

    }
}