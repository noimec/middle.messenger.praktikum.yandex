import Component from "../../services/Component";
import tpl from "./tpl";


interface HeaderProps {
    className?: string;
}

export default class Header extends Component<HeaderProps> {
    render() {
        return this.compile(tpl);
    }
}