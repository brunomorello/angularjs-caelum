import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailDTO } from '../models/dto/output/email.dto';
import { map } from 'rxjs/operators';
import { Email } from '../models/email';
import { Observable } from 'rxjs';

@Injectable()
export class EmailService {

    private readonly endpont = 'http://localhost:3200/emails';

    private requestHeader = new HttpHeaders( { 'Authorization': localStorage.getItem('cmail-token') });

    constructor(private httpClient: HttpClient) {

    }

    send(emailData): Observable<Email> {

        const email = new EmailDTO(emailData);

        return this.httpClient.post(this.endpont, email, {headers: this.requestHeader})
            .pipe(
                map((emailApiResponse: any) => {

                    return new Email({
                        to: emailApiResponse.to,
                        subject: emailApiResponse.subject,
                        content: emailApiResponse.content,
                        creationDate: emailApiResponse.created_at
                    })
                })
            )

    }

    list() {        

        return this.httpClient.get(this.endpont, {headers: this.requestHeader})
            .pipe<Email[]>(
                map((emailListAPI: any[]) => {
                        return emailListAPI.map(
                            emailApiResponse => new Email ({
                                to: emailApiResponse.to,
                                subject: emailApiResponse.subject,
                                content: emailApiResponse.content,
                                creationDate: emailApiResponse.created_at
                            })
                        )
                    }
                )
            )
    }

}