import Auth from '../../components/Auth';
import AuthField from '../../components/AuthField';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { validateForm, validateInput } from '../../utils/validate';

export default class LoginPage {
  private authInstance: Auth;

  constructor() {
    this.authInstance = new Auth({
      title: 'Вход',
      actionBtn: [new Button({
        value: 'Войти',
        attr: { class: 'action-button reset-btn' },
        events: {
          onClick: () => {
            this.validateForm();
          },
        },
      })],
      commonBtn: [new Button({ value: 'Создать аккаунт', attr: { class: 'common-button reset-btn' } })],
      fields: [
        new AuthField({
          label: 'Логин',
          name: 'login',
          authInput: [new Input({
            attr: {
              class: 'form__input reset-input', type: 'text', name: 'login', id: 'login', dataValid: false,
            },
            events: {
              onBlur: (element) => { this.validateInput(element); },
            },
          })],
          attr: { class: 'form__item flex' },
        }),
        new AuthField({
          label: 'Пароль',
          name: 'password',
          authInput: [new Input({
            attr: {
              class: 'form__input reset-input', type: 'text', name: 'password', id: 'password', dataValid: false,
            },
            events: {
              onBlur: (element) => { this.validateInput(element); },
            },
          })],
          attr: { class: 'form__item flex' },
        }),
      ],
      attr: {
        class: 'container flex',
      },
    });
  }

  private validateInput = validateInput;

  private validateForm = validateForm;

  getContent() {
    return this.authInstance.getContent();
  }
}
