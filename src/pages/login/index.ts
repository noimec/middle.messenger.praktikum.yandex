import Auth from "../../components/Auth";
import AuthField from "../../components/AuthField";

export default class LoginPage {
    private authInstance: Auth;

    constructor() {
        this.authInstance = new Auth('main', {
            title: "Вход",
            action: "Войти",
            common: "Создать аккаунт",
            fields: [
                new AuthField('div', { label: 'Логин', name: 'login', attr: { class: "form__item flex" } }),
                new AuthField('div', { label: 'Пароль', name: 'password', attr: { class: "form__item flex" } }),
            ],
            attr: {
                class: "main flex"
            }
        })
    }

    getContent() {
        return this.authInstance.getContent();
    }
}