import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const FooterComponent = () => {
    return (
        <>
        <div className='container-fluid bg-danger'>
        <Card className='bg-secondary m-1'>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush my-5">
                    <ListGroup.Item className='bg-danger'>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className='bg-success'>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className='bg-danger'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}
export default FooterComponent;