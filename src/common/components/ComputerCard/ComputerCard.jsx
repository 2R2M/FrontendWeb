import { observer } from 'mobx-react';

import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';

const ComputerCard = observer(() => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card onClick={toggleExpand} style={{ width: expanded ? '400px' : '200px' }}>
      <Card.Body>
        <Card.Title>Заголовок карточки</Card.Title>
        <Card.Text>Текст карточки</Card.Text>
        <Collapse in={expanded}>
          <div>
            <Card.Text>Составляющая 1</Card.Text>
            <Card.Text>Составляющая 2</Card.Text>
            <Card.Text>Составляющая 3</Card.Text>
          </div>
        </Collapse>
        <Button variant="primary" onClick={toggleExpand}>
          {expanded ? 'Скрыть составляющие' : 'Показать составляющие'}
        </Button>
      </Card.Body>
    </Card>
  );
});

export default ComputerCard;
