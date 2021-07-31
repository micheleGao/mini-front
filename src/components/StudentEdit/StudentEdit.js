import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useParams } from 'react-router';



const StudentEdit = () => {
    const [kitten, setKitten] = useState([]);
    const history = useHistory();
    const { id } = useParams();
    const API_ENDPOINT = `http://localhost:8000/students/${id}`;

    const [values, setValues] = useState({
        photo_url: '',
        nationality: '',
        name: '',
        quote: '',
    })
    console.log('hello');

    const _handleChange = (e) => {
        setValues((prevState) => {
            return {
                ...prevState,
                [e.target.id]: e.target.value,
            };
        });
    };

    const getKittens = async () => {
        //call our show api endpoint
        try {
            const response = await fetch(API_ENDPOINT);
            const data = await response.json();
            setValues({
                photo_url: data.photo_url,
                nationality: data.nationality,
                name: data.name,
                quote: data.quote,
            })
            setKitten(data)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getKittens();
    }, [])

    const _updateInfo = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'PUT',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 201) {
                getKittens();
                history.push(`/students/${id}`);
            } else {
                alert('Oooopppps.');
            }
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="card">
            <div>
                <h1>Edit page</h1>
            </div>
            <div className="kittens-container">
                <form onSubmit={_updateInfo}>
                    <div>
                        <label htmlFor="title">Name</label>
                        <input
                            type="text"
                            id="title"
                            value={values.name}
                            onChange={_handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='photo'>Photo_URl</label>
                        <input
                            type='text'
                            id='body'
                            value={values.photo_url}
                            onChange={_handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='Nationality'>Nationality</label>
                        <input
                            type='text'
                            id='body'
                            value={values.nationality}
                            onChange={_handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='quote'>Quote</label>
                        <input
                            type='text'
                            id='body'
                            value={values.quote}
                            onChange={_handleChange}
                            required
                        />
                    </div>
                    <input type='submit' value='update Student' />
                </form>

            </div>
        </div>
    )
}
export default StudentEdit;