import {
  RECEIVE_TODOS
} from './mutationtypes'

export default {
  handleSubmit ({commit}, {todos, others}) {
    commit(RECEIVE_TODOS, {todos, others})
  }
}
