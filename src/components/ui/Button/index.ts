import Component from "../../../services/Component";
import tpl from "./tpl";

interface Props {

}

export default class Button extends Component<Props> {
    render() {
        return this.compile(tpl)
    }
}