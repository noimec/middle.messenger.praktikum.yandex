import Component from '../../services/Component';
import Input from '../ui/Input';
import tpl from './tpl';

interface IProfileField {
    name: string;
    label: string;
    profileInput: Input[];
    attr: {}
}

export default class ProfileField extends Component<IProfileField> {
  constructor(props: IProfileField) {
    super('li', props);
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
