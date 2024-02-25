import Component from "../../services/Component";
import ProfileField from "../ProfileField";
import Button from "../ui/Button";
import tpl from "./tpl";

interface IProfile {
    userName: string;
    fields: ProfileField[];
    changes: ProfileField[];
    saveBtn: Button[];
    changeDataBtn: Button[];
    changePassBtn: Button[];
    exitBtn: Button[];
    avatarBtn: Button[];
    backBtn: Button[];
    attr: {};
}

export default class Profile extends Component<IProfile> {
    constructor(props: IProfile) {
        super('div', props)
    }

    render() {
        return this.compile(tpl, this._props)
    }
}
