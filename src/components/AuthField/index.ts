import Component from "../../services/Component";
import tpl from "./tpl";

interface IAuthField {
    label: string
    name: string
    attr: {}
}

export default class AuthField extends Component<IAuthField> {
    constructor(props: IAuthField) {
        super('div', props)
    }
    render(): void {
        return this.compile(tpl, this._props);
    }
}