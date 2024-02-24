import Header from "./components/Header";
import Link from "./components/ui/Link";

const root = document.querySelector("#app");

const header = new Header('header', {
  links: [
    new Link('li', { page: '500', text: '500', attr: { class: 'nav__item' } },),
    new Link('li', { page: '404', text: '404', attr: { class: 'nav__item' } }),
    new Link('li', { page: 'chat', text: 'Чат', attr: { class: 'nav__item' } }),
    new Link('li', { page: 'profile', text: 'Профиль', attr: { class: 'nav__item' } }),
    new Link('li', { page: 'login', text: 'Вход', attr: { class: 'nav__item' } }),
    new Link('li', { page: 'signin', text: 'Регистрация', attr: { class: 'nav__item' } }),
  ],
  attr: {
    class: 'header flex'
  }
});

const headerElement = header.getContent();

document.addEventListener("DOMContentLoaded", () => {
  root?.appendChild(headerElement);

  const links = document.querySelectorAll(".page-link");

  links.forEach(link => {
    link.addEventListener("click", async (event: Event) => {
      event.preventDefault();

      const pageName = (event.target as HTMLElement).getAttribute("data-page");

      if (pageName) {
        await loadPage(pageName);
      }
    });
  });
});

const loadPage = async (pageName: string) => {
  const { default: Page } = await import(`./pages/${pageName}/index.ts`);
  const page = new Page({});
  const pageElement = page.getContent();

  if (root) {
    root.innerHTML = "";
    root.appendChild(headerElement);
    root.appendChild(pageElement);
  }
};