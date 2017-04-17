import React from 'react';
import { Link } from 'react-router-dom';

const itemsTime = [
  { time: '8:00-9:00', key: 0 },
  { time: '9:00-10:00', key: 1 },
  { time: '10:00-11:00', key: 2 },
  { time: '11:00-12:00', key: 3 },
  { time: '12:00-13:00', key: 4 },
  { time: '13:00-14:00', key: 5 },
  { time: '14:00-15:00', key: 6 },
  { time: '15:00-16:00', key: 7 },
];

function Time() {
  return (
    <div>
      <div className="coverTime">&nbsp;</div>
      <div className="selectTime">
        <p>
          <Link to={'/'}>取消</Link>
          <Link className="success rt" to={'/'}>完成</Link>
        </p>
        <ul className="clear">
          <li className="action">
            <a>
              11月11号
            </a>
          </li>
          <li>
            <a>
              11月12号
            </a>
          </li>
          <li>
            <a>
              11月13号
            </a>
          </li>
        </ul>
        <ol className="clear">
          {
            itemsTime.map(item => (
              <li className="action" key={item.key}>
                {item.time}
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  );
}

export default Time;