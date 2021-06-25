import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import { sharedStyles } from "./shared-styles";

import './view-account'
import './auth-status'
import "./view-interest-C";
import "./view-interest-RD";
import "./view-interest-U";
import './view-signin'


declare global {
  interface HTMLElementTagNameMap {
    'app-shell': AppShellElement
  }
}

@customElement('app-shell')
export class AppShellElement extends LitElement {


  render() {
    return html`
    <auth-status></auth-status>
    <view-account></view-account>
    <view-signin></view-signin>
    <view-interest-c></view-interest-c>
    <view-interest-rd></view-interest-rd>
    <view-interest-u></view-interest-u>
    <hr>
    `
  }

  static get styles() {
    return [sharedStyles, 
    css`
      app-view {
        box-sizing: border-box;
        padding: var(--min-padding);
      }

      auth-status {
        height: 56px;
        background-color: #f8f8f8;
      }

      @media (min-width: 600px) {
        auth-status {
          height: 64px;
        }
      }
    `
    ]
  }
}