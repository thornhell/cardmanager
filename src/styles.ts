import styled from 'styled-components';

interface DragPreviewContainerProps {
    isHidden?: boolean
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
opacity: ${props => (props.isHidden ? 0.3 : 1)};
`

export const ColumnContainer = styled(DragPreviewContainer)`   
background-color: #ebecf0;
width: 300px;
min-height: 40px;
margin-right: 20px;
border-radius: 3px;
padding: 8px 8px;
flex-grow: 0;
`
