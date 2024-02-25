import Component from "../../services/Component";
import Input from "../ui/Input";
import tpl from "./tpl";

interface IAuthField {
    label: string
    name: string
    authInput: Input[];
    attr: {}
}

export default class AuthField extends Component<IAuthField> {
    constructor(props: IAuthField) {
        super('div', props)
    }
    
    render() {
        return this.compile(tpl, this._props);
    }
}