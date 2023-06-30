import { DivComponent } from "../../common/div-component";
import './card.css';

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  #deleteFromFavorites() {
    this.appState.favorites = this.appState.favorites.filter((book) => {
      return book.key !== this.cardState.key;
    });
  }

  #addToFavorites() {
    this.appState.favorites.push(this.cardState);
  }

  render() {
    const existInFavorites = this.appState.favorites.find((book) => {
      return book.key === this.cardState.key;
    });

    this.el.classList.add('card');
    this.el.innerHTML = `
      <div class="card-image">
        <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="Cover">
      </div>
      <div class="card__info">
        <div class="card__tag">
          ${this.cardState.subject ? this.cardState.subject[0] : 'No Subject'}
        </div>
        <div class="card__title">
          ${this.cardState.title ?? 'No Title'}
        </div>
        <div class="card__author">
          ${this.cardState.author_name ? this.cardState.author_name[0] : 'No Author'}
        </div>
        <div class="card__footer">
          <button class="button__add ${existInFavorites ? 'button__active' : ''}">
          ${existInFavorites
            ? '<img src="/static/favorite.svg">'
            : '<img src="/static/favorite-white.svg">'
          }
          </button>
        </div>
      </div>
    `;

    if (existInFavorites) {
      this.el
        .querySelector('button')
        .addEventListener('click', this.#deleteFromFavorites.bind(this));
    } else {
      this.el
        .querySelector('button')
        .addEventListener('click', this.#addToFavorites.bind(this));
    }

    return this.el;
  }
}
