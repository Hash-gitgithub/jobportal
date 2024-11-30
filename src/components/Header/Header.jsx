import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Wrapper>
        <div className='mt-10 flex flex-col gap-5 items-center justify-center text-white'>
            <h1 className='text-5xl font-bold'>Your next career move is here, start the search</h1>
            <p className='text-xl'>Elevate your career today!</p>
        </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`

.header-container {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  color: white; /* Adjust color as needed */
}

.header-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.header-description {
  font-size: 1.25rem;
}
`;

export default Header