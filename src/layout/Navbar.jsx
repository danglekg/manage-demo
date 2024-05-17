import React from 'react'
import { Link } from 'react-router-dom'
//go rfc la no tu dong tao funcion luon
export default function Navbar() {
  return (
    //cai nav nay tu nav den </nav> len gg go bootstrap xong tim navbar roi chep cai code html vao
    //C+F de chon tat ca tu giong tu da to den
    //cai dong nay de tao cai thanh bar o tren
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>
      Manage Staff
    </Link>
    {/* <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    
    <Link className="btn btn-outline-light" to="/adduser"> Add User</Link>
    </div>
    </nav>
    </div>
  )
}
// tao button trong day no chi hien tren thanh bar thoi