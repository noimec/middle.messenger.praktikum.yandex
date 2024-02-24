import Component from "../../services/Component";
import Dialog from "../Dialog";
import Sender from "../Sender";
import tpl from "./tpl";

interface IChat {
    senders: Sender[];
    dialog: Dialog[];
    attr: {};
}

export default class Chat extends Component<IChat> {
    constructor(props: IChat) {
        super('main', props)
    }

    render() {
        return this.compile(tpl, this._props);
    }
}