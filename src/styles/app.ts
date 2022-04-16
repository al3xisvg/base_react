import styled from 'styled-components'

import { sizes } from 'src/values/dimens'

export const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  @media screen and (min-width: ${sizes.md}) {
    max-width: 800px;
  }
`
