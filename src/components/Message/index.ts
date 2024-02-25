import Component from '../../services/Component';
import tpl from './tpl';

interface IMessage {
    own?: string;
    sender?: string;
    text?: string;
    img?: string;
    time: string;
}

export default class Message extends Component<IMessage> {
  constructor(props: IMessage) {
    super('div', props);
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
