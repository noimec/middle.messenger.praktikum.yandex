import Component from "../../services/Component";
import tpl from "./tpl";


export default class Chat extends Component<object> {
    render() {
        return this.compile(tpl);
    }
}