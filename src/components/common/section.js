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
        ::slotted(p) {
          margin: 0;
          font-size: 14px;
        }
        ::slotted(p:not(:last-of-type)) {
          margin-bottom: 0.5rem;
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
