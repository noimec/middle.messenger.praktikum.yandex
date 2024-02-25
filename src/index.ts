import Nav from "./components/Nav";
import NavLink from "./components/ui/NavLink";
import ChatPage from "./pages/chat";

const root = document.querySelector("#app");

const nav = new Nav({
  links: [
    new NavLink({ page: '500', text: '500', attr: { class: 'nav__item' } }),
    new NavLink({ page: '404', text: '404', attr: { class: 'nav__item' } }),
    new NavLink({ page: 'chat', text: 'Чат', attr: { class: 'nav__item' } }),
    new NavLink({ page: 'profile', text: 'Профиль', attr: { class: 'nav__item' } }),
    new NavLink({ page: 'login', text: 'Вход', attr: { class: 'nav__item' } }),
    new NavLink({ page: 'signin', text: 'Регистрация', attr: { class: 'nav__item' } }),
  ],
  attr: {
    class: 'nav flex'
  }
});

const chatPage = new ChatPage().getContent();
const navElement = nav.getContent();

document.addEventListener("DOMContentLoaded", () => {
  root?.appendChild(navElement);
  root?.appendChild(chatPage);

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
    root.appendChild(navElement);
    root.appendChild(pageElement);
  }
};
