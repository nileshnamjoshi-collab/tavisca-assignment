import { LitElement, html, customElement, css } from 'lit-element';

@customElement('footer-element')

export class FooterElement extends LitElement {
    constructor() {
        super();
    }

    static get styles(): any {
        return css`
         p { color: white;
             margin: 14px 0px 0px 410px;
            }
        `;
    }

    render(): any {
        return html`<p>@Sports Club</p>`;
    }

}
