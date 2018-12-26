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
          font-size: 14px;
        }
        a {
          display: block;
          text-decoration: underline;
          text-align: center;
        }
        a:hover {
          color: #aedefc;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          grid-gap: 2rem;
        }
        .card {
          border-radius: 4px;
          padding: 2rem 0;
          box-shadow: 0px 3px 15px rgba(0,0,0,0.08);
        }
        .image {
          width: 64px;
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
            grid-gap: 1rem;
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
            タイトル：<br>
            著者：大木尊紀
          </p>
        </common-section>
        <common-section>
          <span slot="title">メンバー</span>
          <div class="cards">
            <a href="https://twitter.com/takanoripe" class="card">
              <figure class="image"><img src="/images/about/takanorip.jpg"></figure>
              <div class="texts">
                <b class="name">takanorip</b>
              </div>
            </a>
            <a href="https://twitter.com/calmeryme" class="card">
              <figure class="image"><img src="https://pbs.twimg.com/profile_images/1077406283932659712/4YDe9oUj_400x400.jpg"></figure>
              <div class="texts">
                <b class="name">Calmery</b>
              </div>
            </a>
            <a href="https://twitter.com/murokaco" class="card">
              <figure class="image"><img src="https://pbs.twimg.com/profile_images/1013764005565947905/QrDs975v_400x400.jpg"></figure>
              <div class="texts">
                <b class="name">murokaco</b>
              </div>
            </a>
            <a href="https://twitter.com/Febu7th" class="card">
              <figure class="image"><img src="https://pbs.twimg.com/profile_images/849621148266405888/3N-oRzJ8_400x400.jpg"></figure>
              <div class="texts">
                <b class="name">如月ななひ</b>
              </div>
            </a>
            <a href="https://twitter.com/shuhannn" class="card">
              <figure class="image"><img src="https://pbs.twimg.com/profile_images/1049722475917979648/QfBeL_g7_400x400.jpg"></figure>
              <div class="texts">
                <b class="name">shuhannn</b>
              </div>
            </a>
            <a href="https://www.facebook.com/atsushi.ito.7758" class="card">
              <figure class="image"><img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/13631654_879887108807235_2829615063363236677_n.jpg?_nc_cat=101&_nc_ht=scontent-nrt1-1.xx&oh=5b2d091e58f5fd61da611a85e335c820&oe=5C989E76"></figure>
              <div class="texts">
                <b class="name">Atsushi Ito</b>
              </div>
            </a>
            <a href="https://twitter.com/moro_is" class="card">
              <figure class="image"><img src="https://pbs.twimg.com/profile_images/940479838854377473/_Exr3_lx_400x400.jpg"></figure>
              <div class="texts">
                <b class="name">モロ</b>
              </div>
            </a>
            <a href="https://twitter.com/tscp" class="card">
              <figure class="image"><img src="https://pbs.twimg.com/profile_images/1496340861/3343181_origin_400x400.jpg"></figure>
              <div class="texts">
                <b class="name">OYA takashi</b>
              </div>
            </a>
            <a href="https://twitter.com/omelettelife" class="card">
              <figure class="image"><img src="https://pbs.twimg.com/profile_images/1075431837588086789/ot6cssVM_400x400.jpg"></figure>
              <div class="texts">
                <b class="name">オムライフ</b>
              </div>
            </a>
            <a href="https://twitter.com/DesignTechLab1" class="card">
              <figure class="image"><img src="https://pbs.twimg.com/profile_images/1067810155557834752/GtGrrtQl_400x400.jpg"></figure>
              <div class="texts">
                <b class="name">DesignTechLab</b>
              </div>
            </a>
          </div>
        </common-section>
      </common-container>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
