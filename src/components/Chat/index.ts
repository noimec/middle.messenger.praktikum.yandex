import Component from "../../services/Component";
import Dialog from "../Dialog";
import Sender from "../Sender";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Link from "../ui/Link";
import tpl from "./tpl";

interface IChat {
    senders: Sender[];
    dialog: Dialog[];
    backBtn: Button[];
    attachBtn: Button[];
    menuBtn: Button[];
    senderIconBtn: Button[];
    searchInput: Input[];
    messageInput: Input[];
    profileLink: Link[];
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