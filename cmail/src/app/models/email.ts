export class Email {
    to = '';
    subject = '';
    content = '';
    creationDate = '';

    get contentIntroduction() {
        return this.content.substr(0, 40) + '...';
    }
}