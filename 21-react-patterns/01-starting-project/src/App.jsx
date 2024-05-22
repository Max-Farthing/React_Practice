import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <h2>Why work with us?</h2>
      <Accordion className="accordion">
        <Accordion.Item
          className="accordion-item"
        >
          <Accordion.Title className="accordion-item-title" id="experience">
            We have 20 years of experience
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content" id="experience">
            <article>
              <p>You cant go wrong with us</p>
              <p>
                We are in the business of planning vacation trips
              </p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item
          className="accordion-item"
        >
          <Accordion.Title className="accordion-item-title" id="local-guides">
            We are working with local guides
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content" id="local-guides">
            <article>
              <p>We are not doing this alone</p>
              <p>
                We work with local guides for a good vacation
              </p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </main>
  );
}

export default App;
