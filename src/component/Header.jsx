import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const [inp, setSearch] = useState()
  const [searchstate, setSearchState] = useState(null)
  const [moviSearch, setmovirSearch] = useState(null)
  const [personSearch, setPersonSearch] = useState(null)
  const searchF = async () => {
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7&'
    let seacrData = await axios({
      url: `https://api.themoviedb.org/3/search/multi?api_key=${apikey}&language=ru-RU&query=${inp}&page=1&include_adult=false`
    })

    // console.log(seacrData, 'search');
    // setSearchState(seacrData.data.results)

    if (seacrData != null) {
      setSearchState(seacrData.data.results)
    let movie = seacrData.data.results.filter(i => i.media_type  == 'movie'  )
    setmovirSearch(movie)
    }
    let person = seacrData.data.results.filter(i => i.media_type  == 'person'  )
   setPersonSearch(person)
    }
// console.log(personSearch, 'person');
  


  return (
    <div>
    <Navbar data-aos="zoom-out" style={{ "background": "#0d253f" }} expand="lg">
      <Container >
        <Navbar.Brand style={{ "color": "white" }} href="#">
         <h4> TMDB</h4>
        </Navbar.Brand>

        <Navbar.Toggle className='bg-white' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto  my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{ "color": "white" }} href="/">
              <h5>главное</h5>
            </Nav.Link>
            <Nav.Link style={{ "color": "white" }} href="/popular">
              <h5>популярные</h5>
            </Nav.Link>

            <Nav.Link style={{ "color": "white" }} href="/top">
              <h5>лучшие</h5>
            </Nav.Link>
            <Nav.Link style={{ "color": "white" }} href="/person">
              <h5>люди</h5>
            </Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => { setSearch(e.target.value) }}
              onInput = {searchF}
            />
            {/* <Button onClick={searchF} variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {searchstate != null ? <>
    <div className="col-lg-12 seacrh ">
       
       
        { personSearch != null ? personSearch.map(item =>  <> 
         <h6 className='my-3' > <i class="fa-solid fa-user mx-3 "></i> <a href={"/persondetail/"+item.id}>  {  item.name} </a></h6> 
         </> ):<></> }
        { moviSearch != null ?
        moviSearch.map(i=> 
        <> 
       <h6  className='my-3' ><i class=" mx-3 fa-solid fa-video"></i> <a href={"/detail/"+i.id}>{ i.title}</a>  </h6> 
        
         </>) : <></> }
 
    </div>
    </> :<></>}
    </div>
  )
}

export default Header 