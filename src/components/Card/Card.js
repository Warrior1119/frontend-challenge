import React from 'react';
import "./index.css";

const Card = React.memo(function Card({ data, onClick }) {
  console.log('card')
  return (
    <div style={{width: "100%"}}>
      {!data && (
        <div>NoData</div>
      )}
      {
        data && (
          <div className='Card' onClick={() => onClick(data.id)}>
            <div className='name'>{data.name}</div>
            <div className='container'>
              <div className='row'>
                <div className=''>
                  <label>Address</label>
                  <div>{data.address1}</div>
                </div>
                <div>
                  <label>$Base rent</label>
                  <div>{data.baseRent}</div>
                </div>
              </div>
              <div className='row'>
                <div>{data.sqft} sqft </div>
                <div>${data.sqft / 12}/mo</div>
                <div>{data.sqft}</div>
              </div>
            </div>
          </div>    
        )
      }
    </div>
  )

});

export default Card;