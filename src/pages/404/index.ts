import Error from "../../components/Error";

export default class Page404 {
    private errorInstance: Error;

    constructor() {
        this.errorInstance = new Error('main', {
            title: 'Не туда попали',
            mainTitle: '404',
            attr: {
                class: "error flex"
            }
        });
    }

    getContent() {
        return this.errorInstance.getContent();
    }
}