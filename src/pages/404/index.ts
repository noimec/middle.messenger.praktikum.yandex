import Error from "../../components/Error";
import Link from "../../components/ui/Link";

export default class Page404 {
    private errorInstance: Error;

    constructor() {
        this.errorInstance = new Error({
            title: 'Не туда попали',
            mainTitle: '404',
            backLink: [new Link({ value: 'Назад к чатам', attr: { class: 'back-link reset-link', href: './chat' } })],
            attr: {
                class: "error flex"
            }
        });
    }

    getContent() {
        return this.errorInstance.getContent();
    }
}
