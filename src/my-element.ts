import { LitElement, css, html } from "lit";
import "@lottiefiles/lottie-player";
import { customElement, property } from "lit/decorators.js";
import avatar from "/avatar.png";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = "Click on the Vite and Lit logos to learn more";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <a href="https://github.com/fsyud" target="_blank">
        <img src=${avatar} class="logo lit" alt="Lit logo" />
      </a>
      <div class="player">
      <lottie-player
        autoplay
        controls
        loop
        src="https://lottie.host/34a5bafc-9daf-413b-92ae-fec251eac720/oobBJr8wpw.json"
        style="width: 220px"
      >
      </lottie-player>
      </div>
 
      <slot></slot>
    `;
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 20px auto;
      padding: 0 2rem;
      text-align: center;
    }

    .player {
      display: flex;
      justify-content: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
