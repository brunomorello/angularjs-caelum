export class EmailDTO {
    private to = '';
    private subject = '';
    private content = '';

    constructor({ to, subject, content }) {
        this.to = to;
        this.subject = subject;
        this.content = content;
    }
}