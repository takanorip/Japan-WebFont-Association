/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../shared-styles.js';

class Hero extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          width: 100%;
          position: relative;
        }

        h2 {
          width: 100%;
          padding: 8rem 0 8rem;
          text-align: center;
          margin: 0 auto 5rem;
          letter-spacing: 4px;
          font-size: 3rem;
          font-family: var(--app-en-font);
        }

        @media (max-width: 767px) {
          h2 {
            width: calc(100% + 32px);
            padding: 5rem 0 5rem;
            text-align: center;
            margin: 0 -16px 4.5rem;
            letter-spacing: 6px;
          }
        }
      </style>

      <h2 style="background-color: [[color]];"><slot></slot></h2>
    `;
  }

  static get properties() {
    return {
      color: {
        type: String
      },
    };
  }
}

window.customElements.define('common-hero', Hero);
