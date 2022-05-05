import {useState, FC, useCallback} from 'react';
import './../App.css'
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {useDispatch, useSelector} from "react-redux";
import Pagination from '@mui/material/Pagination'
import {useCharacterActions} from "../hooks/useCharacterActions";
import {styled} from "@mui/material";

const PaginationBlock = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
`
type Props = {
    data: any,
    loading: boolean
}
const RickAndMorty: FC<Props> = ({data, loading}) => {
    const totalPage = useSelector((state: any) => state.characters.totalPage)

    const [inputText, setInputText] = useState('');
    const [selectedPersons, setSelectedPersons] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);

    const [maleCheckbox, setMaleCheckbox] = useState(false);
    const [femaleCheckbox, setFemaleCheckbox] = useState(false);
    const [aliveCheckbox, setAliveCheckbox] = useState(false);
    const [deadCheckbox, setDeadCheckbox] = useState(false);
    const [unknownCheckbox, setUnknownCheckbox] = useState(false);
    const dispatch = useDispatch()
    const {fetchCharacters} = useCharacterActions()

    const loadNewPage = useCallback((currentPage: number) => {
        fetchCharacters(currentPage)
    }, [dispatch, currentPage]);
    const searchHandler = () => {
        setSelectedPersons(data.filter((item: any) => item.name.toLowerCase().includes(inputText.toLowerCase())));
    }

    const checkboxFilter = (type: any) => {
        if (type === "male") {
            setMaleCheckbox(!maleCheckbox);
            setFemaleCheckbox(false);
            setAliveCheckbox(false);
            setDeadCheckbox(false);
            setUnknownCheckbox(false);
            if (!maleCheckbox) {
                setSelectedPersons(data.filter((item: any) => item.gender === 'Male'))
            } else {
                setSelectedPersons(data)
            }
        } else if (type === "female") {
            setFemaleCheckbox(!femaleCheckbox);
            setMaleCheckbox(false);
            setAliveCheckbox(false);
            setDeadCheckbox(false);
            setUnknownCheckbox(false);
            if (!femaleCheckbox) {
                setSelectedPersons(data.filter((item: any) => item.gender === 'Female'))
            } else {
                setSelectedPersons(data)
            }
        } else if (type === "alive") {
            setAliveCheckbox(!aliveCheckbox);
            setDeadCheckbox(false);
            setUnknownCheckbox(false);
            setMaleCheckbox(false);
            setFemaleCheckbox(false);

            if (!aliveCheckbox) {
                setSelectedPersons(data.filter((item: any) => item.status === 'Alive'));
            } else {
                setSelectedPersons(data)
            }
        } else if (type === "dead") {
            setDeadCheckbox(!deadCheckbox);
            setUnknownCheckbox(false);
            setMaleCheckbox(false);
            setFemaleCheckbox(false);
            setAliveCheckbox(false);

            if (!deadCheckbox) {
                setSelectedPersons(data.filter((item: any) => item.status === 'Dead'));
            } else {
                setSelectedPersons(data)
            }

        } else if (type === "unknown") {
            setUnknownCheckbox(!unknownCheckbox);
            setDeadCheckbox(false);
            setMaleCheckbox(false);
            setFemaleCheckbox(false);
            setAliveCheckbox(false);


            if (!unknownCheckbox) {
                setSelectedPersons(data.filter((item: any) => item.status === 'unknown'));
            } else {
                setSelectedPersons(data)
            }
        }
    }


    return (
        <div className="films">
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
            </>
            <br/>

            <div className="search mb-3 d-flex" style={{width: 500, margin: '0 auto'}}>
                <Form.Control type="text" placeholder="Search for characters" className="me-4" value={inputText}
                              onChange={(e) => setInputText(e.target.value)}/>
                <Button variant="primary" type="submit" onClick={searchHandler}>
                    Submit
                </Button>
            </div>
            <div className="filters d-flex justify-content-between mb-3">
                <div className="filter__gender">
                    <p>Filter by gender</p>
                    <input type="radio" id="male" name="male" checked={maleCheckbox}
                           onChange={() => checkboxFilter("male")}/>
                    <label htmlFor="male" className="me-3">Male</label>
                    <input type="radio" id="Female" name="Female" checked={femaleCheckbox}
                           onChange={() => checkboxFilter("female")}/>
                    <label htmlFor="Female">Female</label>
                </div>
                <div className="filter__status">
                    <p>Filter by status</p>
                    <input type="radio" id="alive" name="alive" checked={aliveCheckbox}
                           onChange={() => checkboxFilter("alive")}/>
                    <label htmlFor="alive" className="me-3">Alive</label>
                    <input type="radio" id="dead" name="dead" checked={deadCheckbox}
                           onChange={() => checkboxFilter("dead")}/>
                    <label htmlFor="dead" className="me-3">Dead</label>
                    <input type="radio" id="unknown" name="unknown" checked={unknownCheckbox}
                           onChange={() => checkboxFilter("unknown")}/>
                    <label htmlFor="unknown">Unknown</label>
                </div>
            </div>
            <div className="cards">
                {
                    data.map((item: any) => {
                        return (
                            <Link to={`/card/${item.id}`} style={{textDecoration: 'none'}}>
                                <div key={item.id} className="card">
                                    <div className="card__img">
                                        <p className="card__status" style={{
                                            background: item.status === "Alive" ? "green" : item.status === "Dead" ? "red" : "grey",
                                            color: "white",
                                            fontWeight: 700
                                        }}>
                                            {
                                                item.status
                                            }
                                        </p>
                                        <img src={item.image} alt=""/>
                                    </div>
                                    <div className="card__name">
                                        {item.name}
                                    </div>
                                    <div className="card__location">
                                        <p>Last Location</p>
                                        {item.location.name}
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
            {/*<Pagination postsPerPage={postsPerPage} totalPosts={totalPage} paginate={paginate}/>*/}
            <PaginationBlock>
                <Pagination count={totalPage} color="primary" onChange={(event: any, value: number) => {
                    setCurrentPage(value)
                    loadNewPage(value)
                }} showFirstButton showLastButton/>
            </PaginationBlock>
        </div>
    )
}

export default RickAndMorty