import Component from "../../services/Component";
import ProfileField from "../ProfileField";
import tpl from "./tpl";

interface IProfile {
    userName: string;
    fields: ProfileField[];
    changes: ProfileField[];
    attr: {};
}

export default class Profile extends Component<IProfile> {
    constructor(props: IProfile) {
        super('main', props)
    }

    render(): void {
        return this.compile(tpl, this._props)
    }
}