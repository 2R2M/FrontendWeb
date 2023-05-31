import React, { useEffect, useState } from 'react';
import MyCard from './MyCard';

const MyComponent = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Здесь вместо fetchData() используйте ваш метод для получения JSON с бэкенда
    fetchData()
      .then(data => {
        // Предположим, что JSON содержит массив объектов { title: '...', description: '...' }
        setCards(data.map(item => ({
          title: item.title,
          description: item.description
        })));
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  return (
    <div>
      {cards.map((card, index) => (
        <MyCard key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default MyComponent;
