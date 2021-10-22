import React, { useState } from 'react'
import { NavHashLink } from 'react-router-hash-link'
import { NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
interface NavProps {}

const Navigation: React.FC<NavProps> = () => {
  const [menuOpen, setMenuOpen] = useState<string>('')
  const menuHandler = () => {
    if (menuOpen === '') {
      setMenuOpen('show')
    } else {
      setMenuOpen('')
    }
  }

  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top'>
      <div className='container'>
        {' '}
        <LinkContainer to={'/home'}>
          <div className='navbar-brand'>!smishing</div>
        </LinkContainer>
        <button className='navbar-toggler' type='button' onClick={menuHandler}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen}`} id='navmenu'>
          <ul className='navbar-nav ms-auto'>
            {/* Dropdown 1 */}
            <NavDropdown
              title='Wektory ataku'
              drop={'down'}
              id={'dropdown-button-drop-left'}
            >
              <NavDropdown.Item as='button'>
                {' '}
                <NavHashLink
                  smooth
                  to='/hooks#partOne'
                  activeClassName='selected'
                >
                  1
                </NavHashLink>
              </NavDropdown.Item>

              <NavDropdown.Item as='button'>
                {' '}
                <NavHashLink
                  smooth
                  to='/hooks#partOne'
                  activeClassName='selected'
                >
                  2
                </NavHashLink>
              </NavDropdown.Item>

              <NavDropdown.Item as='button'>
                <NavHashLink
                  smooth
                  to='/hooks#partTwo'
                  activeClassName='selected'
                >
                  3
                </NavHashLink>
              </NavDropdown.Item>
            </NavDropdown>
            {/* end of the dropdown 1 */}

            {/* dropdown 2 */}
            <NavDropdown
              title='Wyzwania'
              drop={'down'}
              id={'dropdown-button-drop-left'}
            >
              <NavDropdown.Item as='button'>
                {' '}
                <NavHashLink
                  smooth
                  to='/props/#basicOne'
                  activeClassName='selected'
                >
                  1
                </NavHashLink>
              </NavDropdown.Item>
              <NavDropdown.Item as='button'>
                {' '}
                <NavHashLink
                  smooth
                  to='/props/#basicFour'
                  activeClassName='selected'
                >
                  2
                </NavHashLink>
              </NavDropdown.Item>
            </NavDropdown>
            {/* end of dropdown 2 */}

            {/* Dropdown 3*/}
            <NavDropdown
              title='Rozwiązania'
              drop={'down'}
              id={'dropdown-button-drop-left'}
            >
              <NavDropdown.Item as='button'>
                <NavHashLink
                  smooth
                  to={'/misc#partOne'}
                  activeClassName='selected'
                >
                  1
                </NavHashLink>
              </NavDropdown.Item>
              <NavDropdown.Item as='button'>
                <NavHashLink
                  smooth
                  to={'/misc#partThree'}
                  activeClassName='selected'
                >
                  2
                </NavHashLink>
              </NavDropdown.Item>
              <NavDropdown.Item as='button'>
                <NavHashLink
                  smooth
                  to={'/misc#partFour'}
                  activeClassName='selected'
                >
                  3
                </NavHashLink>
              </NavDropdown.Item>
            </NavDropdown>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navigation
