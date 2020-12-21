import styled, { css } from 'styled-components';

function Title(props) {
    const { children, size, borderBottom, className } = props;

    return (
        <TitleRoot className={className} size={size} borderBottom={borderBottom}>
            {children}
        </TitleRoot>
    );
}

export default Title;

const TitleRoot = styled.div`
    font-size: ${(props) => props.size}px;
    ${(props) =>
        props.borderBottom &&
        css`
            padding-bottom: 10px;
            border-bottom: 1px solid #fff;
        `}
`;
