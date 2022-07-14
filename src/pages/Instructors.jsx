import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const Instructors = () => {
  const navigate = useNavigate();
  const [instructors, setInstructors] = useState([]);
  

  const getInstructors = async() =>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    setInstructors(data);
     
  }
console.log(instructors);

useEffect(() => {
   getInstructors()
 
}, []);


  return (
    <div className='container text-center'>
      <h1>INSTRUCTORS</h1>
      <div className='row justify-content-center g4'>
        {instructors?.map((inst) => {
          const {id,name, username} =inst;
          return(
            <div 
            className='col-sm-12 col-md-6 col-lg-4' 
            key={id}
            // onClick={() => navigate(`/instructors/${id}`)}
            //! Relative path
            onClick={() => navigate(`${id}`, { state: inst})}
            //? Absolute path
            // onClick={() => navigate(`/instructors/${id}`, { state: inst })}
            sttyle ={{ cursor: 'pointer'}}
            >
              <img 
              src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`} alt={name} />
              <h6> {name} {username} </h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Instructors