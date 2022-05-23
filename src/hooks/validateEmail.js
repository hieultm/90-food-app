const validEmailRegex = new RegExp(
    '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
); // tslint:disable-line

/**
 * Validates email against regex
 * */
export function validateEmail(value) {
    if (!validEmailRegex.test(value)) {
        return { invalidEmail: { value: 'invalid email' } };
    }
    return undefined;
}