import Component from "../../services/Component";
import tpl from "./tpl";

export default class Dialog extends Component<object> {
    render(): void {
        return this.compile(tpl)
    }
} 