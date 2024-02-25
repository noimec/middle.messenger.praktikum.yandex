import Component from '../../services/Component';
import AuthField from '../AuthField';
import Button from '../ui/Button';
import tpl from './tpl';

interface IAuth {
    title: string;
    fields: AuthField[];
    actionBtn: Button[];
    commonBtn: Button[];
    attr: {};
}

export default class Auth extends Component<IAuth> {
  constructor(props: IAuth) {
    super('div', props);
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
