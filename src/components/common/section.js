import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../shared-styles.js';

class Section extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          margin-bottom: 4rem;
        }
        h3 {
          font-size: 24px;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
          position: relative;
        }
        h3::after {
          content: '';
          display: block;
          height: 2px;
          width: 2rem;
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: #333;
        }
      </style>

      <section>
        <h3><slot name="title"></slot></h3>
        <slot></slot>
      </section>
    `;
  }
}

window.customElements.define('common-section', Section);
