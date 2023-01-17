import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="over ons" />
      <Wrapper className="page section section-center">
        <img
          src={aboutImg}
          alt="een zitgedeelte in een woonkamer met een keuken op de achtergrond"
        />
        <article>
          <div className="title">
            <h2>Ons verhaal</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            consequuntur atque dignissimos est, corrupti adipisci velit autem
            officia nulla quidem deserunt fugiat iusto tenetur suscipit dolores
            praesentium, perferendis quos cupiditate ut laboriosam quae quia
            dicta. Architecto, sed! Modi, similique consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            odit consequatur id ducimus ut quaerat tempora magni quia nam ipsa?
            Excepturi ad nihil, amet porro dolorem praesentium voluptas enim
            rem!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-slate-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
