import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const {
    filters: {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/*search*/}
          <div className="form-control">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="zoeken..."
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/*einde search*/}
          {/*categorien*/}
          <div className="form-control">
            <h5>Categorie</h5>
            <div>
              {categories.map((categorie, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    className={`${
                      category === categorie.toLowerCase() ? 'active' : null
                    }`}
                  >
                    {categorie}
                  </button>
                );
              })}
            </div>
          </div>
          {/*einde categorien*/}
          {/*bedrijven*/}
          <div className="form-control">
            <h5>Merk</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company"
            >
              {companies.map((company, index) => {
                return (
                  <option key={index} value={company}>
                    {company}
                  </option>
                );
              })}
            </select>
          </div>
          {/*einde bedrijven*/}
          {/*kleuren*/}
          <div className="form-control">
            <h5>Kleuren</h5>
            <div className="colors">
              {colors.map((clr, index) => {
                if (clr === 'Alles') {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="Alles"
                      className={`${
                        color === 'Alles' ? 'all-btn active' : 'all-btn'
                      }`}
                    >
                      Alle
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: clr }}
                    className={`${
                      color === clr ? 'color-btn active' : 'color-btn'
                    }`}
                    data-color={clr}
                    onClick={updateFilters}
                  >
                    {color === clr ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/*einde kleuren*/}
          {/*prijs*/}
          <div className="form-control">
            <h5>Prijs</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/*einde prijs*/}
          {/*verzenden*/}
          <div className="form-control shipping">
            <label htmlFor="shipping">Gratis verzending</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/*einde verzenden*/}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          Toon alles
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-slate-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-slate-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-slate-5);
  }
  .company {
    background: var(--clr-slate-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    box-shadow: 0px 0px 0px 1px black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-slate-5);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
    border: 1px black solid;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
