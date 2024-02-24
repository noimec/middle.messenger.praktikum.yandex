import Component from "../../../services/Component"
import tpl from "./tpl"

interface IInput {
    attr: {}
}

export default class Input extends Component<IInput> {
    constructor(props: IInput) {
        super('input', props)
    }

    render() {
        return this.compile(tpl, this._props)
    }
}