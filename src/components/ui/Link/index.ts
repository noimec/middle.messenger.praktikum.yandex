import Component from "../../../services/Component"
import tpl from "./tpl"

interface ILink {
    page: string;
    text: string;
}

export default class Link extends Component<ILink> {
    render() {
        return this.compile(tpl);
    }
}