import Component from "../../services/Component";
import HeaderLink from "../ui/NavLink";
import tpl from "./tpl";

interface NavProps {
    className?: string;
    links: HeaderLink[];
    attr: {}
}

export default class Nav extends Component<NavProps> {
    constructor(props: NavProps) {
        super('nav', props)
    }
    
    render() {
        return this.compile(tpl, this._props);
    }
}