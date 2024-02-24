import Component from "../../../services/Component"
import tpl from "./tpl"

interface ILink {
    page: string;
    text: string;
    attr: object
}

export default class HeaderLink extends Component<ILink> {
    constructor(props: ILink) {
        super('li', props)
    }

    render() {
        return this.compile(tpl, this._props);
    }
}