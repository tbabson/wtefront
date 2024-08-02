import styled from "styled-components"


const Wrapper = styled.div`
 background: var(--secondary-500);
 width: 100%;
 padding: 0rem 2rem 1rem; 

.form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
    width: 85%;
    margin: 0 auto;
    }

  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }

   @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .form-btn {
      grid-column: span 4;
      justify-self: center;
      width: 25%;
    }
   
  }

  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-btn {
      grid-column: span 6;
      justify-self: center;
      width: 25%;
    }
  }



`

export default Wrapper