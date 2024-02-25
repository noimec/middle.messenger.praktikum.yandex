import Component from "../../services/Component";
import Link from "../ui/Link";
import tpl from "./tpl";

interface Err {
    title: string;
    mainTitle: string;
    backLink: Link[];
    attr: {};
}

export default class Error extends Component<Err> {
    constructor(props: Err) {
        super('div', props)
    }
    
    render() {
        return this.compile(tpl, this._props);
    }
}