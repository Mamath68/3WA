// src/components/Calculator.js
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./calculator.css";
const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <Container className="m-auto px-3 py-3 w-50 calculator">
      <h1 className="text-center">My Calculator</h1>
      <Row>
        <Col>
          <InputGroup className="mb-3 bg-dark">
            <FormControl
              type="text"
              value={input}
              className="bg-dark text-light"
              readOnly
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Button
            variant="light"
            onClick={() => handleButtonClick("7")}
            className="w-100">
            7
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="light"
            onClick={() => handleButtonClick("8")}
            className="w-100">
            8
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="light"
            onClick={() => handleButtonClick("9")}
            className="w-100">
            9
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="warning"
            onClick={() => handleButtonClick("*")}
            className="w-100">
            *
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Button
            variant="light"
            onClick={() => handleButtonClick("4")}
            className="w-100">
            4
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="light"
            onClick={() => handleButtonClick("5")}
            className="w-100">
            5
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="light"
            onClick={() => handleButtonClick("6")}
            className="w-100">
            6
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="warning"
            onClick={() => handleButtonClick("+")}
            className="w-100">
            +
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Button
            variant="light"
            onClick={() => handleButtonClick("1")}
            className="w-100">
            1
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="light"
            onClick={() => handleButtonClick("2")}
            className="w-100">
            2
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="light"
            onClick={() => handleButtonClick("3")}
            className="w-100">
            3
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="danger"
            onClick={handleBackspace}
            className="w-100 mt-2">
            Effacer
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Button
            variant="light"
            onClick={() => handleButtonClick("0")}
            className="w-100">
            0
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            variant="light"
            onClick={() => handleButtonClick(".")}
            className="w-100">
            .
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="success" onClick={handleCalculate} className="w-100">
            =
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="danger" onClick={handleClear} className="w-100">
            C
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Calculator;
