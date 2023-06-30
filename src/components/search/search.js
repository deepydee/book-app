import { DivComponent } from "../../common/div-component";
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  search() {
    const value = this.el.querySelector('.search__input').value;
    this.state.searchQuery = value;
  }

  render() {
    this.el.classList.add('search');
    this.el.innerHTML = `
      <input
        type="text"
        placeholder="Search book or author's name..."
        class="search__input"
        id="search__input"
        value=${this.state.searchQuery ?? ''}
      >
      <button class="search__button">
        <img src="/static/search-white.svg" alt="Search">
      </button>
    `;

    this.el.querySelector('.search__button').addEventListener(
      'click',
      this.search.bind(this)
    );

    this.el.querySelector('.search__input').addEventListener(
      'keydown',
      (event) => {
        if (event.code === 'Enter') {
          this.search();
        }
      }
    );

    return this.el;
  }
}
