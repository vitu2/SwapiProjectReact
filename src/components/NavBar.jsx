import React from 'react'
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <Menu inverted className='Container-style'>
            <Container>

               <Link to='/'> <Menu.Item name='API Swapi' /> </Link> 
               <Link to='people'> <Menu.Item name='people' /> </Link> 
                
            </Container>
        </Menu>
    )
}

export default NavBar