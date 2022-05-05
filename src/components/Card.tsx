import {Link, useParams} from 'react-router-dom'
import './../App.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Card = () => {
    const characters = useSelector((state: any) => state.characters.characters);
    const {id} = useParams();
    const [item, setItem] = useState<any>('empty')
    console.log('id',item)
    useEffect(()=>{
        if (id !== undefined) {
            characters.map((cardItem:any) => {
                if(cardItem.id == id) {
                    setItem(cardItem)
                }
            })
        }
    }, [id])

    return (
        <>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">
                        <img
                            alt=""
                            src="https://upload.wikimedia.org/wikipedia/ru/c/c8/Rick_and_Morty_logo.png"
                            width="150"
                            height="60"
                            className="d-inline-block align-top"
                        />{' '}

                    </Navbar.Brand>
                </Container>
            </Navbar>

            <div style={{textAlign: 'center'}} className="pt-3">
                <Link to="/">Go to main page</Link>
            </div>
            {item !== 'empty' ? (
                    <div className="card__section">
                        <div key={item.id} className="card">
                            <div className="card__name">
                                {item.name}
                            </div>
                            <div className="card__img">
                                <img src={item.image} alt=''/>
                            </div>
                            <p className="card__status" style={{
                                background: item.status === "Alive" ? "green" : item.status === "Dead" ? "red" : "grey",
                                color: "white",
                                fontWeight: 700
                            }}>
                                {item.status}
                            </p>
                            <div className="card__gender">
                                <b>Gender :</b> {item.gender}
                            </div>
                            <div className="card__location">
                                <b>Location :</b> {item.location.name}
                            </div>
                            <div className="card__origin">
                                <b>Origin :</b> {item.origin.name}
                            </div>
                            <div className="card__species">
                                <b>Species :</b> {item.species}
                            </div>
                        </div>
                    </div>)
                :
                (
                    <></>
                )
            }
        </>
    )
}

export default Card