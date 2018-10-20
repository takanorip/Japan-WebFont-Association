import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../shared-styles.js';

class Footer extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        p {
          margin: 0 auto;
          max-width: 960px;
          font-size: 12px;
          text-align: center;
          line-height: 4rem;
        }
      </style>

      <footer>
        <p>&copy; 2018 Japan Web Font Association</p>
      </footer>
    `;
  }
}

window.customElements.define('common-footer', Footer);
