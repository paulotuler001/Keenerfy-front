import "./ListTable.css";
import React from 'react';


const ListTable = ({columns, data, title}) => {

  return (
    <div className="container-list-table">
      <form className="form-list-table">
        <h2>{title}</h2>
        <hr className="custom-hr" />
        <div className="sub-container-list-table">
        </div>
        <div className="grid-container">
        {columns.map((col, index) => (
          <div key={index} className="grid-header">
            {col}
          </div>
        ))}
      
      {data.map((row, rowIndex) => (
          columns.map((col, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`} className="grid-item">
              {row[col]}
            </div>
          ))
        ))}
    </div>
      </form>
    </div>
  );
};

export default ListTable;
