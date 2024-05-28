import styled from 'styled-components'

const Wrapper = styled.div`
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