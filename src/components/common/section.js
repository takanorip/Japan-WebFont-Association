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
          margin: 0 0 2rem;
          font-size: 1.5rem;
          line-height: 1;
        }
        ::slotted(p) {
          margin: 0;
        }
        ::slotted(p:not(:last-child)) {
          margin-bottom: 1rem;
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
