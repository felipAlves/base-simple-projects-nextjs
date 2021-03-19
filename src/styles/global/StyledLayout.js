import styled from 'styled-components'

export const StyledLayout = styled.main`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > header {
        width: 100%;
        max-width: 1100px;
    } 

    > main {
        width: 100%;
        max-width: 1100px;
    }

    > footer {
        width: 100%;
        max-width: 1100px;
    }
`