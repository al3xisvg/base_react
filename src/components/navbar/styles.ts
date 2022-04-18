import styled from 'styled-components'
import { AppBar, Toolbar } from 'src/material/components'

export const NavbarStyle = styled(AppBar)`
  padding: 0 20px;
`

export const ToolbarStyle = styled(Toolbar)`
  .nav__left {
    flex: 1;
  }

  .nav__middle {
    color: grey;
    flex: 1;
  }

  .nav__right {
    text-align: right;
    flex: 1;
  }
`
