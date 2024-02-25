import Component from "../../../services/Component"
import tpl from "./tpl"

interface IInput {
    attr: {}
    events?: {
        onBlur?: (element: HTMLInputElement) => void;
    };
}

export default class Input extends Component<IInput> {
    constructor(props: IInput) {
        super('input', props)
        if (props.events?.onBlur) {
            this.onBlur(props.events.onBlur);
        }
    }

    onBlur(handler?: (element: HTMLInputElement) => void) {
        const element = this._element as HTMLInputElement;

        if (handler) {
            this._element?.addEventListener('blur', () => {
                handler(element);
            });
        }
    }

    render() {
        return this.compile(tpl, this._props)
    }
}
