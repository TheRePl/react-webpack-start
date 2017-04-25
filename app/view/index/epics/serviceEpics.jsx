import * as Actions from '../actions'
import clearing0 from '../../../source/img/service/clearing/item0.png'
import clearing1 from '../../../source/img/service/clearing/item1.png'
import clearing2 from '../../../source/img/service/clearing/item2.png'
import clearing3 from '../../../source/img/service/clearing/item3.png'
import clearing4 from '../../../source/img/service/clearing/item4.png'
import clearing5 from '../../../source/img/service/clearing/item5.png'
import clearing6 from '../../../source/img/service/clearing/item6.png'
import clearing7 from '../../../source/img/service/clearing/item7.png'

import nanny0 from '../../../source/img/service/nanny/item0.png'
import nanny1 from '../../../source/img/service/nanny/item1.png'
import nanny2 from '../../../source/img/service/nanny/item2.png'
import nanny3 from '../../../source/img/service/nanny/item3.png'
import nanny4 from '../../../source/img/service/nanny/item4.png'

function fetchService(action$) {
  return action$.filter(action => action.type === Actions.FETCH_SERVICE().type).map(item => {
    switch (item.payload) {
      case '#laundry':
        return {
          type: Actions.SELECT_SERVICE().type,
          payload: [
            { type: '日常保洁', node: '3小时/次', unit: '1次', price: '120', img: clearing0, id: 0 },
            { type: '擦玻璃', node: '3小时/次', unit: '1次', price: '150', img: clearing1, id: 1 },
            { type: '深度保洁', node: '家庭除螨', unit: '1次', price: '599', img: clearing2, id: 2 },
            { type: '卫生间保洁', node: '消毒保洁', unit: '1间', price: '200', img: clearing3, id: 3 },
            { type: '厨房保洁', node: '消毒保洁', unit: '1间', price: '400', img: clearing4, id: 4 },
            { type: '星级生活', node: '每月4次', unit: '1月', price: '480', img: clearing5, id: 5 },
            { type: '悦享生活', node: '每季12次', unit: '1季', price: '1140', img: clearing6, id: 6 },
            { type: '优享生活', node: '全年48次', unit: '1年', price: '5760', img: clearing7, id: 7 }
          ]
        }
      case '#nanny':
        return {
          type: Actions.SELECT_SERVICE().type,
          payload: [
            { type: '家务', node: '面议', unit: '28天', price: '3500', img: nanny0, id: 8 },
            { type: '育儿嫂', node: '面议', unit: '28天', price: '3500', img: nanny1, id: 9 },
            { type: '养老护理', node: '面议', unit: '28天', price: '3500', img: nanny2, id: 10 },
            { type: '月嫂', node: '面议', unit: '26天', price: '8800', img: nanny3, id: 11 },
            { type: '催乳', node: '面议', unit: '1次', price: '380', img: nanny4, id: 12 }
          ]
        }
      default:
        return {
          type: Actions.SELECT_SERVICE().type,
          payload: []
        }
    }
  })
}

export default [fetchService]
