import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';

export default function StudentDetails() {

    const [cats, setCat] = useState([]);
    const { id } = useParams();
    const getStudentDetail = async () => {
        try {
            const response = await fetch(`http://localhost:8000/students/${id}`);
            const data = await response.json();
            console.log(data);
            if (response.status === 200) {
                setCat(data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getStudentDetail();
    }, []);

    console.log(cats)

    if (cats.length <= 0) {
        return 'loading....'
    }

    return (

        <Container>
            <h1>Student Details </h1>
            <CardGroup>
                <Row>
                    <Container
                        className='p-5 border rounded-3 bg-light'
                        key={cats.id}>
                        <p>{cats.name}</p>
                        <img src={cats.photo_url} width="300"></img>
                        <p>{cats.nationality}</p>
                        <p>{cats.quote}</p>
                        <div>
                            <Button variant='success'>Edit</Button>
                            <Button variant='danger'>Delete</Button>
                        </div>
                    </Container>
                    {cats.project.length > 0 &&
                        cats.project.map((project) => {
                            return (
                                <Container
                                    className='p-5 border rounded-3 bg-light'
                                    key={project.id}>
                                    <h4>{project.title}</h4>
                                    <p>{project.preview_url}</p>

                                    <div>
                                        <Link to="/students/:id/edit">
                                            <Button variant='secondary'>Edit</Button>
                                            <Button variant='danger'>Delete</Button>
                                        </Link>
                                    </div>

                                </Container>
                            );
                        })}
                </Row>
            </CardGroup>
        </Container>

    )
}