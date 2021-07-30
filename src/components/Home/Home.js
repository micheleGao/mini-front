import React from 'react';
import { Container, Image } from 'react-bootstrap';

export default function Home(){
    return(
        <Container className='p-5 border rounded-3 bg-light'>
			<h1>Mini Cat Camp</h1>
			<Image
				rounded
				fluid
				src='https://i.pinimg.com/originals/90/e5/14/90e514e474732a947aaf278738126b59.jpg'
			/>
		</Container>

    )
}
