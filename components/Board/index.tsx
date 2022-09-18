import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Column from '../Column';

interface BoardProps {
  columnOrder: string[]
  columns: any
  tasks: any
}

const Board: React.FC<BoardProps> = ({ columnOrder, columns, tasks }: any) => {
  return (
    <Droppable 
      type="column"
      droppableId="all-columns"
      direction="horizontal" 
    >
      {provided => (
        <div className={''} style={{ display: 'flex', flexDirection: 'row', background: 'red', flexGrow: 1 }}
          ref={provided.innerRef}
        >

          {columnOrder.map((columnId: string, index: number) => {
            const column = columns[columnId];
            const columnTasks = column.taskIds.map((taskId: string) => tasks[taskId])
            
            // const isDropDisabled = index < homeIndex;
            return (
              <Column key={column.id} 
                index={index} 
                column={column} 
                tasks={columnTasks} 
                // isDropDisabled={isDropDisabled} 
              />
            )
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default Board;