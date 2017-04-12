import Immutable, { Map, List } from 'immutable';
/*
const test = Immutable.fromJS({ a: { b: [10, 20, 30] }, c: 40 }, (key, value) => {
  const isIndexed = Immutable.Iterable.isIndexed(value);
  return isIndexed ? value.toList() : value.toOrderedMap();
});
console.log(test);
*/

export default function createReducer(initialState, handlers) {
  return (State = initialState, action) => {
    let state = State;
    // 不是 Immutable 类型的常量直接输出
    if (typeof state === 'string' || typeof state === 'boolean' || typeof state === 'number') {
      return state;
    }
    // 转化为 Immutable 类型数据
    if (!Map.isMap(state) && !List.isList(state)) {
      state = Immutable.fromJS(state);
    }
    // Type 存在就输出对应的state
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
