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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './components/common/footer.js'

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;
          --primary-background-color: rgba(255, 255, 255, 0.8);
          --app-en-font: 'Montserrat', sans-serif;
          --app-en_hand-font: 'Pacifico', sans-serif;
          --app-ja-font: 'Noto Sans JP', sans-serif;
          --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
          font-family: var(--app-ja-font);
          display: block;
          height: 100%;
        }

        app-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 11;
          background-color: var(--primary-background-color);
          --app-header-shadow: {
            box-shadow: none;
          };
        }

        iron-pages {
          height: 100%;
          box-sizing: border-box;
          padding-top: 6rem;
        }

        .memu-bar {
          height: 6rem;
          animation-name: menuAnimation;
          animation-duration: 0.7s;
        }

        @keyframes menuAnimation {
          0% {
            opacity: 0;
          }
          30% {
            opacity: 0;
          }
          130% {
            opacity: 1;
          }
        }

        .menu-list {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .menu-list a {
          display: block;
          margin: 0 1rem;
          text-decoration: none;
          color: var(--app-secondary-color);
          width: 10rem;
          text-align: center;
          font-family: var(--app-en-font);
          font-weight: bold;
          letter-spacing: 1px;
        }

        .menu-list a span {
          display: inline-block;
          line-height: 3rem;
          position: relative;
        }

        .menu-list a span::after {
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background-color: #000;
          position: absolute;
          bottom: 0;
          left: 0;
          transform: scale(0, 1);
          transform-origin: right top;
          transition: transform .2s ease-out;
        }

        .menu-list a:hover span::after {
          transform-origin: left top;
          transform: scale(1, 1);
        }

        .menu-list a.iron-selected span::after {
          transform: none;
        }

        @media (max-width: 767px) {
          .memu-bar {
            height: 4rem;
          }

          .menu-list a span {
            line-height: 2rem;
          }

          iron-pages {
            padding-top: 4rem;
          }
        }
      </style>

      <iron-ajax auto
        url="https://jwfa-api-basic.now.sh/api"
        handle-as="json"
        loading="{{loading}}"
        last-response="{{ajaxResponse}}">
      </iron-ajax>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-header condenses="" reveals="" effects="waterfall">
        <app-toolbar class="memu-bar">
          <iron-selector selected="[[page]]" attr-for-selected="name" class="menu-list" role="navigation">
            <a name="top" href="[[rootPath]]"><span>TOP</span></a>
            <a name="about" href="[[rootPath]]about"><span>ABOUT</span></a>
            <a name="tips" href="[[rootPath]]tips"><span>TIPS</span></a>
          </iron-selector>
        </app-toolbar>
      </app-header>

      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
        <my-view1 name="top"></my-view1>
        <my-view2 name="about"></my-view2>
        <my-view3 name="tips" data="[[ajaxResponse]]" loading="[[loading]]"></my-view3>
        <my-view404 name="view404"></my-view404>
      </iron-pages>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'top';
    } else if (['top', 'about', 'tips'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'top':
        import('./my-view1.js');
        break;
      case 'about':
        import('./my-view2.js');
        break;
      case 'tips':
        import('./my-view3.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}

window.customElements.define('my-app', MyApp);
