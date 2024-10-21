class ContactModel {
    public constructor(public name: string, public email: string, public phone: string, public message: string) {
        this.name = name;
        this.email = email;
        this.phone = phone
        this.message = message;
    }
}
export default ContactModel;