const getTemplate = (data = [], placeholder) => {
  const text = placeholder ?? 'Choose';

  const items = data.map(item => {
    return `
    <li class="select__item">${item.value}</li>
    `
  })

  return `
    <div class="select__input" data-type="input">
      <span>${text}</span>
      <i class="fa-solid fa-angles-down" data-type="arrow"></i>
    </div>
    <div class="select__dropdown">
      <ul class="select__list">
        ${items.join('')}
      </ul>
    </div>
  `
}


export class Select {
  constructor( selector, options) {
    this.nodeElem = document.querySelector(selector);
    this.options = options;

    this.#render()

    this.#setup()
  }

  #render() { // приватный метод!
    const {placeholder, data} = this.options;
    this.nodeElem.classList.add('select');
    this.nodeElem.innerHTML = getTemplate(data, placeholder);
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.nodeElem.addEventListener('click', this.clickHandler);
    this.arrowElem = this.nodeElem.querySelector('[data-type="arrow"]')
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
    this.arrowElem.classList.remove('fa-angles-down');
    this.arrowElem.classList.add('fa-angles-up');

  }

  close() {
    this.nodeElem.classList.remove('open');
    this.arrowElem.classList.remove('fa-angles-up');
    this.arrowElem.classList.add('fa-angles-down');
  }

  destroy() {
    this.nodeElem.removeEventListener('click', this.clickHandler);
  }
}