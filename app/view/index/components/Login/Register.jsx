import React from 'react';

const citys = [
  { name: '余姚', id: 'city0' },
  { name: '慈溪', id: 'city1' },
  { name: '仙居', id: 'city2' },
  { name: '新疆', id: 'city3' },
];
function Register() {
  return (
    <div className="register">
      <form action="">
        <div>
          <input type="text" placeholder="姓名" />
        </div>
        <div>
          <input type="text" placeholder="手机号" />
        </div>
        <div>
          <input type="text" placeholder="验证码" />
          <input type="button" value="发送验证码" />
        </div>
        <ul className="clear">
          {
            citys.map(city => (
              <li key={city.id}>
                <input type="radio" id={city.id} name="city" />
                <label htmlFor={city.id}>{city.name}</label>
              </li>
            ))
          }
        </ul>
        <input type="button" />
      </form>
    </div>
  );
}

export default Register;