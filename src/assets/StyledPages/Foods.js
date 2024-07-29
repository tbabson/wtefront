import styled from 'styled-components'

const Wrapper = styled.div`
.hero{
    margin-top: -288px;
    min-height: 40vh;
    background-image: url("landing2.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    z-index: 500;
    background-attachment: fixed;
}

.hero-text{
    text-align: center;
    margin: 30rem auto 0 auto;    
    //width: 50vw;
    line-height: 1.5rem;

}

.hero-text h3{
    font-weight: 600;
    font-size: 1rem;
    //line-height: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--primary-900)
}

h3 span{
    color: var(--secondary-900)
}

h1 span{
    color: var(--primary-900)
}

.hero-text h1{
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 5rem;
    color: var(--secondary-900)
}

@media screen and (min-width: 576px) {
    .hero-text{
    margin-top: 25rem;
    width: 60vw;

}
}

////////////* tab DISPLAY *///////

@media screen and (min-width: 768px) {

.hero-text{
    margin-top: 40rem;
    min-width: 60vw
}

.hero-text h3{
    font-weight: 600;
    font-size: 2.75rem;
    margin-bottom: 1rem;
}


.hero-text h1{
    font-weight: 800;
    font-size: 5.5rem;
}
}


@media screen and (min-width: 820px) {
.hero-text{
    margin-top: 49rem;
    width: 75vw
}

.hero-text h3{
    font-weight: 600;
    font-size: 2.75rem;
    margin-bottom: 1rem;
}


.hero-text h1{
    font-weight: 800;
    font-size: 5.5rem;
}
}



////////////* desk DISPLAY */////// 
@media screen and (min-width: 992px){
  
.hero-text{
    margin-top: 35rem;
    //line-height: 1.5rem;
    /* margin-left: 8rem; */
}

.hero-text h3{
    font-weight: 600;
    font-size: 3.75rem;
    margin-bottom: 1rem;
}

.hero-text h1{
    font-weight: 800;
    font-size: 7.2rem;
}
}


/* HOW TO USE WEBSITE */

.how-to{
    background: var(--secondary-500);
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;
    text-align: center;
}

.how-to-icon{
margin: auto;
width: 95%;
margin: 1.5rem 0;
padding: 1rem;
}

.how-to-icon h3{
    font-size: 1.5rem;
    color: var(--secondary-900);
    
}

.how-icons{
    font-size: 3.5rem;
    color: var(--secondary-900);
    margin-bottom: 0.5rem;
}

////////////* DESKTOP DISPLAY *///////

@media (min-width: 768px){
.how-to{
    background: var(--secondary-500);
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-content: center;
    text-align: center;
}

.how-to-icon{
margin: auto;
width: 95%;
margin: 3rem 0;
padding: 1rem;
}

.how-to-icon h3{
    font-size: 2rem;
    color: var(--secondary-900);
    
}

.how-icons{
    font-size: 5rem;
    color: var(--secondary-900);
    margin-bottom: 0.5rem;
}


}


`

export default Wrapper