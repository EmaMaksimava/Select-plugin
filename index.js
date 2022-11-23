import { Select } from "./plugins/select-plugin";

const select = new Select('#select', {
  placeholder: 'Choose from list',
  data: [
    {id: '1', value: 'Angular'},
    {id: '2', value: 'React'},
    {id: '3', value: 'Redux'},
    {id: '4', value: 'Node.js'},
    {id: '5', value: 'Vanilla JS'},
    {id: '6', value: 'Vue.js'}
  ]
});

window.s = select;