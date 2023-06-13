import Container from "./Container";
import Form from "./Form";

function App() {
  return (
    <Container>
    <Form />
    <div class="link">
      <p>
        For more currency exchange information please check website:<br />
        <a
          class="link__website"
          href="https://www.x-rates.com/table/?from=GBP&amount=1"
          >"BRITISH POUND EXCHANGE RATES TABLE"
        </a>
      </p>
    </div>
  </Container>
  );
}

export default App;
