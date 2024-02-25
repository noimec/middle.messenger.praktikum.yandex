import Component from '../../../services/Component';
import tpl from './tpl';

interface ILink {
    value: string;
    attr: {};
}

export default class Link extends Component<ILink> {
  constructor(props: ILink) {
    super('a', props);
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
