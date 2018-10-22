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

class MyView404 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          justify-content: center;
          padding: 2rem 0 0;
          text-align: center;
          font-weight: 700;
          font-size: 16rem;
          font-family: var(--app-en-font);
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        p {
          margin: 0;
          letter-spacing: 8px;
        }
      </style>
      <p>404</p>
    `;
  }
}

window.customElements.define('my-view404', MyView404);
