import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const TableComponent = () => {
    const [inputs] = useState({});
    return(
        <Container>
            <Row>
            <Col>
                <h1> Table </h1>
            </Col>
            </Row>
            <Row>
                <Col sm={24}>
                    <Table>
                        <thead>
                            <tr>
                            <th></th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Age</th>
                            <th>Gender</th>
                            </tr>
                        </thead>  
                        <tbody>
                            
                        </tbody>  
                     </Table>     
                </Col>
            </Row>
        </Container>
    )
}

export default TableComponent;