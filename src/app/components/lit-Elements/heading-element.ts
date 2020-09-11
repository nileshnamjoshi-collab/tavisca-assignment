import { LitElement, html, css, customElement, property } from 'lit-element';

const mainColor = css`white`;
@customElement('title-element')
export class HeaderTitleElement extends LitElement {
  @property() name: any;

  static get styles(): any {
    return css`
      h3 {
        color: ${mainColor};
        margin: 19px;
      }
    `;
  }

  render(): any {
    return html`<h3>Links</h3>`;
  }
}
