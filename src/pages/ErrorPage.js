import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>
          Dit magazijn is leeg. We helpen je graag de weg weer terug te vinden
          naar de winkel.
        </h3>
        <Link to="/" className="btn">
          Terug naar homepage
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-image: url('https://images.unsplash.com/photo-1417816491410-d61e1546e539?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
    color: var(--clr-slate-7);
  }
  h3 {
    text-transform: none;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--clr-slate-7);
  }
`;

export default ErrorPage;
