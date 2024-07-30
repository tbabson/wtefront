import styled from 'styled-components'

const Wrapper = styled.nav`
  background: var(--transparent-background);
  position: relative;
  .nav-center {
    width: 80%;
    max-width: 80%;
    margin: 0 auto;
    padding: 1rem;
  }
 


  .nav-display {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
  }
  .logo {
    width: 200px;
    height: auto;
    margin-top: 0.5rem;
  }

@media (max-width: 800px){
.nav-center {
    width: 90%;
    max-width: 90%;
    margin: 0 auto;
    padding: 0.5rem;
  }
 .logo {
    width: 130px;
    height: auto;
    margin-top: 0.5rem;
  }
}

  .nav-toggle {
    font-size: 2rem;
    color: var(--primary-900);
    background: none;
    border: none;
    cursor: pointer;
    transition: var(--transition);
  }

.nav-links{
z-index: 1200;

}

a.nav-link{
      padding-bottom: 0.5rem;
      display:flex;
      justify-content: flex-end;
      
}

  .nav-toggle:hover {
    color: var(--primary-700);
  }
  .nav-links-container {
    /* height: 0; */
    overflow: hidden;
    transition: var(--transition);
    position: absolute;  // Change this from relative to absolute
    top: 100%;  // Position it right below the navbar
    left: 0;
    right: 30px;
    background: var(--transparent-background);  // Add background
    overflow: hidden;
    transition: var(--transition);
    max-height: 0;  // Change height to max-height
  }
  .show-menu {
    /* height: auto; */
    max-height: 300px;  // Adjust this value as needed
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }
  .nav-link {
    font-weight: 500;
    color: var(--white);
    transition: var(--transition);
    letter-spacing: var(--letter-spacing);
  }
  .nav-link:hover {
    color: var(--primary-900);
  }
  .nav-link span {
    font-weight: 500;
    color: var(--primary-900);
    background-color: var(--white);
    padding: 0.4rem 1.5rem;
    transition: var(--transition);
    letter-spacing: var(--letter-spacing);
    border-radius: var(--border-radius);
  }
  .nav-link span:hover {
    color: var(--white);
    background: var(--primary-900);
  }
  .active {
    color: var(--secondary-900);
  }
  .active span {
    color: var(--secondary-900);
  }


  @media (min-width: 800px) {
    .nav-toggle {
      display: none;
    }
    .nav-links-container {
      /* height: auto !important;
      z-index: 1050;
         display:flex;
      justify-content: flex-end;  */
      position: static;  // Reset position for larger screens
      max-height: none;  // Reset max-height
      overflow: visible;
      background: none;  // Remove background
      margin-top: 0;
      display: flex;
      justify-content: flex-end;
      margin-top: -3.5rem;
    }
    .nav-links {
      flex-direction: row;
      gap: 0.5rem;
    }
  }
`

export default Wrapper