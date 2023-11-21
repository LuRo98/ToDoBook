import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function GridAutoSizingColMixExample() {
  return (
    <Form>
      <Row className="align-items-center">
        <Col sm={4} className="my-1">
          <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control id="inlineFormInputName" placeholder="Tarea" />
        </Col>
        <Col sm={4} className="my-1">
          <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control id="inlineFormInputName" placeholder="Descripcion" />
        </Col>
        <Col xs="auto" className="my-1">
          <Form.Check
            type="checkbox"
            id="autoSizingCheck2"
            label="Prioridad"
          />
        </Col>
        <Col xs="auto" className="my-1">
          <Button type="submit">Crear</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default GridAutoSizingColMixExample;