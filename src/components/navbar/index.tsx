import { Badge, Button } from 'src/material/components'
import { ShoppingCartIcon } from 'src/material/icons'

import { NavbarStyle, ToolbarStyle } from './styles'

const Navbar = () => {
  return (
    <NavbarStyle position="static">
      <ToolbarStyle variant="dense">
        <div className="nav__left">
          <a href="/">
            <img src="logos/logo.png" width="50" alt="Zinout Culture" />
          </a>
        </div>
        <h1>Texto</h1>
        <div className="nav__middle">
          <Button variant="contained" color="secondary">
            Hola
          </Button>
        </div>
        <div className="nav__right">
          <div className="cart__icon">
            <Badge badgeContent={1} color="secondary">
              <ShoppingCartIcon style={{ color: 'black' }} />
            </Badge>
          </div>
        </div>
      </ToolbarStyle>
    </NavbarStyle>
  )
}

export default Navbar
