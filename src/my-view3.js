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
import '@polymer/iron-ajax/iron-ajax.js';
import './shared-styles.js';
import './components/common/container.js';
import './components/common/hero.js';

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding-bottom: 6rem;
          animation-name: pageAnimation;
          animation-duration: 0.7s;
        }
        section:not(:last-of-type) {
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #ececec;
        }
        a {
          display: block;
          transition: color 0.2s;
          transition-timing-function: var(--ease-out-quart);
        }
        a:hover {
          color: #fb929e;
        }
        h3 {
          margin: 0 0 0.5rem;
          text-decoration: underline;
          font-size: 1rem;
          font-weight: normal;
        }
        .text {
          margin-bottom: 0;
          flex: 1;
        }
        .wrapper {
          position: relative;
        }
        .contents {
          transition: all 0.3s;
          transition-timing-function: var(--ease-out-quart);
          transition-delay: 0.4s;
          background-color: #fff;
          opacity: 1;
          visibility: visible;
        }
        .loading-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: -2;
          display: none;
        }
        .loading .loading-content {
          display: block;
          z-index: 2;
        }
        .loading .contents {
          opacity: 0;
          visibility: hidden;
        }
        @media (max-width: 767px) {
          .text {
            margin-right: 0;
            margin-bottom: 1rem;
          }
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
        <common-hero color="#ffdfdf">TIPS</common-hero>
        <div class$="[[loadingClass]] wrapper">
          <div class="contents">
            <template is="dom-repeat" items="{{data}}">
              <section>
                <a href="[[item.ogp.og:url]]" target="_blank" rel="noopener noreferrer">
                  <h3>[[item.title]]</h3>
                  <p class="text">[[item.seo.description]]</p>
                </a>
              </section>
            </template>
          </div>
          <div class="loading-content">
            loading...
          </div>
        </div>
      </common-container>
    `;
  }
  static get properties() {
    return {
      data: Array,
      loading: {
        type: String,
        observer: '_handleLoading'
      }
    };
  }
  constructor() {
    super();
    this.loadingClass = 'loading'
  }
  _handleLoading(loading) {
    if (!loading) {
      this.loadingClass = 'loaded'
    }
  }
}

window.customElements.define('my-view3', MyView3);
