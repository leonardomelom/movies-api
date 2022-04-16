import styled from 'styled-components'

export const Container = styled.div`
  padding: 5rem;
  h1 {
    text-align: center;
    font-size: 32px;
    margin: 1rem 0;
    font-weight: 800;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 300px;
    border-radius: 0.5rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 60%;
  }
  button {
    background: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    color: white;
    padding: 0.8rem 2rem;
    font-size: 100%;
    transition: all 0.4s;
    margin: 2rem 0;
    &:hover {
      background: #5848c2;
    }
  }

  span {
    line-height: 1.5rem;
    margin: 1rem 0;
    font-size: 1rem;
  }

  .release-date {
    opacity: 0.7;
  }

  @media only screen and (max-width: 868px) {
    padding: 1rem;
    h1 {
      font-size: 2rem;
    }
    .movie {
      flex-direction: column;
    }
    .details {
      margin-left: 0;
      max-width: 80%;
    }
  }
`
