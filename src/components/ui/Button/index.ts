import Component from "../../../services/Component";
import tpl from "./tpl";

interface IButton {
    value: string;
    attr?: {};
    events?: {
        onClick?: () => void;
    };
}

export default class Button extends Component<IButton> {
    constructor(props: IButton) {
        super('button', props)

        if (props.events?.onClick) {
            this.onClick(props.events.onClick);
        }
    }

    onClick(handler?: () => void) {
        if (handler) {
            this._element?.addEventListener('click', (e) => {
                e.preventDefault();
                handler();
            });
        }
    }

    render() {
        return this.compile(tpl, this._props)
    }
}