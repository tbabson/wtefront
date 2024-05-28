import styled from "styled-components"



const Wrapper = styled.div`
.hero{
    margin-top: -288px;
    min-height: 100vh;
    background: url("../Images/landing.jpg");
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
    margin-top: 30rem;
    margin-left: 3rem;
}

.hero-text h3{
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

h3 span{
    color: var(--primary-900)
}

h1 span{
    color: var(--primary-900)
}

.hero-text h1{
    font-weight: 800;
    font-size: 2.75rem;
}

@media (min-width: 510px) {
    .hero-text{
    margin-top: 25rem;
    margin-left: 3rem;
}
}

////////////* tab DISPLAY *///////

@media (min-width: 768px) {
.hero{
    margin-top: -120px;   
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    text-transform: uppercase;
}

.hero-text{
    margin-top: 28rem;
    margin-left: 5rem;
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


@media (min-width: 810px) {
.hero{
    margin-top: -120px;   
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    text-transform: uppercase;
}

.hero-text{
    margin-top: 28rem;
    margin-left: 5rem;
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
@media (min-width: 992px){
   .hero{
    margin-top: -120px;   
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    text-transform: uppercase;
}

.hero-text{
    margin-top: 20rem;
    margin-left: 8rem;
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

`

export default Wrapper