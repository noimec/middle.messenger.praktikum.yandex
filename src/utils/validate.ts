function validateField(fieldName: string, value: string): boolean {
    switch (fieldName) {
        case 'first_name':
        case 'second_name':
            return /^[А-Яа-яA-Za-z]+(?:-[А-Яа-яA-Za-z]+)?$/.test(value);
        case 'login':
            return /^[A-Za-z][A-Za-z0-9_-]{2,19}$/.test(value);
        case 'email':
            return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(value);
        case 'password':
            return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/.test(value);
        case 'phone':
            return /^\+?\d{10,15}$/.test(value);
        default:
            return true;
    }
}

function collectFormData(): Record<string, string> {
    const formData: Record<string, string> = {};

    const inputs = document.querySelectorAll('.sign-input');

    inputs.forEach((input: HTMLInputElement) => {
        formData[input.name] = input.value;
    });

    return formData;
}

export function validateInput(input: HTMLInputElement): void {
    const fieldName = input.name;
    const value = input.value;
    const errorDivId = `${fieldName}-error`;
    const existingErrorDiv = document.getElementById(errorDivId);

    if (!validateField(fieldName, value)) {
        input.classList.add('invalid')
        input.setAttribute('dataValid', 'false')
        if (existingErrorDiv) {
            existingErrorDiv.textContent = `Invalid ${fieldName} field`;
        } else {
            const errorDiv = document.createElement('div');
            errorDiv.classList.add('error__message');
            errorDiv.id = errorDivId;
            errorDiv.textContent = `Invalid ${fieldName} field`;
            input.parentNode?.insertBefore(errorDiv, input.nextSibling);
        }

        input.setAttribute('dataValid', 'false');
    } else {
        if (existingErrorDiv) {
            existingErrorDiv.remove();
        }
        input.classList.remove('invalid')
        input.removeAttribute('dataValid')
    }
}

export function validateForm() {
    const inputs = document.querySelectorAll('.sign-input');
    let valid = false;

    for (const input of inputs) {
        if (input.getAttribute('dataValid')) {
            valid = false
        } else {
            valid = true;
        }
    }

    if (valid) {
        const formData = collectFormData();
        console.log('Form data:', formData);
    }

    inputs.forEach((input: HTMLInputElement) => {
        validateInput(input);
    });
}