const tpl = `
    <form action="#" class="form flex">

        <h1 class="form__title">{{title}}</h1>

        <ul class="flex form__list reset-list">
            {{{fields}}}
        </ul>
        
        <button class="action-button reset-btn">{{action}}</button>
        <button class="common-button reset-btn">{{common}}</button>

    </form>
`

export default tpl;