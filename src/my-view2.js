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
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          grid-gap: 2rem;
        }
        .card {
          border-radius: 4px;
          padding: 2rem;
          box-shadow: 0px 3px 15px rgba(0,0,0,0.08);
        }
        .image {
          width: 96px;
          margin: 0 auto 1.5rem;
          line-height: 0;
          overflow: hidden;
          border-radius: 50%;
        }
        .image img {
          width: 100%;
        }
        .texts {
          flex: 1;
        }
        common-section:last-child {
          margin: 0;
        }
        @media (max-width: 767px) {
          .cards {
            justify-content: center;
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
          <div class="cards">
            <div class="card">
              <figure class="image"><img src="/images/about/takanorip.jpg"></figure>
              <div class="texts">
                <a href="https://twitter.com/takanoripe"><b class="name">takanorip</b></a>
                <p>フォントが好き。「誰でも使える！ウェブフォント実践マニュアル」著者。</p>
              </div>
            </div>
            <div class="card">
              <figure class="image"><img src="https://pbs.twimg.com/profile_images/1077406283932659712/4YDe9oUj_400x400.jpg"></figure>
              <div class="texts">
                <a href="https://twitter.com/calmeryme"><b class="name">Calmery</b></a>
                <p>田舎の大学生．JavaScript，Elm とか好き．</p>
              </div>
            </div>
            <div class="card">
              <figure class="image"><img src="https://pbs.twimg.com/profile_images/1013764005565947905/QrDs975v_400x400.jpg"></figure>
              <div class="texts">
                <a href="https://twitter.com/murokaco"><b class="name">murokaco</b></a>
                <p>好きなフォント: はんなり明朝</p>
              </div>
            </div>
            <div class="card">
              <figure class="image"><img src="https://pbs.twimg.com/profile_images/849621148266405888/3N-oRzJ8_400x400.jpg"></figure>
              <div class="texts">
                <a href="https://twitter.com/Febu7th"><b class="name">如月ななひ</b></a>
                <p>主食は文字とカメラ。マクロ撮影が好き。駆け出しwebデザイナー。</p>
              </div>
            </div>
            <div class="card">
              <figure class="image"><img src="https://pbs.twimg.com/profile_images/1049722475917979648/QfBeL_g7_400x400.jpg"></figure>
              <div class="texts">
                <a href="https://twitter.com/shuhannn"><b class="name">shuhannn</b></a>
                <p></p>
              </div>
            </div>
          </div>
        </common-section>
      </common-container>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
