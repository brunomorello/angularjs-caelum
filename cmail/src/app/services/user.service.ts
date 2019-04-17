import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { User } from '../models/dto/output/user';

@Injectable()
export class UserService {

    private readonly endpoint = 'http://localhost:3200/users';

    
    constructor(private httpClient: HttpClient) {
        
    }
    
    registerUser(userData) {
        
        // DTO for endpoint
        const userDTO = new User(userData);

        console.log(`data ${JSON.stringify(userDTO)}`);

        return this.httpClient.post(this.endpoint, userDTO)
            .pipe(
                map((response: any) => {
                    return {
                        emailCreated: response['email']
                    }
                })
            )
    }
}