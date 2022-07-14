import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import { List, HouseDoor, Person } from 'react-bootstrap-icons';
// import Providers from 'next-auth/providers'

// import { useSession } from "next-auth/react"
import {
    signIn,
    signOut,
    useSession
} from "next-auth/react"

// import { useSession } from "next-auth/react"





export default function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className='w-100 position-fixed top-0  end-0 d-flex justify-content-between  bg-dark pt-3 pb-2 px-2'  style={{zIndex:99}}>
                <Link href="/">
                    <a className="cursor-pointer">
                        <HouseDoor color="royalblue" size={25} />
                    </a>
                </Link>

                <Link href="/login">
                    <a className="cursor-pointer">
                        <Person color="royalblue" size={25} />
                    </a>
                </Link>

                <Button variant="outline-primary" onClick={handleShow}>
                    <List color="royalblue" size={25} />
                </Button>
            </div>


            <Offcanvas show={show} onHide={handleClose}  style={{zIndex:9999}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0 m-0">
                    <ol className="list-group list-group-numbered">
                        <Link href="/planning" onClick={handleClose}>
                            <a>
                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start border-0">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Urgence Immediate</div>
                                        Visualiser les urgence non pris en charges.
                                    </div>
                                    <span className="badge bg-primary rounded-pill">14</span>
                                </li>
                            </a>

                        </Link>
                        <Link href="/etudes" onClick={handleClose}>
                            <a>
                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start border-0">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Etude en cours</div>
                                        Affichez la liste des études mediale en cour.
                                    </div>
                                    <span className="badge bg-primary rounded-pill">4</span>
                                </li>
                            </a>

                        </Link>
                        <li className="list-group-item d-flex justify-content-between align-items-start border-0">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Mon plannings</div>
                                Consultez votre plannings et les détail de la journée
                            </div>
                            <span className="badge bg-primary rounded-pill">2</span>
                        </li>
                    </ol>
                    <p className='my-4'>
                        {'L\'application des pro de la santé '}
                    </p>

                    <div className="p-5 d-flex justify-content-center">
                        <button className='btn btn-outline-secondary'>
                            Mon compte

                        </button>
                    </div>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}