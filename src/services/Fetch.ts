enum METHODS {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

interface IRequestOptions {
    method?: METHODS;
    data?: Record<string, string>;
    timeout?: number;
    headers?: Record<string, string>;
    retries?: number;
};

interface IHTTPMethod {
    (url: string, options?: IRequestOptions): Promise<unknown>;
}

const queryStringify = (data: Record<string, string>) => {
    if (typeof data !== "object") {
        throw new Error("Data must be object");
    }

    const keys = Object.keys(data);

    return keys.reduce(
        (result, key, index) =>
            `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`,
        "?",
    );
};

export default class Fetch {
    get: IHTTPMethod = (url, options = {}) =>
        this.request(url, { ...options, method: METHODS.GET }, options.timeout);

    post: IHTTPMethod = (url, options = {}) =>
        this.request(url, { ...options, method: METHODS.POST }, options.timeout);

    put: IHTTPMethod = (url, options = {}) =>
        this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

    delete: IHTTPMethod = (url, options = {}) =>
        this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

    request = (url: string, options: IRequestOptions = {}, timeout = 5000) => {
        const { headers = {}, method, data } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject("No method");
                return;
            }
            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.open(method, isGet && !!data ? url + queryStringify(data) : url);

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = () => resolve(xhr);

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}