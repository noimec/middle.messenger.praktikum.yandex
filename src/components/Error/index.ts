import Component from "../../services/Component";
import tpl from "./tpl";

interface Err {
    title: string;
    mainTitle: string;
    attr: {};
}

export default class Error extends Component<Err> {
    constructor(props: Err) {
        super('main', props)
    }
    render() {


        return this.compile(tpl, this._props);
    }
}