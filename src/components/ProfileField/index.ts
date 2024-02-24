import Component from "../../services/Component"
import tpl from "./tpl"

interface IProfileField {
    name: string
    label: string
    value: string
    attr: {}
}

export default class ProfileField extends Component<IProfileField> {
    constructor(props: IProfileField) {
        super('li', props)
    }
    render(): void {
        return this.compile(tpl, this._props)
    }
}