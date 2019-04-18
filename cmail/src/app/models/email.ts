export class Email {
    to = '';
    subject = '';
    content = '';
    creationDate: Date;
    id = '';
    
    constructor(
        {to, subject, content, creationDate, id}:
        {to: string, subject: string, content: string, creationDate: Date, id: string}
    ) {
        this.to = to;
        this.subject = subject;
        this.content = content;
        this.creationDate = creationDate;
        this.id = id;
    }

}