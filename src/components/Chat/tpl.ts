const tpl = `
<section class="sidebar flex">
        <a class="sidebar__link reset-link" href="./profile.html">Профиль</a>
        <input class="sidebar__input reset-input" type="text" placeholder="Поиск">
        
        <ul class="sidebar__list flex reset-list"> 
            {{{senders}}}
        </ul>
</section>
<section class="chat flex">
        <div class="chat__header flex">
            <button class="chat__icon reset-btn"></button>
            <span class="chat__name">Вадим</span>
            <button class="chat__menu reset-btn">menu-icon</button>
        </div>
        <div class="chat__window flex">
            {{{dialog}}}
        </div>

        <div class="chat__footer flex">
            <button class="chat__attach-btn reset-btn">attach-icon</button>
            <input class="chat__message reset-input" type="text" name="message" placeholder="Сообщение">
            <button class="chat__send-btn reset-btn">back-icon</button>
        </div>
</section>    
`

export default tpl;