/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      * {
        box-sizing: border-box;
      }
      h3 {
        margin: 0 0 1rem;
        font-size: 1.2rem;
      }
      p {
        font-size: 14px;
        margin: 0.5rem 0 0;
        line-height: 1.8;
      }
      p:first-child {
        margin-bottom: 0;
      }
      ul {
        font-size: 14px;
        margin: 0.5rem 0 0;
        line-height: 1.8;
      }
      ul:first-child {
        margin-bottom: 0;
      }
      a {
        transition: color 0.2s;
        transition-timing-function: var(--ease-out-quart);
        font-size: 14px;
        color: #000;
        text-decoration: none;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
