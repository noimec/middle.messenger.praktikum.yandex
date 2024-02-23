const tpl = `
<div class="flex back__wrapper">
         back-icon
    </div>

    <section class="profile flex">
        <button id="avatar" class="reset-btn profile__avatar avatar">
            <img src="#" alt="Avatar">
        </button>
        <h1 class="profile__name">{{userName}}</h1>
        
        <form class="profile__form flex" action="#">
            <ul class="reset-list profile__list flex">
                {{#each items}} 
                    <li class="profile__item">
                        <label class="profile__label" for={{name}}>{{label}}</label>
                        <input
                            value={{value}}
                            class="profile__input reset-input"
                            type="text"
                            name={{name}}
                            id={{name}}
                        />
                    </li>
                {{/each}}
        </ul>

        <ul class="reset-list profile__list flex">
            <li class="profile__item">
                <button class="profile__item_blue reset-btn">Изменить данные</button>
            </li>
            <li class="profile__item">
                <button class="profile__item_blue reset-btn">Изменить пароль</button>
            </li>
            <li class="profile__item">
                <button class="profile__item_red reset-btn">Выйти</button>
            </li>
        </ul>

        <ul class="reset-list profile__list flex">
            {{#each changes}} 
                <li class="profile__item">
                    <li class="profile__item">
                        <label class="profile__label" for={{name}}>{{label}}</label>
                        <input
                            value={{value}}
                            class="profile__input reset-input"
                            type="text"
                            name={{name}}
                            id={{name}}
                        />
                    </li>
                </li>
            {{/each}}
        </ul>

        <button class="reset-btn action-button profile__save-btn">Сохранить</button>
        </form>
    </section>
`

export default tpl;