import Auth from "../../components/Auth";
import AuthField from "../../components/AuthField";

export default class SigninPage {
    private authInstance: Auth;

    constructor() {
        this.authInstance = new Auth('main', {
            title: "Регистрация",
            action: "Создать аккаунт",
            common: "Войти",
            fields: [
                new AuthField('div', { label: 'Почта', name: 'email', attr: { class: "form__item flex" } }),
                new AuthField('div', { label: 'Логин', name: 'login', attr: { class: "form__item flex" } }),
                new AuthField('div', { label: 'Имя', name: 'first_name', attr: { class: "form__item flex" } }),
                new AuthField('div', { label: 'Фамилия', name: 'second_name', attr: { class: "form__item flex" } }),
                new AuthField('div', { label: 'Телефон', name: 'phone', attr: { class: "form__item flex" } }),
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