const getTemplate = () => {
  return `
    <div class="select__input" data-type="input">
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

    this.#setup()
  }

  #render() { // приватный метод!
    this.nodeElem.classList.add('select');
    this.nodeElem.innerHTML = getTemplate();
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.nodeElem.addEventListener('click', this.clickHandler);
  }

  get isOpen() {
    return this.nodeElem.classList.contains('open');
  }


  clickHandler(event) {
    const {type} = event.target.dataset;
    console.log(type);
    if (type === 'input') {
      if(this.isOpen) {
        this.close();
        return;
      }
      this.open();
    }
  }

  open() {
    this.nodeElem.classList.add('open');

  }

  close() {
    this.nodeElem.classList.remove('open');
  }

  destroy() {
    this.nodeElem.removeEventListener('click', this.clickHandler);
  }
}