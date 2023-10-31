import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useStore } from ".././src/hooks/useStore";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";

function App() {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore();
  return (
    <Container fluid>
      <h1>Google translate</h1>

      <Row>
        <Col>
          <LanguageSelector onChange={setFromLanguage}/>
          {fromLanguage}
        </Col>
        <Col>
          <Button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowIcon />
          </Button>
        </Col>
        <Col>
          <LanguageSelector onChange={setToLanguage}/>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
