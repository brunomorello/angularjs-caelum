export class Email {
    to = '';
    subject = '';
    content = '';
    creationDate: Date;
    
    constructor(
        {to, subject, content, creationDate}:
        {to: string, subject: string, content: string, creationDate: Date}) {
        this.to = to;
        this.subject = subject;
        this.content = content;
        this.creationDate = creationDate;
    }

    get contentIntroduction() {
        return this.content.substr(0, 40) + '...';
    }
}