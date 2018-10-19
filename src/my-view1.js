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

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }

        .mainVisual {
          width: 640px;
          margin: auto;
          padding: 10vh 0 15vh;
        }

        h2 {
          font-size: 6.5rem;
          text-align: left;
          margin: 0;
          font-family: var(--app-en-font);
          line-height: 1;
          overflow: hidden;
        }

        h2:nth-child(n+2) {
          margin-top: 3rem;
        }

        h2 span {
          display: block;
          overflow: hidden;
          animation-name: titleAnimation;
          animation-timing-function: ease-in-out;
          animation-duration: 0.6s;
        }

        h2:nth-child(2) span {
          animation-name: titleAnimation2;
          animation-duration: 0.66s;
        }

        h2:nth-child(3) span {
          animation-name: titleAnimation3;
          animation-duration: 0.72s;
        }

        @keyframes titleAnimation {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes titleAnimation2 {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          10% {
            transform: translateY(100%);
            opacity: 0;
          }
          110% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes titleAnimation3 {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          20% {
            transform: translateY(100%);
            opacity: 0;
          }
          120% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      </style>

      <common-container>
        <div class="mainVisual">
          <h2><span>Japan</span></h2>
          <h2><span>Web Font</span></h2>
          <h2><span>Association</span></h2>
        </div>
      </common-container>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
