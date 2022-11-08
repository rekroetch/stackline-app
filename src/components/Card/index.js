import React from "react";
// import Card from 'react-bootstrap/Card';

const Card = (props) => {
  return (
    <div style={{height:'fit-content', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'white'}}>
        {props.children}
    </div>
  );
}

export default Card;