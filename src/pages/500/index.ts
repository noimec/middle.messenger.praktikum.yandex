import Error from '../../components/Error/index.ts';
import Link from '../../components/ui/Link/index.ts';

export default class Page404 {
  private errorInstance: Error;

  constructor() {
    this.errorInstance = new Error({
      title: 'Мы уже фиксим',
      mainTitle: '500',
      backLink: [
        new Link({
          value: 'Назад к чатам',
          attr: { class: 'back-link reset-link', href: './chat' },
        }),
      ],
      attr: {
        class: 'error flex',
      },
    });
  }

  getContent() {
    return this.errorInstance.getContent();
  }
}
