import styled from 'styled-components'

import { sizes } from 'src/values/dimens'

export const HomeStyle = styled.div`
  margin: 20px 5px;
  padding-left: 60px;
  padding-right: 60px;

  .checkbox__list {
    display: inline;
    justify-content: flex-start;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 1rem 2rem;
  }

  .checkbox {
    height: 50px;
    width: 48%;
    max-width: 50%;
    font-size: 16px;
  }

  .actions {
    margin: 30px auto;
    display: flex;
    justify-content: end;
  }

  span {
    font-family: 'Objective';
  }

  @media screen and (max-width: ${sizes.sm}) {
    padding: 25px;

    .checkbox__list {
      margin: 20px auto;
      padding: 1rem 2rem;
    }

    .checkbox {
      width: 100%;
      max-width: 100%;
    }

    .actions {
      display: grid;
      justify-content: center;
      gap: 10px;
    }
  }
`
