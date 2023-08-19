import React, { useState } from 'react';
import './registeration_fir.css'
import { Link } from 'react-router-dom';

function Registeration_fir() {
  const [fname, setfName] = useState("");
  const [mname, setmName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [age,setAge] = useState("");
  const [mobile,setMobile] = useState("");
  const [aadhar,setAadhar] = useState("");
  const [selectedGender, setSelectedGender] = useState('');
  const [address ,setAddress] = useState("");
  const [selectedCitizen ,setSelectedCitizen] =useState("");
  const [pswd,setPassword] = useState("");
  const [cpswd,setConfirmPassword] = useState("");

  const handleChange = (event) => {
    setSelectedGender(event.target.value);
    setSelectedCitizen(event.target.value);
  };

  const validatePassword = () => {
    if (pswd !== cpswd) {
      return "Passwords don't match";
      
    } else {
      return '';
    }
  };

  const handleclear = ()=>{
    setfName("");
    setmName("");
    setlName("");
    setEmail("");
    setAadhar("");
    setAge("");
    setAddress("");
    setMobile("");
    setPassword("");
    setConfirmPassword("");
    setSelectedCitizen("");
    setSelectedGender("");
  }

  const [showRegistration, setShowRegistration] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onNextPage = (event) => {
    event.preventDefault();
    if (!fname || !email || !mobile || !aadhar || !address || !pswd || !cpswd) {
      alert("Please fill in all the required fields");
      return;
    }
  
    // Check if passwords match
    if (pswd !== cpswd) {
      alert("Passwords don't match");
      return;
    }
    if (!/^\d{10}$/.test(mobile)) {
      alert('Phone number must be 10 digits');
    }
    if (!/^\d{12}$/.test(aadhar)) {
      alert('Aadhar number must be 12 digits');
  
    }
    if(!/\S+@\S+\.\S+/.test(email)){
      alert('Email must be in right format');
    }
    if(!/^[a-zA-Z ]+$/.test(fname)){
      alert('Name must be in right format');
    }
    if(age > 150 ){
      alert("Please enter a valid age");
    }
    if(age <18){
      alert("For FIR registeration your age should be greater than 18");
    }
    else{
      setShowRegistration(false);
      setCurrentPage(2);
    }
    
  };
  const onPrevPage =() =>{
    setShowRegistration(true);
    setCurrentPage(1);
  }

  return (
    <>
    {showRegistration && (
    <form className='register'>
                <h2>Create Account to Register</h2>
                <label>First Name:<span>*</span></label>
                <input type="text" value={fname} onChange={(e) => setfName(e.target.value)} required/>
                <br />

                <label>Middle Name:</label>
                <input type="text" value={mname} onChange={(e) => setmName(e.target.value)} />
                <br />

                <label>Last Name:</label>
                <input type="text" value={lname} onChange={(e) => setlName(e.target.value)} />
                
                <br/>
                <label> Gender:<span>*</span></label>
                <select value={selectedGender} onChange={handleChange}>
                  <option value="">--Please choose an option--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select><br/>

                <label>Age:<span>*</span></label>
                <input type='number' value={age} onChange={(e)=> setAge(e.target.value)} maxLength="150" required/>
                <br/>

                <label>Email:<span>*</span></label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                <br/>

                <label>Mobile No.:<span>*</span></label>
                <input type='tel' value={mobile} onChange={(e)=>setMobile(e.target.value)} pattern='\d*' minLength="10" maxLength="10" required />
                <br/>

                <label>Aadhar No.:<span>*</span></label>
                <input type='tel' value={aadhar} onChange={(e)=>setAadhar(e.target.value)} pattern='\d*' minLength="12" maxLength="12" required/>
                <br/>

                <label>Address:<span>*</span></label>
                <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)} required/>
                <br/>

                <label>Citizen:<span>*</span></label>
                <select value={selectedCitizen} onChange={handleChange}>
                  <option value="">--Please choose an option--</option>
                  <option value="up">U.P.</option>
                  <option value="nonup">Non U.P.</option>
                </select>
                <br/>

                <label>Password:<span>*</span></label>
                <input type='password' value={pswd} onChange={(e)=>setPassword(e.target.value)} required/>
                <br/>

                <label>Confirm Password:<span>*</span></label>
                <input type='password' value={cpswd} onChange={(e)=>setConfirmPassword(e.target.value)} onBlur={validatePassword} required/>
                <br/>
                {cpswd && validatePassword() && (
                    <span className="error">{validatePassword()}</span>
                )}

                <div className='register_btn'>
                    <Link to='/'><button>Back</button></Link>
                    <button onClick={handleclear}>Clear</button>
                    <button onClick={onNextPage} >Next</button>
                </div>
                

        </form>
    )}

    {!showRegistration && (
        <div className='register_next'>
          <h2>More Details to register FIR</h2>
          <div>
          <button onClick={onPrevPage}>Prev</button>
          <button disabled={currentPage === 2}>Next</button>
        </div>
        </div>
    )}


        
    </>
  )
}

export default Registeration_fir
