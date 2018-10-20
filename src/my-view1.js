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
          padding: 10vh 0 15vh;
        }

        .mainVisual {
          width: 640px;
          margin: auto;
        }

        h1 {
          font-size: 6.5rem;
          text-align: left;
          margin: 0;
          font-family: var(--app-en-font);
          line-height: 1;
          overflow: hidden;
        }

        h1:nth-child(n+2) {
          margin-top: 3rem;
        }

        h1 span {
          display: block;
          overflow: hidden;
          animation-timing-function: ease-in-out;
        }

        @media (max-width: 767px) {
          .mainVisual {
            width: auto;
          }

          h1 {
            font-size: 15vw;
          }

          h1:nth-child(n+2) {
            margin-top: 3rem;
          }
        }

        h1:nth-child(1) span {
          animation-name: titleAnimation;
          animation-duration: 0.6s;
        }

        h1:nth-child(2) span {
          animation-name: titleAnimation2;
          animation-duration: 0.65s;
        }

        h1:nth-child(3) span {
          animation-name: titleAnimation3;
          animation-duration: 0.7s;
        }

        @keyframes titleAnimation {
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
        @keyframes titleAnimation2 {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          30% {
            transform: translateY(100%);
            opacity: 0;
          }
          130% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes titleAnimation3 {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          40% {
            transform: translateY(100%);
            opacity: 0;
          }
          140% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      </style>

      <common-container>
        <div class="mainVisual">
          <h1><span>Japan</span></h1>
          <h1><span>Web Font</span></h1>
          <h1><span>Association</span></h1>
        </div>
      </common-container>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
