import Component from "../../services/Component";
import AuthField from "../AuthField";
import tpl from "./tpl";

interface IAuth {
    title: string
    action: string
    common: string
    fields: AuthField[]
    attr: {}
}

export default class Auth extends Component<IAuth> {
    constructor(props: IAuth) {
        super('main', props)
    }
    render() {
        return this.compile(tpl, this._props);
    }
}