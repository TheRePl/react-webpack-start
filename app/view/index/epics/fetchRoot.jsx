import {
  FETCH_ROOT_LIST,
  GET_ROOT_LIST
} from '../actions';
import rootBanner from '../../../source/img/service/itemHead.png';

const imgApi = 'http://www.idreamcity.cn/api/v1/cms';

export default function fetchRootList(action$, store, { getJSON }) {
  return action$.filter(action => action.type === FETCH_ROOT_LIST().type)
    .switchMap(() => getJSON(imgApi)
      .map(res => res.homePage)
    )
    .map(res => ({
      type: GET_ROOT_LIST,
      banner: rootBanner,
      payload: [
        {
          type: '日常保洁',
          node: '注：3小时/次',
          unit: '1次',
          price: '120',
          img: res[5].image,
          id: 0
        },
        {
          type: '日常保洁',
          node: '注：3小时/次',
          unit: '1次',
          price: '120',
          img: res[6].image,
          id: 1
        },
        {
          type: '日常保洁',
          node: '注：3小时/次',
          unit: '1次',
          price: '120',
          img: res[7].image,
          id: 2
        },
        {
          type: '日常保洁',
          node: '注：3小时/次',
          unit: '1次',
          price: '120',
          img: res[3].image,
          id: 3
        },
        {
          type: '日常保洁',
          node: '注：3小时/次',
          unit: '1次',
          price: '120',
          img: res[4].image,
          id: 4
        }
      ]
    }));
}
