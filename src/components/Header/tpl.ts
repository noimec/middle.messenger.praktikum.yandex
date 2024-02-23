const tpl = `
<nav>
    <ul class="flex nav__list reset-list">
        {{#each links}} 
            <li class="nav__item"><a class="reset-link page-link" data-page={{page}} href="./{{page}}">{{text}}</a></li>
        {{/each}}
    </ul>
</nav>
`

export default tpl;