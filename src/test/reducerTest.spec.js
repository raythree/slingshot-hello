import { getBoundActions, resetActionBinder } from '../store/actions';
import configureStore from '../store/configureStore';

let dispatch;

beforeEach(() => {
  resetActionBinder();
  let store = configureStore();
  dispatch = store.dispatch;
});

it('should pass', function () {
  expect(typeof getBoundActions(dispatch).hello()).toBe('object');
  expect(typeof getBoundActions(dispatch).hello().sayHello).toBe('function');
  expect(typeof getBoundActions(dispatch).hello().sayHelloAsync).toBe('function');
});
