import { cleanup, render, screen } from '@testing-library/react';
// import { renderer } from 'react-test-renderer';
import * as renderer from 'react-test-renderer';
import Todo from '../todo';

const todo = {
  id: 1,
  title: 'whatever',
  completed: true,
};

afterEach(() => {
  cleanup();
});

test('should render the todo component', () => {
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId(`todo-${todo.id}`);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent(todo.title);

  // Find the <strike> element within the todoElement's children
  const strikeElement = todoElement.querySelector('strike');
  expect(strikeElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
