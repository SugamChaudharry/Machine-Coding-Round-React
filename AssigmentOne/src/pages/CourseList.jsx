import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const CourseList = () => {
  const [items,setItems] = useState([
    {
      id: '1',
      imageUrl: './src/assets/images/5.png',
      title: "Interview preparation with JavaScript 2.0",
      price: "Rs. 9000/-",
      tag: "Course",
    },
    {
      id: '2',
      imageUrl: './src/assets/images/4.png',
      title: "Aptitude - Averages, Mixtures & Allegation",
      price: "Free",
      tag: "Mock Test",
    },
    {
      id: '3',
      imageUrl: './src/assets/images/6.png',
      title: "Aptitude - Simple & Compound Interest",
      price: "Free",
      tag: "Mock Test",
    },
    {
      id: '4',
      imageUrl: './src/assets/images/2.png',
      title: "Aptitude - Partnership",
      price: "Free",
      tag: "Mock Test",
    },
    {
      id: '5',
      imageUrl: './src/assets/images/1.png',
      title: "Aptitude - Time & Work",
      price: "Free",
      tag: "Mock Test",
    }
  ])

  console.log(items);
  const onDragEnd = (result) => {
    console.log(result);
  };

  return (
    <DragDropContext >
      <div className='w-screen h-screen bg-[#c4dab7] flex items-center flex-col justify-around font-mono '>
        <h1 className='text-[80px] font-bold leading-[96.82px] text-[#4f6f52] drop-shadow-lg'>Chai aur code</h1>
        <div className='bg-white rounded-lg w-[1223px] h-[785px] flex items-center flex-col gap-10'>
          <div className='w-full flex flex-col gap-3 ml-28 mt-20'>
            <h2 className='text-black text-4xl font-bold'>Manage Bundle</h2>
            <p className='text-gray-500 text-xl'>Change orders of the products based on priority</p>
          </div>
          <Droppable droppableId='list'>
            {(provided) => (
              <div
                className='bg-black flex flex-col gap-2 w-full pl-28'
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {items.map((item, index) => (
                  <Draggable  key={item.id} draggableId={item.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        className='w-[1025px] h-[93px] flex items-center justify-between border-2 drop-shadow-lg rounded-lg'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}

                      >
                        <div className='ml-4 flex gap-4 w-[80%] items-center'>
                          <img src={`./src/assets/onDrag.svg`} alt="drag icon" className='size-10' />
                          <img src={item.imageUrl} alt='course' className='w-[133px] h-[75px] rounded-lg' />
                          <h3 className='text-xl'>{item.title}</h3>
                        </div>
                        <div className='ml-4 flex justify-between w-[20%]'>
                          <p className='text-lg'>{item.price}</p>
                          <span className='bg-[#c4dab7] text-sm p-2 rounded w-[95px] h-[35px] text-center justify-center'>{item.tag}</span>
                          <img src={`./src/assets/dot.svg`} alt="menu" className='size-10' />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default CourseList;
