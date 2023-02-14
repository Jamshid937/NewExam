import React, { useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';





function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [inputErr, setInputErr] = useState(false);
    const [inputErr2, setInputErr2] = useState(false);


    useEffect(() => {
        const getLocal = JSON.parse(localStorage.getItem("key"))
        console.log(getLocal);
        if (getLocal === 1) {
            navigate('/admin')
        }
      }, [])
    

    function LoginFunc(evt) {
        evt.preventDefault();
        let data = {
            email: emailRef.current.value.trim(),
            password: passwordRef.current.value.trim(),
        }

        if (!data.email) {
            setInputErr(true)
            return;
        } else if (!data.password) {
            setInputErr2(true)
            return;
        }

        localStorage.setItem("key", '1');
        navigate('/admin')
    }
    function InputFunc() {
        setInputErr(false)
        setInputErr2(false)
    }
  return (
    <>
        <main className="login_main">
        <form onSubmit={LoginFunc} className="login_form">
                    <input
                        onChange={InputFunc}
                        ref={emailRef}
                        className={inputErr && "inputError"}
                        type="text"
                        placeholder='Your Email'
                    />
                    <input
                        onChange={InputFunc}
                        ref={passwordRef}
                        className={inputErr2 && "inputError"}
                        type="password"
                        placeholder='Your Password'
                    />
                    <button type='submit' className='modal_edit'>Add</button>
                </form>
        </main>
    </>
  )
}

export default Login;