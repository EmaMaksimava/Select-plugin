const getTemplate = () => {
  return `
    <div class="select__input">
      <span> Some text</span>
      <i class="fa-solid fa-angles-down"></i>
    </div>
    <div class="select__dropdown">
      <ul class="select__list">
        <li class="select__item">React</li>
        <li class="select__item">Vue</li>
        <li class="select__item">Redux</li>
        <li class="select__item">Angular</li>
        <li class="select__item">Node.js</li>
        <li class="select__item">Vanilla JS</li>
      </ul>
    </div>
  `
}


export class Select {
  constructor( selector, options) {
    this.nodeElem = document.querySelector(selector);

    this.#render()
  }

  #render() {
    this.nodeElem.classList.add('select');
    this.nodeElem.innerHTML = getTemplate();
  }

  open() {
    this.nodeElem.classList.add('open');

  }

  close() {
    this.nodeElem.classList.remove('open');
  }
}