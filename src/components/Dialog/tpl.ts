const tpl = `
{{#each dates}} 
    <span class="chat__date">{{date}}</span>

    <div class="chat__dialog">
        {{#each items}}
            {{#if text}} 
                {{#if sender}} 
                    <div class="chat__{{sender}}-wrapper">
                        <p class="chat__sender-text">
                            {{text}}
                        </p>
                        <span class="chat__time">{{time}}</span>
                    </div>
                {{/if}}

                {{#if own}} 
                    <div class="chat__{{own}}-wrapper">
                        <p class="chat__sender-text">
                            {{text}}
                        </p>
                        <span class="chat__time">{{time}}</span>
                    </div>
                {{/if}}
            {{/if}}

            {{#if img}} 
                <div class="chat__img-wrapper">
                    <div class="chat__img"></div>
                    <span class="chat__time chat__time_rounded">{{time}}</span>
                </div>
            {{/if}}
        {{/each}}
                  
    </div>
{{/each}}
`

export default tpl;