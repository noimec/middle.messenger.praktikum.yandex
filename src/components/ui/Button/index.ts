import Component from "../../../services/Component";
import tpl from "./tpl";

interface IButton {
    value: string
}

export default class Button extends Component<IButton> {
    constructor(props: IButton) {
        super('button', props)
    }

    render() {
        return this.compile(tpl, this._props)
    }
}