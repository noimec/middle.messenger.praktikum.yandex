import Profile from "../../components/Profile";
import ProfileField from "../../components/ProfileField";

export default class ProfilePage {
    private profileInstance: Profile;

    constructor() {
        this.profileInstance = new Profile('main', {
            userName: "Иван",
            fields: [
                new ProfileField('li', { name: "email", label: "Почта", value: "pochta@yandex.ru", attr: { class: "profile__item" } }),
                new ProfileField('li', { name: "login", label: "Логин", value: "ivanivanov", attr: { class: "profile__item" } }),
                new ProfileField('li', { name: "first_name", label: "Имя", value: "Иван", attr: { class: "profile__item" } }),
                new ProfileField('li', { name: "second_name", label: "Фамилия", value: "Иванов", attr: { class: "profile__item" } }),
                new ProfileField('li', { name: "display_name", label: "Имя в чате", value: "Иван", attr: { class: "profile__item" } }),
                new ProfileField('li', { name: "phone", label: "Телефон", value: "+79999999999", attr: { class: "profile__item" } }),
            ],
            changes: [
                new ProfileField('li', { name: "oldPassword", label: "Старый пароль", value: "******", attr: { class: "profile__item" } }),
                new ProfileField('li', { name: "newPassword", label: "Новый пароль", value: "******", attr: { class: "profile__item" } }),
                new ProfileField('li', { name: "newPassword", label: "Повторите новый пароль", value: "******", attr: { class: "profile__item" } }),
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