import Component from "../../services/Component";
import tpl from "./tpl";

interface Err {
    title: string;
    mainTitle: string;
}

export default class Error extends Component<Err> {
    render() {
        return this.compile(tpl);
    }
}