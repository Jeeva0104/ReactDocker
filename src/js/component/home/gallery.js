import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Collapse, CardBody } from 'reactstrap';
export default class Gallery extends React.Component {
    render() {
        return (
            <div className={"gallery_container"} style={{ padding: '30px' }}>
                <h1 className='lined_heading'><span>Gallery</span></h1>
                <Row>
                    <Col sm="3 p-1" >
                        <img src="src/assests/gallery/Room-1.jpg" width="100%"></img>
                    </Col>
                    <Col sm="3 p-1">
                        <img src="src/assests/gallery/Room-2.jpg" width="100%"></img>
                    </Col >
                    <Col sm="3 p-1">
                        <img src="src/assests/gallery/Room-3.jpg" width="100%"></img>
                    </Col>
                    <Col sm="3 p-1">
                        <img src="src/assests/gallery/Room-4.jpg" width="100%"></img>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col sm="3 p-1">
                        <img src="src/assests/gallery/Room-5.jpg" width="100%"></img>
                    </Col>
                    <Col sm="3 p-1">
                        <img src="src/assests/gallery/Buiding-view.jpg" width="100%"></img>
                    </Col >
                    <Col sm="3 p-1">
                        <img src="src/assests/gallery/Room-7.jpg" width="100%"></img>
                    </Col>
                    <Col sm="3 p-1">
                        <img src="src/assests/gallery/Room-6.jpg" width="100%"></img>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col sm="3 p-1">
                        <img src="src/assests/gallery/Reception-1.jpg" width="100%" height="95%"></img>
                    </Col>
                    <Col sm="3 p-1">
                        <img src="src/assests/gallery/Reception-2.jpg" width="100%"></img>
                    </Col >
                    <Col sm="3 p-1">
                        <img src="src/assests/gallery/Passage-2.jpg" width="100%"></img>
                    </Col>
                    <Col sm="3 p-1">
                        <img src="src/assests/gallery/Room-8.jpg" height="95%" width="100%"></img>
                    </Col>
                </Row>
            </div>
        )
    }
}