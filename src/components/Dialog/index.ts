import Component from "../../services/Component";
import Message from "../Message";
import tpl from "./tpl";

interface IDialog {
    date: string;
    messages: Message[]
}

export default class Dialog extends Component<IDialog> {
    constructor(props: IDialog) {
        super('div', props)
    }
    
    render() {
        return this.compile(tpl, this._props)
    }
} 