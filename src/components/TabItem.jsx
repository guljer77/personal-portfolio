import React from 'react';

const TabItem = ({item}) => {
  return (
    <div className='w-full overflow-hidden'>
      <img src={item.image} className='w-full h-[220px] hover:scale-110 transition' alt="" />
    </div>
  );
};

export default TabItem;