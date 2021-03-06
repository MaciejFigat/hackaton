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
          <div className='navbar-brand'>AuthNotIncluded</div>
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
                  to='/vectors#partOne'
                  activeClassName='selected'
                >
                  Technologia
                </NavHashLink>
              </NavDropdown.Item>

              <NavDropdown.Item as='button'>
                {' '}
                <NavHashLink
                  smooth
                  to='/vectors#partTwo'
                  activeClassName='selected'
                >
                  Psychologia
                </NavHashLink>
              </NavDropdown.Item>

              <NavDropdown.Item as='button'>
                <NavHashLink
                  smooth
                  to='/vectors#partThree'
                  activeClassName='selected'
                >
                  Zaufanie
                </NavHashLink>
              </NavDropdown.Item>
            </NavDropdown>
            {/* end of the dropdown 1 */}

            {/* dropdown 2 */}
            <NavDropdown
              title='Kod'
              drop={'down'}
              id={'dropdown-button-drop-left'}
            >
              <NavDropdown.Item as='button'>
                {' '}
                <NavHashLink
                  smooth
                  to='/about/#partOne'
                  activeClassName='selected'
                >
                  Przyk??ad architektury
                </NavHashLink>
              </NavDropdown.Item>
              <NavDropdown.Item as='button'>
                {' '}
                <NavHashLink
                  smooth
                  to='/about/#partTwo'
                  activeClassName='selected'
                >
                  Przyk??ad architektury 2
                </NavHashLink>
              </NavDropdown.Item>
              <NavDropdown.Item as='button'>
                {' '}
                <NavHashLink
                  smooth
                  to='/about/#partThree'
                  activeClassName='selected'
                >
                  Przyk??ad architektury 3
                </NavHashLink>
              </NavDropdown.Item>
            </NavDropdown>
            {/* end of dropdown 2 */}

            {/* Dropdown 3*/}
            <NavDropdown
              title='Rozwi??zania'
              drop={'down'}
              id={'dropdown-button-drop-left'}
            >
              <NavDropdown.Item as='button'>
                <NavHashLink
                  smooth
                  to={'/solutions#partOne'}
                  activeClassName='selected'
                >
                  Przyk??ad rozwi??zania 1
                </NavHashLink>
              </NavDropdown.Item>
              <NavDropdown.Item as='button'>
                <NavHashLink
                  smooth
                  to={'/solutions#partOne'}
                  activeClassName='selected'
                >
                  Przyk??ad rozwi??zania 2
                </NavHashLink>
              </NavDropdown.Item>
              <NavDropdown.Item as='button'>
                <NavHashLink
                  smooth
                  to={'/solutions#partOne'}
                  activeClassName='selected'
                >
                  Przyk??ad rozwi??zania 3
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
