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
        a {
          display: block;
        }
        h3 {
          margin: 0;
          font-size: 1rem;
        }
        .text {
          margin-bottom: 0;
          margin-top: 1rem;
          flex: 1;
        }
        .wrapper {
          position: relative;
        }
        .contents {
          margin-top: -12px;
          transition: all 0.3s;
          transition-timing-function: var(--ease-out-quart);
          transition-delay: 0.4s;
          background-color: #fff;
          opacity: 1;
          visibility: visible;
          column-count: 3;
          column-gap: 24px;
        }
        .document {
          /* margin-bottom: 24px; */
          transition: 0.3s;
          border-radius: 4px;
          /* border: 1px solid #bbb; */
          page-break-inside: avoid;
          break-inside: avoid;
          overflow: hidden;
          box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
        }
        .document:hover {
          box-shadow: 0px 12px 24px rgba(0,0,0,0.4);
        }
        .documentWrap {
          margin-bottom: -18px;
          padding: 12px 0 30px;
        }
        .img {
          padding-bottom: calc(9 / 16 * 100%);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        .textArea {
          padding: 2rem 1rem;
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
          .contents {
            column-count: 1;
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
              <div class="documentWrap">
                <a class="document" href="[[item.ogp.og:url]]" target="_blank" rel="noopener noreferrer">
                  <section>
                    <div class="img" style="background-image: url([[item.ogp.og:image]]);"></div>
                    <div class="textArea">
                      <h3>[[item.title]]</h3>
                      <p class="text">[[item.seo.description]]</p>
                    </div>
                  </section>
                </a>
              </div>
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
