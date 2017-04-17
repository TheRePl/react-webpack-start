import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../../../source/img/service/about.jpg';

/*
const groups = [
  {
    tatle: '团队强大',
    img: groupImg0,
    text: '公司成立与2009年3月，是一家经余姚工商行政管理局批准成立的企业。公司对雇主进行全方位跟踪服务，对雇员进行公司员工制管理。使雇主和雇员都能享受安心可靠的服务。',
    key: 0,
  },
  {
    tatle: '培训专业',
    img: groupImg1,
    text: '公司专门开办搭把手职业技能培训学校，提供专业的培训给公司的保洁人员，通过理论和实操的结合培训，手把手的知道，使保洁人员都拥有专业的保洁知识。',
    key: 1,
  },
  {
    tatle: '团队强大',
    img: groupImg0,
    text: '公司采购了专业的保洁用具，并根据保洁员使用后的反馈意见，更换并更新更实用的用具，使保洁员在保洁的过程中更好的提高工作效率。',
    key: 2,
  },
];
*/

function About() {
  return (
    <div>
      <img src={about} alt="" width="100%" />
      <Link to={'/service/select'}>
        <input
          type="button"
          value="下一步"
          style={{
            width: '100%',
            fontSize: '1.5em',
            padding: '10px 0',
            color: '#fff',
            border: 0,
            background: '#f8b62c',
          }}
        />
      </Link>
      {/*
      <p>居家保洁详情</p>
      <ul className="group">
        {
          groups.map(group => (
            <li>
              <img src={group.img} alt="" />
              <div>
                <h2>{group.title}</h2>
                <p>{group.text}</p>
              </div>
            </li>
          ))
        }
      </ul>
      <div>
        <p>用户保障</p>
        <ul>
          <li>
            <img src="" alt="" />
            <h3>x</h3>
          </li>
        </ul>
        <h2>温馨提示</h2>
        <ol>
          <li>
            订单不足3小时，按3小时计费；超过3小时，按实际
          </li>
        </ol>
      </div>
      */}
    </div>
  );
}

export default About;