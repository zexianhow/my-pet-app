import { useState } from 'react'

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({ email: "", password: "", name: "" })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert("Form captured (hardcoded, no backend): \n" + JSON.stringify(form, null, 2))
  }

  return (
    <div className="page">
      <div className="form-card">
        <h2>{isLogin ? "Member Login" : "Sign Up New Member"}</h2>
        <button onClick={() => setIsLogin(!isLogin)}>
          Switch to {isLogin ? "Sign Up" : "Login"}
        </button>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />
          )}
          <input
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
