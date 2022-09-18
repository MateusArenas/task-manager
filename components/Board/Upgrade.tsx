import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Column from '../Column';

import { Carousel } from 'react-bootstrap';
import useBreakpoint, { breakpointNum } from '../../hooks/useBreakpoint';

interface BoardProps {
  columnOrder: string[]
  columns: any
  tasks: any
}

const BoardUpdate: React.FC<BoardProps> = ({ columnOrder, columns, tasks }: any) => {

  const size = useBreakpoint()

  const items = breakpointNum[size] >= 2 ? 2
    : breakpointNum[size] >= 3 ? 3
    : 1; 

  const rows = columnOrder.length / items;

  const all = new Array(rows).fill(null).map((_, index) => columnOrder.slice(items*index, items*(index+1)));

  return (
    <Carousel controls={false} className="flex-grow-1" variant="dark">
    {all.map((items, index) => (         
      <Carousel.Item key={index} className="h-100 w-100">
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

                {items.map((columnId: string, index: number) => {
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
        <Carousel.Caption>
          <h5>First slide label</h5>
          {/* <p>Ppharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      ))}
  </Carousel>
  )
}

export default BoardUpdate;