import Auth from "../../components/Auth";
import AuthField from "../../components/AuthField";

export default class LoginPage {
    private authInstance: Auth;

    constructor() {
        this.authInstance = new Auth({
            title: "Вход",
            action: "Войти",
            common: "Создать аккаунт",
            fields: [
                new AuthField({ label: 'Логин', name: 'login', attr: { class: "form__item flex" } }),
                new AuthField({ label: 'Пароль', name: 'password', attr: { class: "form__item flex" } }),
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