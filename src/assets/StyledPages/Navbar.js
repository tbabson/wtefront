import styled from 'styled-components'

const Wrapper = styled.nav`
background: var(--transparent-background);
.nav-center{
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    /* height:var(--nav-height); */
    display:flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo{
width: 200px;
height: auto;
}

.nav-links{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
}

.nav-link{
    font-weight: 500;
    color: var(--white);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: var(--letter-spacing)
}
.nav-link:hover{
    color: var(--primary-900)
}

.nav-link span{
    font-weight: 500;
    color: var(--primary-900);
    background-color: var(--white);
    padding: 0.4rem 1.5rem ;
    transition: var(--transition);
    letter-spacing: var(--letter-spacing);
    border-radius: var(--border-radius);
}
.nav-link span:hover{
   color: var(--white);
   background: var(--primary-900);
}

/* active */
.active{
    color: var(--secondary-900)
}
.active span{
   color: var(--secondary-900)
}

@media (min-width: 768px) {
    .nav-center{
    max-width: 95vw;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position:sticky;
    top: 0;
    z-index: 999;
}
.nav-links{
    flex-direction: row;
   }
}
`

export default Wrapper