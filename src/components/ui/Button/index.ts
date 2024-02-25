import Component from '../../../services/Component.ts';
import tpl from './tpl.ts';

interface IButton {
  value: string;
  attr?: object;
  src?: string;
  events?: {
    onClick?: () => void;
  };
}

export default class Button extends Component<object> {
  constructor(props: IButton) {
    super('button', props);

    if (props.events?.onClick) {
      this.onClick(props.events.onClick);
    }
  }

  onClick(handler?: () => void) {
    if (handler) {
      this.element?.addEventListener('click', (e) => {
        e.preventDefault();
        handler();
      });
    }
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
