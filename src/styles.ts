import styled from 'styled-components';

interface DragPreviewContainerProps {
    isHidden?: boolean;
    isPreview?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
transform: ${props => (props.isPreview ? "rotate(5deg)" : undefined)};
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

export const CustomDragLayerContainer = styled.div`
height: 100%;
left: 0;
pointer-events: none;
position: fixed;
top: 0;
width: 100%;
z--index: 100;
`

export const CardContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`
