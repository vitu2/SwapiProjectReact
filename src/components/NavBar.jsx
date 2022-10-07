import React from 'react'
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import './NavBar.css'

function NavBar() {
    return (
        <Menu fluid inverted className='Container-style'>
            <Container>

               <Link to='/'> <Menu.Item name='People' /> </Link> 
               <Link to='sobre'> <Menu.Item name='Sobre' /> </Link> 
                
            </Container>
        </Menu>
    )
}

export default NavBar