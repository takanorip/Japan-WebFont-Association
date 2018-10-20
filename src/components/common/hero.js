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
          display: flex;
          align-items: center;
          width: 100%;
          position: relative;
        }

        :host::before {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 4.5rem;
          height: 2px;
          background-color: var(--app-secondary-color)
        }

        h2 {
          width: 100%;
          padding: 6rem 0 3rem;
          text-align: left;
          margin: auto;
          font-size: 3rem;
          font-family: var(--app-en-font);
        }
      </style>

      <h2><slot></slot></h2>
    `;
  }
}

window.customElements.define('common-hero', Hero);
