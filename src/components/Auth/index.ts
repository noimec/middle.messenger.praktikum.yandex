import Component from "../../services/Component";
import tpl from "./tpl";


export default class Auth extends Component<object> {
    render() {
        return this.compile(tpl);
    }
}