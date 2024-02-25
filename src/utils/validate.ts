interface IValidate { isValid: boolean, errorMessage: string }

function validateField(fieldName: string, value: string): IValidate {
  switch (fieldName) {
    case 'first_name':
    case 'second_name':
      return {
        isValid: /^[A-ZА-Я][a-zа-я\-]*$/.test(value),
        errorMessage: 'С заглавной буквы без пробелов и символов',
      };
    case 'login':
      return {
        isValid: /^[A-Za-z][A-Za-z0-9_-]{2,19}$/.test(value),
        errorMessage: 'Непраильно укзан логин',
      };
    case 'email':
      return {
        isValid: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(value),
        errorMessage: 'Адрес указан неверно',
      };
    case 'password':
      return {
        isValid: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/.test(value),
        errorMessage: 'Неправильно указан пароль',
      };
    case 'phone':
      return {
        isValid: /^\+?\d{10,15}$/.test(value),
        errorMessage: 'Неправильно указан номер',
      };
    default:
      return {
        isValid: true,
        errorMessage: 'Заполните поле',
      };
  }
}

export function validateInput(input: HTMLInputElement) {
  const fieldName = input.name;
  const { value } = input;
  const errorDivClass = `${fieldName}-error`;
  const existingErrorDiv = input.parentNode?.querySelector(`.${errorDivClass}`);

  const { isValid, errorMessage } = validateField(fieldName, value);

  if (!isValid) {
    input.classList.add('invalid');
    input.setAttribute('dataValid', 'false');

    if (existingErrorDiv) {
      existingErrorDiv.textContent = errorMessage;
    } else {
      const errorDiv = document.createElement('div');
      errorDiv.classList.add('error__message');
      errorDiv.classList.add(errorDivClass);
      errorDiv.textContent = errorMessage;
      input.parentNode?.insertBefore(errorDiv, input.nextSibling);
    }

    input.setAttribute('dataValid', 'false');
  } else {
    if (existingErrorDiv) {
      existingErrorDiv.remove();
    }

    input.classList.remove('invalid');
    input.removeAttribute('dataValid');
  }
}

export function validateForm() {
  const inputs = document.querySelectorAll('.form__input') as NodeListOf<HTMLInputElement>;
  const formData: Record<string, string> = {};
  let valid = false;

  inputs.forEach((input) => {
    if (input.getAttribute('dataValid')) {
      valid = false;
    } else {
      valid = true;
    }

    formData[input.name] = input.value;

    validateInput(input);
  });

  if (valid) {
    console.log('Form data:', formData);
  }
}
