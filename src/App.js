import './App.css';
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [cita, setCita] = useState({});
  const [isEnable, setIsEnable] = useState(true)

  const onChange = (e) =>{
    e.preventDefault();
    const obj = cita;
    obj[e.target.name] = e.target.value;
    setCita(obj)

    if ((cita.name_pet && cita.name_pet !== "") &&
      (cita.age_pet && cita.age_pet !== "") &&
      (cita.breed && cita.breed !== "") &&
      (cita.name_user && cita.name_user !== "") &&
      (cita.contact_number && cita.contact_number !== "") &&
      (cita.description && cita.description !== "") &&
      (cita.date && cita.date !== "")
    ) {

      setIsEnable(false)
      
    }
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Formulario para llevar cita medica a una mascota</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Nombre de la mascota:</Form.Label>
              <Form.Control onChange={onChange} name="name_pet" placeholder='Ingresa el nombre de tu mascota' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Edad de la mascota:</Form.Label>
              <Form.Control onChange={onChange} name="age_pet" type='number' placeholder='Ingresa la edad de tu mascota'/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Raza de la mascota:</Form.Label>
              <Form.Control onChange={onChange} name="breed" placeholder='Ingresa la raza de tu mascota'/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Nombre del propietario:</Form.Label>
              <Form.Control onChange={onChange} name="name_user" placeholder='Ingresa el nombre del propietario'/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Numero de contacto:</Form.Label>
              <Form.Control onChange={onChange} name="contact_number" type='number' placeholder='Ingresa el numero de contacto'/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Razon de la cita:</Form.Label>
              <Form.Control onChange={onChange} name="description" as="textarea" placeholder='Ingresa breve descripcion de los sintomas'/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Fecha de la cita:</Form.Label>
              <Form.Control onChange={onChange} name="date" type='date' />
            </Form.Group>
            <Button disabled ={isEnable}>Enviar</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default App;
