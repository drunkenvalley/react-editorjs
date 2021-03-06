import React from 'react'

import { Nav, NavItems } from 'Components/Header'
import { Footer, FooterItems } from 'Components/Footer'
import Authentication from 'Components/Firebase/Authentication'
import { Editor, Image } from 'Components/EditorJS'

function App () {
  return (
    <>
      <Nav>
        <NavItems>
          <a className="nav-link" aria-current="page"href="#splash">Link A</a>
        </NavItems>
      </Nav>

      <div className="flex-grow-1">
        <Editor tools={{ image: Image }} />
      </div>

      <Footer>
        <FooterItems>
          <a className="text-muted" href="https://github.com/drunkenvalley/drunkenvalley.com-react">
            <i className="bi bi-lg bi-github"></i>
          </a>
        </FooterItems>
        <Authentication />
      </Footer>
    </>
  )
}

export default App
