import Component from "../../../services/Component"
import tpl from "./tpl"

interface IHeaderLink {
    page: string;
    text: string;
    attr: object
}

export default class HeaderLink extends Component<IHeaderLink> {
    constructor(props: IHeaderLink) {
        super('li', props)
    }

    render() {
        return this.compile(tpl, this._props);
    }
}