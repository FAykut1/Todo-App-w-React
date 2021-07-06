import ReactDOM from "react-dom";
import List from './index';


test('check list item can be add', () => {
  const div = document.createElement('div');

  ReactDOM.render(<List />,div);

  const input = div.querySelector('input');
  const button = div.querySelector('button');
  const container = div.querySelector('.list__container');

  input.value = "Deneme";
  button.click();
  input.value = "Deneme";
  button.click();
  input.value = "Deneme";
  button.click();

  expect(container.children.length).toBe(3);


  // console.log(container.outerHTML);
});