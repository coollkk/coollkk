import {
  RECEIVE_TODOS
} from './mutationtypes'
export default {
  [RECEIVE_TODOS] (state, {todos, others}) {
    state.todos = todos
    state.others = others
  }
}
