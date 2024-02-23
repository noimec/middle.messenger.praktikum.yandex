import Auth from "../../components/Auth";

export default class LoginPage {
    private authInstance: Auth;

    constructor() {
        this.authInstance = new Auth('main', {
            title: "Вход",
            action: "Войти",
            common: "Создать аккаунт",
            items: [
                { label: 'Логин', name: 'login' },
                { label: 'Пароль', name: 'password' }
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