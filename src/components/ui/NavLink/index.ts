import Component from "../../../services/Component"
import tpl from "./tpl"

interface INavLink {
    page: string;
    text: string;
    attr: object
}

export default class NavLink extends Component<INavLink> {
    constructor(props: INavLink) {
        super('li', props)
    }

    render() {
        return this.compile(tpl, this._props);
    }
}
