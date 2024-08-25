import React from 'react'
export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <li href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      </li>
      <span className="text-muted" style={{"textAlign" : "center","justifyContent":'center'}}>© 2021 GoFood, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><li className="text-muted" href="#"></li></li>
      <li className="ms-3"><li className="text-muted" href="#"></li></li>
      <li className="ms-3"><li className="text-muted" href="#"></li></li>
    </ul>
  </footer>
  )
}
