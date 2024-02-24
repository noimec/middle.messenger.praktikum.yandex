import Profile from "../../components/Profile";
import ProfileField from "../../components/ProfileField";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default class ProfilePage {
    private profileInstance: Profile;

    constructor() {
        this.profileInstance = new Profile({
            userName: "Иван",
            avatarBtn: [new Button({ value: 'avatar', attr: { class: 'reset-btn profile__avatar avatar', id: 'avatar' } })],
            changeDataBtn: [new Button({ value: 'Изменить данные', attr: { class: 'profile__item_blue reset-btn' } })],
            changePassBtn: [new Button({ value: 'Изменить пароль', attr: { class: 'profile__item_blue reset-btn' } })],
            exitBtn: [new Button({ value: 'Выйти', attr: { class: 'profile__item_red reset-btn' } })],
            saveBtn: [new Button({ value: 'Сохранить', attr: { class: 'reset-btn action-button profile__save-btn' } })],
            fields: [
                new ProfileField({ name: "email", label: "Почта", profileInput: [new Input({ attr: { class: 'profile__input reset-input', type: 'text', value: 'pochta@yandex.ru', name: 'email', id: 'email' } })], attr: { class: "profile__item" } }),
                new ProfileField({ name: "login", label: "Логин", profileInput: [new Input({ attr: { class: 'profile__input reset-input', type: 'text', value: 'ivanivanov', name: 'login', id: 'login' } })], attr: { class: "profile__item" } }),
                new ProfileField({ name: "first_name", label: "Имя", profileInput: [new Input({ attr: { class: 'profile__input reset-input', type: 'text', value: 'Иван', name: 'first_name', id: 'first_name' } })], attr: { class: "profile__item" } }),
                new ProfileField({ name: "second_name", label: "Фамилия", profileInput: [new Input({ attr: { class: 'profile__input reset-input', type: 'text', value: 'Иванов', name: 'second_name', id: 'second_name' } })], attr: { class: "profile__item" } }),
                new ProfileField({ name: "display_name", label: "Имя в чате", profileInput: [new Input({ attr: { class: 'profile__input reset-input', type: 'text', value: 'Иван', name: 'display_name', id: 'display_name' } })], attr: { class: "profile__item" } }),
                new ProfileField({ name: "phone", label: "Телефон", profileInput: [new Input({ attr: { class: 'profile__input reset-input', type: 'text', value: '+79999999999', name: 'phone', id: 'phone' } })], attr: { class: "profile__item" } }),
            ],
            changes: [
                new ProfileField({ name: "oldPassword", label: "Старый пароль", profileInput: [new Input({ attr: { class: 'profile__input reset-input', type: 'text', value: '******', name: 'oldPassword', id: 'oldPassword' } })], attr: { class: "profile__item" } }),
                new ProfileField({ name: "newPassword", label: "Новый пароль", profileInput: [new Input({ attr: { class: 'profile__input reset-input', type: 'text', value: '******', name: 'newPassword', id: 'newPassword' } })], attr: { class: "profile__item" } }),
                new ProfileField({ name: "newPassword", label: "Повторите новый пароль", profileInput: [new Input({ attr: { class: 'profile__input reset-input', type: 'text', value: '******', name: 'newPassword', id: 'newPassword' } })], attr: { class: "profile__item" } }),
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