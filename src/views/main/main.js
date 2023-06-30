import { View } from "../../common/view";
import onChange from 'on-change';

export class MainView extends View {
  state = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0
  }

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle('Book Search');
  }

  appStateHook(path) {
    if (path === 'favorites') {
      console.log(path);
    }
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = `Books amount: ${this.appState.favorites.length}`;
    this.app.innerHTML = ''
    this.app.append(main);
    this.appState.favorites.push('123');
  }
}
