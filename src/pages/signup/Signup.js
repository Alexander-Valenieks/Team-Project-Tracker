import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  const { signup, isPending, error } = useSignup()
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName, thumbnail)
  }

  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]
    console.log(selected)

    if (!selected) {
      setThumbnailError('Please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }
    if (selected.size > 100000) {
      setThumbnailError(`Image file size must be less than 100kb. If you don't have it, please use test account "user@project-tracker.com" password "qwerty"`)
      return
    }
    
    setThumbnailError(null)
    setThumbnail(selected)
    console.log('thumbnail updated')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Sign up</h2>
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
        <label>
          <span>Display name:</span>
          <input
            required
            type="text" 
            onChange={(e) => setDisplayName(e.target.value)} 
            value={displayName}
          />
        </label>
        <span>Profile thumbnail:</span>
        <label class="custom-file-upload">
        <span>please select an image</span>
          <input 
            required
            type="file"
            onChange={handleFileChange}
          />
          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </label>
          <div>
          {!isPending && <button className="auth-btn">Sign up</button>}
          {isPending && <button className="auth-btn" disabled>loading</button>}
          {error && <div className="error">{error}</div>}
          </div>
      </form>
      <div className='credentials'>© Aleksandrs Valenieks. All rights reserved.</div>
    </div>
  )
}
