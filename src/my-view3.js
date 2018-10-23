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
        section:not(:last-child) {
          margin-bottom: 4rem;
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
          text-decoration: underline;
        }
        .detail {
          display: flex;
          align-items: flex-start;
        }
        .text {
          margin-right: 2rem;
          margin-bottom: 0;
          flex: 1;
        }
        .image {
          width: 200px;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: left;
        }
        .image::before {
          content: '';
          display: block;
          width: 100%;
          padding-bottom: calc(9 / 16 * 100%);
        }
        @media (max-width: 767px) {
          .detail {
            display: block;
          }
          .text {
            margin-right: 0;
            margin-bottom: 1rem;
          }
          .image {
            width: 100%;
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
        <div class$="[[loadingClass]]">
          <template is="dom-repeat" items="{{data}}">
            <section>
              <a href="[[item.ogp.og:url]]" target="_blank" rel="noopener noreferrer">
                <h3>[[item.title]]</h3>
                <div class="detail">
                  <p class="text">[[item.seo.description]]</p>
                </div>
              </a>
            </section>
          </template>
          <div>
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
