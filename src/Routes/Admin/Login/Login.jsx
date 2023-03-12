import { useState } from 'react';

const Login = () => {
  const [payload, setPayload] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPayload({
      ...payload,
      [name]: value,
    });
  };

  return (
    <div className='container h-screen mx-auto flex justify-center items-center'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>Login Discap</h2>
          <p>Acceso al sistema administrador</p>
          <form className='flex flex-col gap-3 my-5'>
            <input
              type='email'
              name='email'
              placeholder='Ingrese el correo'
              className='input input-bordered w-full max-w-xs'
              onChange={handleInputChange}
            />
            <input
              type='password'
              name='password'
              placeholder='Ingrese password'
              className='input input-bordered w-full max-w-xs'
              onChange={handleInputChange}
            />
            <div className='card-actions justify-end mt-5'>
              <button
                className='btn btn-outline w-full'
                disabled={!payload.email || !payload.password}
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
