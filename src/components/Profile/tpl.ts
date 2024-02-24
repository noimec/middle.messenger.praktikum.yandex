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
                {{{fields}}}
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
                {{{changes}}}
            </ul>

            <button class="reset-btn action-button profile__save-btn">Сохранить</button>
        </form>
    </section>
`

export default tpl;