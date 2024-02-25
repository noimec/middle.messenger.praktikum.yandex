import Component from '../../../services/Component.ts';
import tpl from './tpl.ts';

interface INavLink {
  page: string;
  text: string;
  attr: object;
}

export default class NavLink extends Component<object> {
  constructor(props: INavLink) {
    super('li', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
