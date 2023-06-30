import { View } from "../../common/view";

export class MainView extends View {
  constructor() {
    super();
    this.setTitle('Book Search');
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = 'Test';
    this.app.innerHTML = ''
    this.app.append(main);
  }
}
