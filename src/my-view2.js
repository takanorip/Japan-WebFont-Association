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
import './shared-styles.js';
import './components/common/container.js';
import './components/common/hero.js';
import './components/common/section.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding-bottom: 5rem;
          animation-name: pageAnimation;
          animation-duration: 0.7s;
        }
        @keyframes pageAnimation {
          0% {
            opacity: 0;
            transform: translateY(1rem);
          }
          30% {
            opacity: 0;
            transform: translateY(1rem);
          }
          130% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      </style>

      <common-container>
        <common-hero color="#aedefc">ABOUT</common-hero>
        <common-section>
          <span slot="title">このサイトについて</span>
          <p>ウェブフォントを普及するためのサイト</p>
          <p>ウェブフォントを普及するためのサイト</p>
        </common-section>
        <common-section>
          <span slot="title">メンバー</span>
          <p>ウェブフォントを普及するためのサイト</p>
        </common-section>
      </common-container>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
