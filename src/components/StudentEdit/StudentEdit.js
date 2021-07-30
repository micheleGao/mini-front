import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useParams } from 'react-router';



const StudentEdit = () => {
  const [kitten, setKitten] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  const getKittens = async () => {
    //call our show api endpoint
    const API_ENDPOINT_SHOW = `http://localhost:8000/students/${id}`;
    try {
      const response = await fetch(API_ENDPOINT_SHOW);
      const data = await response.json();
      setKitten(data)

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getKittens();
  }, [])

  const _handleDelete = async (e) => {
    const API_ENDPOINT_SHOW = `http://localhost:8000/students/${id}`
    if (window.confirm('Hey! you sure? Thats going to be gone forever!')) {
      try {
        const deletedBookmark = await fetch(API_ENDPOINT_SHOW, { method: 'DELETE' });
        if (deletedBookmark.status === 204) {
          getKittens();
          history.push('/');
        } else {
          alert('THERE SEEMS TO BE AN ISSUE....');
        }
      } catch (err) {
        console.log(err)
      }
    }
    return;
  }

  return (
    <div className="card">
      <div className="kittens-container">
      
      </div>
    </div>
  )
}
export default StudentEdit;