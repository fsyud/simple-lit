import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
@customElement("my-article")
class MyArticle extends LitElement {
  static styles = css`
    article {
      font-family: "Open Sans", sans-serif;
    }
    p {
      text-align: left;
      margin-bottom: 0.5rem;
    }
    h2 {
      font-size: 1.4rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    ul {
      list-style: none;
      padding-left: 0;
    }
    ul li {
      text-align: left;
      font-size: 16px;
      a {
        color: #1e27dfaa;
      }
    }
    .desc {
      font-size: 18px;
      font-weight: 700;
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff9900,
        0 0 35px #ff9900, 0 0 40px #ff9900, 0 0 50px #ff9900, 0 0 75px #ff9900;
    }
  `;

  render() {
    return html`
      <article>
        <h2>前端开发工程师</h2>
        <p class="desc">一个自由的灵魂 & 一些项目</p>
        <ul>
          <li>
            一个迷你的
            <a href="https://github.com/ligdy7/swr-min" target="_blank"
              >swr-min</a
            >.
          </li>
          <li>
            一个拓展
            <a
              href="https://github.com/ligdy7/bookmarks-quick-search"
              target="_blank"
              >Chrome bookmarks Quick Search</a
            >.
          </li>
          <li>...</li>
        </ul>
        <p>
          你可以通过邮箱联系我
          <a href="mailto: fsyud7@163.com">email</a>
        </p>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-article": MyArticle;
  }
}
