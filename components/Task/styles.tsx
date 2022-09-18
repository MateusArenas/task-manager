import styled from "styled-components";

export const Container = styled.div<{ isDragging: boolean, isDragDisabled?: boolean }>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (
    props.isDragDisabled 
      ? 'lightgrey' 
      :  props.isDragging 
              ? 'lightgreen' 
              : 'white'
  )};
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.h3`
  padding: 8px;
`;
export const TaskList = styled.div`
  padding: 8px;
`;

export const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;