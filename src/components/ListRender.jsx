import React from 'react';

const getActive = (item) => {};
const getPersistance = (number) => {
  const nmString = String(number * 100);
  console.log(nmString, nmString?.startsWith('-'), nmString?.slice(1));
  return nmString.startsWith('-') ? nmString.slice(1) : nmString;
};
const getIsNegative = (item) => {
  const nmString = String(item?.persistence * 100);
  return nmString.startsWith('-') ? 'negative' : 'positive';
};

const getPrice = (item) => {
  return `$${item.averagePrice}.00`
}
const ListRender = ({ list = [] }) => {
  return (
    <>
      <div className='headerTable title subtitle'>
        <h3 className='item title'> </h3>
        <h3 className='item '>Nombre</h3>
        <h3 className='item '>SKU</h3>
        <h3 className='item '>% Presencia</h3>

        <h3 className='item '>Av. Price</h3>

        <h3 className='item '>Av. Position</h3>
      </div>
      {list?.map((item) => {
        return (
          <div
            className={`row ${getIsNegative(item)}`}
            active={() => {
              getActive(item);
            }}
          >
            <div className='item'>
              <img className='image' src={item.productImage} alt=''></img>
            </div>
            <div className='item contentText'>{item.name}</div>
            <div className='item contentText'>{item.sku}</div>
            <div className='item contentText' isNegative={getIsNegative(item)}>
              {getPersistance(item.persistence)}
            </div>
            <div className='item contentText'>{getPrice(item)}</div>
            <div className='item contentText'>{item.averagePosition}</div>
          </div>
        );
      })}
    </>
  );
};

export default ListRender;
