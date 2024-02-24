import Component from "../../services/Component";
import HeaderLink from "../ui/HeaderLink";
import tpl from "./tpl";


interface HeaderProps {
    className?: string;
    links: HeaderLink[];
    attr: {}
}

export default class Header extends Component<HeaderProps> {
    constructor(props: HeaderProps) {
        super('header', props)
    }
    render() {
        return this.compile(tpl, this._props);
    }
}