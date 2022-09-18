import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Column from '../Column';

import useBreakpoint, { breakpointNum } from '../../hooks/useBreakpoint';

interface BoardProps {
  columnOrder: string[]
  columns: any
  tasks: any
}

const Board: React.FC<BoardProps> = ({ columnOrder, columns, tasks }: any) => {

  const size = useBreakpoint()

  return (
        <div className="container mt-2 mt-lg-5">
          <Droppable 
            type="column"
            droppableId="all-columns"
            direction={breakpointNum[size] <= 1 ? "vertical" : "horizontal"}
          >
            {provided => (
              <div className={`row g-2 py-2`} 
                style={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}
                ref={provided.innerRef}
              >

                {columnOrder.map((columnId: string, index: number) => {
                  const column = columns[columnId];
                  const columnTasks = column.taskIds.map((taskId: string) => tasks[taskId])
                  
                  // const isDropDisabled = index < homeIndex;
                  return (
                      <Column key={column.id} 
                        className={`col-12 col-md-6 col-lg-4`}
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
        </div>
  )
}

export default Board;