import Card from '@component/molecules/Card';

import styled from 'styled-components';

function Home() {
    return (
        <Container>
            <Card />
        </Container>
    );
}

export default Home;

const Container = styled.div`
    width: 1140px;
    margin: 0 auto;
    padding: 50px 0;
`;
