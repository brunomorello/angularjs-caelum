export class Email {
    to = '';
    subject = '';
    content = '';
    creationDate: Date;

    get contentIntroduction() {
        return this.content.substr(0, 40) + '...';
    }
}