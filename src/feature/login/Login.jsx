import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { login } from '../../common/http/master-api';
import { check } from '../../common/http/master-api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Вызываем функцию login для аутентификации пользователя
      const { token } = await login(email, password);

      // Сохраняем токен в localStorage
      localStorage.setItem('token', token);

      // Вызываем функцию check для проверки авторизации и получения информации о пользователе
      const decodedToken = await check();

      console.log('Авторизация прошла успешно!');
      console.log('Декодированный токен:', decodedToken);

      // Здесь вы можете выполнить дополнительные действия после успешной авторизации, например, перенаправление на другую страницу
    } catch (error) {
      console.error('Ошибка при авторизации:', error);
      // Обработка ошибок авторизации
    }
  };

  return (<div>
    <Form onSubmit={handleSubmit} bg="primary" variant="dark">
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Введите email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
    </div>
  );
};

export default Login;