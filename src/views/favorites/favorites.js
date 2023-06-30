import { View } from "../../common/view";
import onChange from 'on-change';
import { Header } from "../../components/header/header";
import { CardList } from "../../components/card-list/card-list";

export class FavoritesView extends View {
  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle('My Books');
  }

  destroy() {
    onChange.unsubscribe(this.appState);
  }

  appStateHook(path) {
    if (path === 'favorites') {
      this.render();
    }
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = `
      <h1>My Books - ${this.appState.favorites.length}</h1>
    `;
    main.append(new CardList(this.appState, { list: this.appState.favorites }).render());
    this.app.innerHTML = ''
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
