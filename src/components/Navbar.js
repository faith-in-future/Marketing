import React from 'react'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark " style={{"backgroundColor" : "black"}}>
  <div className="container-fluid">
    <a className="navbar-brand fs-1 fst-italic" to="/">Faith in Future</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav p-3 fs-4">
        <a className="nav-link active" aria-current="page" to="/">Home</a>
        <a className="nav-link" to="/login">About</a>
        <a className="nav-link" to="/">Courses</a>
        <a className="nav-link" to="/">Login</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
