import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NotFound from './NotFound';

const InstructorDetail = () => {
//! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
const { id } = useParams();

const navigate = useNavigate();
//! navigate ile gonderilen state(veriyi) yakalamak icin ise
//! useLocation Hook'u kullanilabilir.
// const location = useLocation();
// const inst = location.state;

  const [inst, setInst] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      if (!res.ok) {
        setError(true);
        throw new Error('Something went wrong');
      }
      return res.json()
    })
    .then((data) => setInst(data))
    .catch((err) => console.log(err));
  }, [id]);

console.log(inst);


  if (error) {
    return <NotFound/>
  }else if (!inst){
   return(
   <div className='text-center'>
      <h2>Data is Fetching</h2>
    </div>
    ) 
  }else {
    const {name,email,phone,username} =inst
     return (
      
    <div className="container text-center">
      <h3>{name} {username}</h3>
      <img
      className='w-50' 
      src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`} 
      alt={name} />
      <h4>{email}</h4>
      <h4>{phone}</h4>
      <div>
        <button 
        className='btn btn-success me-2'
        onClick={() => navigate('/')}
        >
          Home
        </button>
        <button 
        onClick={() => navigate(-1)}
        className='btn btn-warning'>
          Go Back
        </button>
      </div>
    </div>
  )
  }

 
}

export default InstructorDetail