import reducer from "./reducer";
import { createTodo, toggleTodo, filterTodos, CREATE_TODO, TOGGLE_TODO, FILTER_TODOS } from "./actions";


describe("Test for action types", function() {
  test('Returns action with my todo', function() {
    expect(createTodo('Test')).toEqual({type:CREATE_TODO, payload: 'Test'})
  })
  test('Returns correct ID', function() {
  expect(toggleTodo(1)).toEqual({type:TOGGLE_TODO, payload: 1});
})
test('Returns filtertype', function() {
   expect(filterTodos('All')).toEqual({type:FILTER_TODOS, payload: 'All'});
 })
})
