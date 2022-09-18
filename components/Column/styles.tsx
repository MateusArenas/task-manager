import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  background-color: white;
`;
export const Title = styled.h3`
  padding: 8px;
`;
export const TaskList = styled.div<{ isDraggingOver: boolean }>`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'rgba(0,0,0,0.2)')};
  min-height: 60px;
`;

export const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;