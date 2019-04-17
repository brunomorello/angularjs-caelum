import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailDTO } from '../models/dto/output/email.dto';
import { map } from 'rxjs/operators';

@Injectable()
export class EmailService {

    private readonly endpont = 'http://localhost:3200/emails';

    private requestHeader = new HttpHeaders( { 'Authorization': localStorage.getItem('cmail-token') });

    constructor(private httpClient: HttpClient) {

    }

    send(emailData) {

        const email = new EmailDTO(emailData);

        return this.httpClient.post(this.endpont, email, {headers: this.requestHeader} )
            .pipe(
                map((response: any) => {

                    return {
                        responseAPI: response
                    }
                })
            )

    }

}