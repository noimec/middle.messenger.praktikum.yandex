const tpl = `
    <form action="#" class="form flex">

        <h1 class="form__title">{{title}}</h1>

        <ul class="flex form__list reset-list">
            {{#each items}} 
                <li class="form__item flex">
                    <label class="form__label" for={{name}}>{{label}}</label>
                    <input class="form__input reset-input" type="text" name={{name}} id={{name}} />
                </li>
            {{/each}}
        </ul>
        
        <button class="action-button reset-btn">{{action}}</button>
        <button class="common-button reset-btn">{{common}}</button>

    </form>
`

export default tpl;