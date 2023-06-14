// pages/Game.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Game() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const player1Name = params.get("player1Name");
  const player2Name = params.get("player2Name");

  const [players, setPlayers] = useState([]);
  const [deckId, setDeckId] = useState("");
  const [drawnCards, setDrawnCards] = useState([]);

  useEffect(() => {
    async function fetchDeckAndDrawCards() {
      const deckResponse = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      const deckId = deckResponse.data.deck_id;
      setDeckId(deckId);

      const drawResponse = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=20`
      );
      setDrawnCards(drawResponse.data.cards);
    }

    fetchDeckAndDrawCards();
  }, []);

  useEffect(() => {
    setPlayers([
      { name: player1Name, cards: drawnCards.slice(0, 10) },
      { name: player2Name, cards: drawnCards.slice(10, 20) },
    ]);
  }, [player1Name, player2Name, drawnCards]);

  const handleDrawCard = () => {
    // Lógica para sacar una carta
  };

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} xs={12} md={6} lg={4} xl={3} className="mb-4">
            <Card>
              <Card.Header>
                <h4 className="text-center">{player.name}</h4>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center align-items-center">
                
                <Row className="justify-content-center">
                  {player.cards.map((card, cardIndex) => (
                    <Col key={cardIndex} xs={4} className="mb-3">
                      <Card className="text-center" style={{ width: "6rem", height: "8rem" }}>
                        <Card.Img
                          variant="top"
                          src={card.image}
                          style={{ width: "3rem", margin: "0 auto" }}
                        />
                        <Card.Body>
                          <Card.Text className="text-muted" style={{ fontSize: "0.8rem" }}>
                            {card.value} of {card.suit}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Button variant="primary" onClick={handleDrawCard}>
          Sacar Carta
        </Button>
      </Row>
    </Container>
  );
}

export default Game;
