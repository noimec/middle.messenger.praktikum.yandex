import Component from '../../../services/Component.ts';
import tpl from './tpl.ts';

interface IInput {
  attr: object;
  events?: {
    onBlur?: (element: HTMLInputElement) => void;
  };
}

export default class Input extends Component<object> {
  constructor(props: IInput) {
    super('input', props);
    if (props.events?.onBlur) {
      this.onBlur(props.events.onBlur);
    }
  }

  onBlur(handler?: (element: HTMLInputElement) => void) {
    const element = this.element as HTMLInputElement;

    if (handler) {
      this.element?.addEventListener('blur', () => {
        handler(element);
      });
    }
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
