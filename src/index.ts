import Header from "./components/Header";

const root = document.querySelector("#app");

const header = new Header('header', {
  links: [
    { page: '500', text: '500' },
    { page: '404', text: '404' },
    { page: 'chat', text: 'Чат' },
    { page: 'profile', text: 'Профиль' },
    { page: 'login', text: 'Вход' },
    { page: 'signin', text: 'Регистрация' },
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