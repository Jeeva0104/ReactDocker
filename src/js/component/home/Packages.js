import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
class Packages extends React.Component {

    render() {
        return (
            <div className={'packages-list'}>

                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>3NIGHT-4DAYS _COIMBATORE-OOTY-COONOOR-COIMBATORE</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    };

}
export default Packages;