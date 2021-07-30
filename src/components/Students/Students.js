import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';

export default function Students() {
    const [students, setStudents] = useState([]);
    const getStudentsIndex = async () => {
        try {
            const response = await fetch('http://localhost:8000/students/');
            const data = await response.json();
            console.log(data);
            setStudents(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getStudentsIndex();
    }, []);

    if (students.length <=0){
        return "Loading..."
    }


    return (
        <Container>
            <h1>Students</h1>
            <CardGroup>
                <Row>
                    {students && students.map((student) => {
                        return (
                            <Col md={3}  md={3} key={student.id}>
                                <Link
                                    to={`students/${student.id}`}
                                    style={{ color: 'black', textDecoration: 'none' }}>
                                    <Card>
                                        <Card.Img
                                            variant='top'
                                            src={student.photo_url}
                                        />
                                        <Card.Body>
                                            <Card.Title>{student.name}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </CardGroup>
        </Container>
    )
}