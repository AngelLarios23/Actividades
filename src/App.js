import './App.css';
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [cuestionario, setQuestionnaire] = useState({});
  const [isEnable, setIsEnable] = useState(true);

  const onChange = (e) => {
    e.preventDefault();
    const obj = cuestionario;
    obj[e.target.name] = e.target.value;
    setQuestionnaire(obj);
    {/*////////////////////// */}
    if (
      (obj.tech_1 && obj.tech_1 !== "") &&
      (obj.tech_2 && obj.tech_2 !== "") &&
      (obj.tech_3 && obj.tech_3 !== "") &&
      (obj.tech_4 && obj.tech_4 !== "") &&
      (obj.tech_5 && obj.tech_5 !== "") &&
      (obj.tech_6 && obj.tech_6 !== "") &&
      (obj.science_1 && obj.science_1 !== "") &&
      (obj.science_2 && obj.science_2 !== "") &&
      (obj.science_3 && obj.science_3 !== "") &&
      (obj.science_4 && obj.science_4 !== "") &&
      (obj.science_5 && obj.science_5 !== "") &&
      (obj.science_6 && obj.science_6 !== "") &&
      (obj.economia_1 && obj.economia_1 !== "") &&
      (obj.economia_2 && obj.economia_2 !== "") &&
      (obj.economia_3 && obj.economia_3 !== "") &&
      (obj.economia_4 && obj.economia_4 !== "") &&
      (obj.economia_5 && obj.economia_5 !== "") &&
      (obj.economia_6 && obj.economia_6 !== "") &&
      (obj.cultura_1 && obj.cultura_1 !== "") &&
      (obj.cultura_2 && obj.cultura_2 !== "") &&
      (obj.cultura_3 && obj.cultura_3 !== "") &&
      (obj.cultura_4 && obj.cultura_4 !== "") &&
      (obj.cultura_5 && obj.cultura_5 !== "") &&
      (obj.cultura_6 && obj.cultura_6 !== "") &&
      (obj.psych_1 && obj.psych_1 !== "") &&
      (obj.psych_2 && obj.psych_2 !== "") &&
      (obj.psych_3 && obj.psych_3 !== "") &&
      (obj.psych_4 && obj.psych_4 !== "") &&
      (obj.psych_5 && obj.psych_5 !== "") &&
      (obj.psych_6 && obj.psych_6 !== "") &&
      (obj.philosophy_1 && obj.philosophy_1 !== "") &&
      (obj.philosophy_2 && obj.philosophy_2 !== "") &&
      (obj.philosophy_3 && obj.philosophy_3 !== "") &&
      (obj.philosophy_4 && obj.philosophy_4 !== "") &&
      (obj.philosophy_5 && obj.philosophy_5 !== "") &&
      (obj.philosophy_6 && obj.philosophy_6 !== "") &&
      (obj.education_1 && obj.education_1 !== "") &&
      (obj.education_2 && obj.education_2 !== "") &&
      (obj.education_3 && obj.education_3 !== "") &&
      (obj.education_4 && obj.education_4 !== "") &&
      (obj.education_5 && obj.education_5 !== "") &&
      (obj.education_6 && obj.education_6 !== "") &&
      (obj.sports_1 && obj.sports_1 !== "") &&
      (obj.sports_2 && obj.sports_2 !== "") &&
      (obj.sports_3 && obj.sports_3 !== "") &&
      (obj.sports_4 && obj.sports_4 !== "") &&
      (obj.sports_5 && obj.sports_5 !== "") &&
      (obj.sports_6 && obj.sports_6 !== "")
    ) {
      setIsEnable(false);
    } else {
      setIsEnable(true);
    }
  };
  {/*////////////////////// */}

  return (
    <Container>
      {/*/////////////////////////////////////////////////////////*/}
      <Card >
        <Card.Body>
          <Card.Title>Tecnología y Sociedad</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>1. ¿Cómo crees que la inteligencia artificial cambiará el mercado laboral en los próximos 10 años?</Form.Label>
              <Form.Control onChange={onChange} name="tech_1" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>2. ¿Qué impacto tiene la tecnología en las relaciones interpersonales?</Form.Label>
              <Form.Control onChange={onChange} name="tech_2" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>3. Explica cómo las redes sociales han transformado el periodismo.</Form.Label>
              <Form.Control onChange={onChange} name="tech_3" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>4. ¿De qué manera los dispositivos móviles han cambiado la manera en que consumimos información?</Form.Label>
              <Form.Control onChange={onChange} name="tech_4" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>5. ¿Cómo influye la digitalización en el sector educativo?</Form.Label>
              <Form.Control onChange={onChange} name="tech_5" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>6. ¿Cuál es el rol de la ética en el desarrollo tecnológico?</Form.Label>
              <Form.Control onChange={onChange} name="tech_6" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      {/*/////////////////////////////////////////////////////////*/}
      <Card>
        <Card.Body>
          <Card.Title>Ciencia y Medio Ambiente</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>1. ¿Cómo crees que la ciencia puede contribuir a la conservación de especies en peligro de extinción?</Form.Label>
              <Form.Control onChange={onChange} name="science_1" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>2. Explica el papel de la energía renovable en la lucha contra el cambio climático.</Form.Label>
              <Form.Control onChange={onChange} name="science_2" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>3. ¿De qué manera la agricultura sostenible puede mitigar el impacto ambiental?</Form.Label>
              <Form.Control onChange={onChange} name="science_3" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>4. ¿Qué desafíos enfrenta la humanidad para lograr una economía circular?</Form.Label>
              <Form.Control onChange={onChange} name="science_4" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>5. ¿Qué papel tiene la biotecnología en la sostenibilidad ambiental?</Form.Label>
              <Form.Control onChange={onChange} name="science_5" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>6. ¿Cómo afecta la contaminación plástica a los ecosistemas marinos?</Form.Label>
              <Form.Control onChange={onChange} name="science_6" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      {/*/////////////////////////////////////////////////////////*/}

      <Card>
        <Card.Body>
          <Card.Title>Economía y Finanzas</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>1. ¿Cómo afecta la inflación al poder adquisitivo de los ciudadanos?</Form.Label>
              <Form.Control onChange={onChange} name="economia_1" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>2. Explica el impacto de la Revolución Industrial en la configuración de las sociedades modernas.</Form.Label>
              <Form.Control onChange={onChange} name="economia_2" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>3. ¿Cómo influyó la Guerra Fría en el desarrollo de la tecnología espacial?</Form.Label>
              <Form.Control onChange={onChange} name="economia_3" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>4. ¿Qué importancia tuvo el movimiento sufragista en la historia de los derechos humanos?</Form.Label>
              <Form.Control onChange={onChange} name="economia_4" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>5. ¿De qué manera los movimientos independentistas influyeron en la configuración de América Latina?</Form.Label>
              <Form.Control onChange={onChange} name="economia_5" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>6. ¿Qué efectos tuvo la caída del Muro de Berlín en la política internacional?</Form.Label>
              <Form.Control onChange={onChange} name="economia_6" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      {/* /////////////////////////////////////////////////////////*/}
      <Card>
        <Card.Body>
          <Card.Title>Cultura y Sociedad</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>1. ¿Cómo influyen las tradiciones culturales en la identidad de un país?</Form.Label>
              <Form.Control onChange={onChange} name="cultura_1" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>2. ¿Qué impacto tiene la globalización en la homogeneización cultural?</Form.Label>
              <Form.Control onChange={onChange} name="cultura_2" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>3. ¿Cuál es el papel de la música en la construcción de la identidad juvenil?</Form.Label>
              <Form.Control onChange={onChange} name="cultura_3" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>4. ¿De qué manera el cine refleja los problemas sociales de una época?</Form.Label>
              <Form.Control onChange={onChange} name="cultura_4" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>5. ¿Cómo contribuye la literatura a la difusión de ideas filosóficas y políticas?</Form.Label>
              <Form.Control onChange={onChange} name="cultura_5" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
            <Form.Group>
              <Form.Label>6. ¿Qué impacto tiene el arte urbano en la transformación de los espacios públicos?</Form.Label>
              <Form.Control onChange={onChange} name="cultura_6" as="textarea" placeholder="Escribe tu respuesta" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      {/*////////////////////// */}
      <Card>
  <Card.Body>
    <Card.Title>Psicología y Salud Mental</Card.Title>
    <Form>
      <Form.Group>
        <Form.Label>1. ¿Cómo influyen las redes sociales en la autoestima de los adolescentes?</Form.Label>
        <Form.Control onChange={onChange} name="psych_1" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>2. Explica la relación entre el estrés y las enfermedades físicas.</Form.Label>
        <Form.Control onChange={onChange} name="psych_2" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>3. ¿Qué factores psicológicos influyen en la toma de decisiones?</Form.Label>
        <Form.Control onChange={onChange} name="psych_3" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>4. ¿De qué manera la pandemia afectó la salud mental a nivel global?</Form.Label>
        <Form.Control onChange={onChange} name="psych_4" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>5. ¿Cómo se puede mejorar el bienestar emocional en el entorno laboral?</Form.Label>
        <Form.Control onChange={onChange} name="psych_5" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>6. ¿Qué impacto tiene la meditación en el control de la ansiedad?</Form.Label>
        <Form.Control onChange={onChange} name="psych_6" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
    </Form>
  </Card.Body>
</Card>

{/*////////////////////// */}
<Card >
  <Card.Body>
    <Card.Title>Filosofía y Ética</Card.Title>
    <Form>
      <Form.Group>
        <Form.Label>1. ¿Cuál es el significado de la "libertad" en la filosofía de Jean-Paul Sartre?</Form.Label>
        <Form.Control onChange={onChange} name="philosophy_1" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>2. ¿De qué manera la ética utilitarista influye en la toma de decisiones morales?</Form.Label>
        <Form.Control onChange={onChange} name="philosophy_2" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>3. Explica el concepto de "justicia" según John Rawls.</Form.Label>
        <Form.Control onChange={onChange} name="philosophy_3" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>4. ¿Qué impacto tiene el relativismo moral en la sociedad contemporánea?</Form.Label>
        <Form.Control onChange={onChange} name="philosophy_4" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>5. ¿Cómo ha evolucionado la concepción del "bien común" a lo largo de la historia de la filosofía?</Form.Label>
        <Form.Control onChange={onChange} name="philosophy_5" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>6. ¿Qué desafíos plantea la ética en el ámbito de la inteligencia artificial?</Form.Label>
        <Form.Control onChange={onChange} name="philosophy_6" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
    </Form>
  </Card.Body>
</Card>

{/*////////////////////// */}
<Card>
  <Card.Body>
    <Card.Title>Educación y Aprendizaje</Card.Title>
    <Form>
      <Form.Group>
        <Form.Label>1. ¿Qué papel juega la motivación intrínseca en el aprendizaje?</Form.Label>
        <Form.Control onChange={onChange} name="education_1" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>2. ¿Cómo pueden las nuevas tecnologías mejorar el proceso de enseñanza-aprendizaje?</Form.Label>
        <Form.Control onChange={onChange} name="education_2" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>3. ¿De qué manera el aprendizaje colaborativo fomenta el desarrollo de habilidades blandas?</Form.Label>
        <Form.Control onChange={onChange} name="education_3" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>4. ¿Cómo influyen los estilos de aprendizaje en la adquisición de conocimientos?</Form.Label>
        <Form.Control onChange={onChange} name="education_4" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>5. ¿Qué importancia tiene el desarrollo del pensamiento crítico en la educación?</Form.Label>
        <Form.Control onChange={onChange} name="education_5" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>6. ¿Cómo puede la educación emocional contribuir a la formación integral de los estudiantes?</Form.Label>
        <Form.Control onChange={onChange} name="education_6" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
    </Form>
  </Card.Body>
</Card>
{/*////////////////////// */}

<Card>
  <Card.Body>
    <Card.Title>Deportes y Salud</Card.Title>
    <Form>
      <Form.Group>
        <Form.Label>1. ¿Cómo influye la práctica regular de ejercicio en la salud mental?</Form.Label>
        <Form.Control onChange={onChange} name="sports_1" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>2. ¿Qué factores psicológicos afectan el rendimiento de los atletas de alto rendimiento?</Form.Label>
        <Form.Control onChange={onChange} name="sports_2" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>3. ¿Cómo ha evolucionado la tecnología en el análisis del rendimiento deportivo?</Form.Label>
        <Form.Control onChange={onChange} name="sports_3" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>4. ¿De qué manera la nutrición influye en el rendimiento deportivo?</Form.Label>
        <Form.Control onChange={onChange} name="sports_4" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>5. ¿Qué impacto tienen los deportes en el desarrollo social y emocional de los niños?</Form.Label>
        <Form.Control onChange={onChange} name="sports_5" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
      <Form.Group>
        <Form.Label>6. ¿Cómo afecta el dopaje a la integridad del deporte?</Form.Label>
        <Form.Control onChange={onChange} name="sports_6" as="textarea" placeholder="Escribe tu respuesta" />
      </Form.Group>
    </Form>
  </Card.Body>
</Card>
{/*////////////////////// */}

<Button disabled={isEnable}>Enviar</Button>
    </Container>
  );
}
export default App;
