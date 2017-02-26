import { getBoundActions, resetActionBinder } from '../src/store/actions';
import configureStore from '../src/store/configureStore';

let dispatch;

beforeEach(() => {
  let store = configureStore();
  dispatch = store.dispatch;
  console.log("store configured");
});

it('should pass', function () {
  expect(typeof getBoundActions(dispatch).hello()).toBe('object');
  expect(typeof getBoundActions(dispatch).hello().sayHello).toBe('function');
  expect(typeof getBoundActions(dispatch).hello().sayHelloAsync).toBe('function');
});
