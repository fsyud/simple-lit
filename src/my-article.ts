import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-article")
class MyArticle extends LitElement {
  render() {
    return html`
      <article>
        <h2>
          <wired-link
            elevation="2"
            href="https://github.com/fsyud"
            target="_blank"
            >前端开发工程师</wired-link
          >
        </h2>
        <p class="desc">一个自由的灵魂 & 一些项目</p>
        <ul>
          <li>
            一个迷你的
            <wired-link
              elevation="3"
              href="https://github.com/ligdy7/swr-min"
              target="_blank"
            >
              swr-min</wired-link
            >
            .
          </li>
          <li>
            一个拓展
            <wired-link
              elevation="3"
              href="https://github.com/ligdy7/bookmarks-quick-search"
              target="_blank"
            >
              Chrome bookmarks Quick Search
            </wired-link>
            .
          </li>
          <li>...</li>
        </ul>
        <p class="footer-desc">
          你可以通过邮箱联系我
          <wired-link elevation="2" href="mailto: fsyud7@163.com"
            >email</wired-link
          >
        </p>
      </article>
    `;
  }

  static styles = css`
    article {
      font-family: "Long Cang", cursive;
      font-weight: 800;
      font-style: normal;
    }
    p {
      text-align: left;
      margin-bottom: 0.5rem;
    }
    h2 {
      font-size: 2.2rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      font-weight: bold;
    }
    ul {
      list-style: none;
      padding-left: 0;
    }
    ul li {
      text-align: left;
      font-size: 1.4rem;
      a {
        color: #1e27dfaa;
      }
    }
    .desc {
      font-size: 1.4rem;
      font-weight: 700;
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff9900,
        0 0 35px #ff9900, 0 0 40px #ff9900, 0 0 50px #ff9900, 0 0 75px #ff9900;
    }
    .footer-desc {
      font-size: 1.3rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-article": MyArticle;
  }
}
