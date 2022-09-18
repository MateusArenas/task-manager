import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { Container, Handle, TaskList, Title } from './styles';

interface TaskProps {
  index: number
  task: {
    id: string
    content: string
  }
}

const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable
      draggableId={task.id} 
      index={index}
      // isDragDisabled={true}
    >
      {(provied, snapshot) => (
        <a href="#gne">
          <Container 
            ref={provied.innerRef}
            {...provied.draggableProps}
            {...provied.dragHandleProps}
            isDragging={snapshot.isDragging}
            // isDragDisabled={true}
            aria-roledescription="Press space bar to lift the task"
          >
            {task.content}
            {/* <Handle {...provied.dragHandleProps} /> */}
          </Container>
        </a>
      )}
    </Draggable>
  )
}

export default React.memo(Task);