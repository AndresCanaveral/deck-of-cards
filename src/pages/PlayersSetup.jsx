// pages/PlayersSetup.jsx
import React, { useState } from "react";
import { Button, Form, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PlayersSetup() {
  const navigate = useNavigate();
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/game?player1Name=${player1Name}&player2Name=${player2Name}`);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Card className="p-4">
        <h1 className="text-center mb-4">Juego de Cartas</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre del Jugador 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre del Jugador 1"
              value={player1Name}
              onChange={(e) => setPlayer1Name(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nombre del Jugador 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre del Jugador 2"
              value={player2Name}
              onChange={(e) => setPlayer2Name(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" block>
            Iniciar Juego
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default PlayersSetup;
