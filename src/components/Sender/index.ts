import Component from "../../services/Component";
import tpl from "./tpl";

interface ISender {
    name: string;
    sender_message: string;
    date: string;
    message_count: string;
    attr: {};
}

export default class Sender extends Component<ISender> {
    constructor(props: ISender) {
        super('li', props)
    }
    
    render() {
        return this.compile(tpl, this._props)
    }
}