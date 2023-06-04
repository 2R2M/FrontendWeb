import { login } from '../../common/http/master-api';
import { Context } from '../../index';
import { HOME_PAGE, SIGN_ROUTE } from '../../common/routes/consts/pagesRoutes';
import useInput from '../../common/hooks/login/useInput';

import React, { useContext } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';



const LoginPage = observer(() => {
  const { master } = useContext(Context);

//{const log = useInput('', {
//    minLength: 7,
//    maxLength: 25,
//    isEmail: true,
//  });}
 // const pass = useInput('', { minLength: 7, maxLength: 20 });
  const log = useInput();
  const pass = useInput();
  const navigate = useNavigate();

  const logIn = async () => {
    let data;
    try {
      data = await login(log.value, pass.value);
      console.log(data);
      master.setMaster(data);
      master.setAuth(true);
      navigate(HOME_PAGE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="login__style">
      <div className="login__form">
        <span>Авторизация</span>
        <div className="text_area">
          <div>
            <span className="login__err">{log.errorText}</span>
            <InputGroup>
              <Form.Control
                placeholder="Логин"
                value={log.value}
                maxLength={40}
                onChange={(e) => log.onChange(e)}
                onBlur={(e) => log.onBlur(e)}
                autoFocus={true}
              />
            </InputGroup>
          </div>

          <div>
            <span className="pass__err">{pass.errorText}</span>
            <InputGroup>
              <Form.Control
                type="password"
                placeholder="Пароль"
                value={pass.value}
                onChange={(e) => pass.onChange(e)}
                onBlur={(e) => pass.onBlur(e)}
                maxLength={40}
              />
            </InputGroup>
          </div>
        </div>
        <Button
          variant="primary"
          //disabled={!log.inputValid || !pass.inputValid}
          onClick={logIn}
        >
          Войти
        </Button>
        Нет аккаунта?
        <a
          onClick={() => {
            navigate(SIGN_ROUTE);
          }}
        >
          Зарегистрируйтесь
        </a>
      </div>
    </div>
  );
});

export default LoginPage;
