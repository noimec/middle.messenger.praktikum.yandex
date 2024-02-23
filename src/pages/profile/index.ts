import Profile from "../../components/Profile";

export default class ProfilePage {
    private profileInstance: Profile;

    constructor() {
        this.profileInstance = new Profile('main', {
            userName: "Иван",
            items: [
                { name: "email", label: "Почта", value: "pochta@yandex.ru" },
                { name: "login", label: "Логин", value: "ivanivanov" },
                { name: "first_name", label: "Имя", value: "Иван" },
                { name: "second_name", label: "Фамилия", value: "Иванов" },
                { name: "display_name", label: "Имя в чате", value: "Иван" },
                { name: "phone", label: "Телефон", value: "+79999999999" },
            ],
            changes: [
                { name: "oldPassword", label: "Старый пароль", value: "******" },
                { name: "newPassword", label: "Новый пароль", value: "******" },
                { name: "newPassword", label: "Повторите новый пароль", value: "******" },
            ],
            attr: {
                class: "main flex"
            }
        })
    }

    getContent() {
        return this.profileInstance.getContent();
    }
}