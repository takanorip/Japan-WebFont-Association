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
        .name {
          font-size: 18px;
        }
        a {
          display: block;
          text-decoration: underline;
        }
        a:hover {
          color: #aedefc;
        }
        .card {
          display: flex;
        }
        .image {
          width: 120px;
          margin: 0 1rem 0 0;
          line-height: 0;
          overflow: hidden;
          border-radius: 4px;
        }
        .image img {
          width: 100%;
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
          <span slot="title">ウェブフォントで「ウェブ」をもっと楽しく</span>
          <p>このサイトはウェブフォントを普及するためのサイトです。</p>
        </common-section>
        <common-section>
          <span slot="title">このサイトについて</span>
          <p>このサイトにウェブフォントに関する有益な情報を集約し、ウェブフォントへの正しい理解を広めることが目的です。</p>
          <p>注）「Japan Web Font Association」および「日本ウェブフォント協会」という団体は実在しない架空の団体です。</p>
        </common-section>
        <common-section>
          <span slot="title">VISION</span>
          <p>日本ウェブフォント協会のビジョン</p>
          <ul>
            <li>ウェブフォントへの正しい理解を広める</li>
          </ul>
        </common-section>
        <common-section>
          <span slot="title">公式教材</span>
          <p>
            タイトル：誰でも使える！ウェブフォント実践マニュアル<br>
            著者：大木尊紀
          </p>
        </common-section>
        <common-section>
          <span slot="title">メンバー</span>
          <div class="card">
            <figure class="image"><img src="/images/about/takanorip.jpg"></figure>
            <div class="texts">
              <p><a href="https://twitter.com/takanoripe"><b class="name">takanorip</b></a></p>
              <p>フォントが好き。「誰でも使える！ウェブフォント実践マニュアル」著者。</p>
            </div>
          </div>
        </common-section>
      </common-container>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
