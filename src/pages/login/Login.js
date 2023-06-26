import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import './Login.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isPending, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="auth-form">
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          required 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />
      </label>
      {!isPending && <button className="auth-btn">Login</button>}
      {isPending && <button className="auth-btn" disabled>loading</button>}
      {error && <div className="error">{error}</div>}
      <Popup trigger={<button className="modal-window">?</button>} position="right center" >
        <div className='footer'>
          <p className="footer-header">Login as unknown user:</p>
          <p className="footer-text">user@project-tracker.com | pw: qwerty</p>  
        </div>
      </Popup>    
    </form>
    <div className='credentials'>© Aleksandrs Valenieks</div>
  </div>
  )
}
