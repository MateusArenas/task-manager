import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Task from '../Task';
import { Container, Handle, TaskList, Title } from './styles';

interface ColumnProps {
  isDropDisabled?: boolean
  column: {
    id: string
    title: string
    taskIds: string[]
  }
  tasks: Array<{
    id: string
    content: string
  }>
  index: number
}

const Column: React.FC<ColumnProps> = ({ column, tasks, index, isDropDisabled }) => {
  return (
    <Draggable 
      draggableId={column.id}
      index={index}
    >
      {provided => (
        <Container ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Title>{column.title}</Title>
            <Handle {...provided.dragHandleProps} />
          </div>
          <Droppable 
            droppableId={column.id} 
            type="task"
            isDropDisabled={isDropDisabled}
          >
            {(provided, snapshot) => (
              <TaskList 
                ref={provided.innerRef} 
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  )
}

export default React.memo(Column);