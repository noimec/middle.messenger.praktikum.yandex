import Component from '../../../services/Component.ts';
import tpl from './tpl.ts';

interface ILink {
  value: string;
  attr: object;
}

export default class Link extends Component<object> {
  constructor(props: ILink) {
    super('a', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
