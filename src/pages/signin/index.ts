import Auth from "../../components/Auth";

export default class SigninPage {
    private authInstance: Auth;

    constructor() {
        this.authInstance = new Auth('main', {
            title: "Регистрация",
            action: "Создать аккаунт",
            common: "Войти",
            items: [
                { label: 'Почта', name: 'email' },
                { label: 'Логин', name: 'login' },
                { label: 'Имя', name: 'first_name' },
                { label: 'Фамилия', name: 'second_name' },
                { label: 'Телефон', name: 'phone' },
                { label: 'Пароль', name: 'password' },
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