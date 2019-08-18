import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Collapse, CardBody } from 'reactstrap';
import expandData1 from './packages_static/package1';
import expandData2 from './packages_static/package2';
import expandData3 from './packages_static/package3';
import expandData4 from './packages_static/package4';
class Packages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: {}
        };
        this.toggleCard = this.toggleCard.bind(this);
    }
    toggleCard(e) {
        const id = e.target.id || '';
        this.setState({
            collapse: {
                ...this.state.collapse,
                [id]: !this.state.collapse[id]
            }
        });
    }
    render() {
        return (
            <div className={'packages-list'}>
                <Row>
                    <Col sm="6">
                        <Collapse isOpen={this.state.collapse['1']}>
                            <Card>
                                <CardBody>
                                    {expandData1()}
                                </CardBody>
                                <Button id='1' onClick={this.toggleCard}>Close</Button>
                            </Card>
                        </Collapse>
                        <Collapse isOpen={!this.state.collapse['1']}>
                            <Card body>
                                <CardTitle>3 Nights/4 days(BANGALORE-OOTY–MYSORE-BANGALORE)</CardTitle>
                                <CardText>
                                    <ul>
                                        <li>DAY 1: Bangalore-OOTY</li>
                                        <li>DAY 2: Ooty-Coonoor</li>
                                        <li>DAY 3: Ooty-Mysore</li>
                                        <li>DAY 4: Mysore-Bangalore</li>
                                    </ul>
                                </CardText>
                                <Button id='1' onClick={this.toggleCard}>Read more</Button>
                            </Card>
                        </Collapse>
                    </Col>
                    <Col sm="6">
                        <Collapse isOpen={this.state.collapse['2']}>
                            <Card>
                                <CardBody>
                                    {expandData2()}
                                </CardBody>
                                <Button id='2' onClick={this.toggleCard}>Close</Button>
                            </Card>
                        </Collapse>
                        <Collapse isOpen={!this.state.collapse['2']}>
                            <Card body>
                                <CardTitle>3 Nights/4 Days(COIMBATORE-OOTY-COONOOR-COIMBATORE)</CardTitle>
                                <CardText>
                                    <ul>
                                        <li>DAY 1: COIMBATORE-OOTY</li>
                                        <li>DAY 2: OOTY-PYAKARA</li>
                                        <li>DAY 3: OOTY</li>
                                        <li>DAY 4: OOTY-COONOOR-COIMBATORE</li>
                                    </ul>
                                </CardText>
                                <Button id='2' onClick={this.toggleCard}>Read more</Button>
                            </Card>
                        </Collapse>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <Collapse isOpen={this.state.collapse['3']}>
                            <Card>
                                <CardBody>
                                    {expandData3()}
                                </CardBody>
                                <Button id='3' onClick={this.toggleCard}>Close</Button>
                            </Card>
                        </Collapse>
                        <Collapse isOpen={!this.state.collapse['3']}>
                            <Card body>
                                <CardTitle>3 Nights/4 Days(OOTY-COONOOR)</CardTitle>
                                <CardText>
                                    <ul>
                                        <li>DAY 1: OOTY</li>
                                        <li>DAY 2: OOTY-PYAKARA</li>
                                        <li>DAY 3: OOTY-COONOOR</li>
                                        <li>DAY 4: OOTY</li>
                                    </ul>
                                </CardText>
                                <Button id='3' onClick={this.toggleCard}>Read more</Button>
                            </Card>
                        </Collapse>
                    </Col>
                    <Col sm="6">
                        <Collapse isOpen={this.state.collapse['4']}>
                            <Card>
                                <CardBody>
                                    {expandData4()}
                                </CardBody>
                                <Button id='4' onClick={this.toggleCard}>Close</Button>
                            </Card>
                        </Collapse>
                        <Collapse isOpen={!this.state.collapse['4']}>
                            <Card body>
                                <CardTitle>2 Nights/3 Days(OOTY-COONOOR)</CardTitle>
                                <CardText>
                                    <ul>
                                        <li>DAY 1: OOTY-COONOOR</li>
                                        <li>DAY 2: OOTY</li>
                                        <li>DAY 3: OOTY</li>
                                    </ul>
                                </CardText>
                                <Button id='4' onClick={this.toggleCard}>Read more</Button>
                            </Card>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        );
    };

}
export default Packages;