import React from 'react'

function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-white text-primary diaply-flex justify-content-between p-1">
                <div className="">
                    <a className="navbar-brand" href="/" style={{color:"#3981F9"}}>
                        <img src="data:image/png;base64,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" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                        Resume Builder
                    </a>
                </div>
                <div className="">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link active " href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/template">Templates</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/profile">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-disabled="true">My Resumes</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar