import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    text-align: center;
    font-size: 64px;
    margin: 2rem 0;
    font-weight: 800;
  }
`

export const MovieList = styled.ul`
  padding 0 1rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`
export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
  }
  span {
    font-weight: bold;
    font-size: 1.2rem;
  }

  a {
    transition: ease 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`

// -------------------------------- DETAILS PAGE STYLES  --------------------------------
