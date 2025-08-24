//rfce short-key
import React from 'react'
//impt short-key
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//a tage ni jgiyare 'Link' tage add larva no and herf ni jgiyare 'to' tage 

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="/">{props.title}</a> */}
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/about">{props.AboutText}</a> */}
                            <Link className="nav-link" to="/about">{props.AboutText}</Link>
                        </li>
                    </ul>

                    <div className="d-flex">
                        <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-dark rounded mx-2" onClick={() => { props.toggleMode('dark') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-ligth rounded mx-2" onClick={() => { props.toggleMode('light') }} style={{ height: '30px', width: '30px', cursor: 'pointer',border:'solid black' }}></div>
                    </div>

                    {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" onClick={() => { props.toggleMode(null) }} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}



Navbar.prototype = {
    title: PropTypes.string.isRequired,
    AboutText: PropTypes.string.isRequired
}

// Navbar.defaultProps={
//     title:'Set titele here',
//     AboutText:'About Us'
// }
