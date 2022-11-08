import React from "react";
import Table from 'react-bootstrap/Table';

const DataTable = ({ data }) => {
  return (
    <Table 
        hover
        >
      <thead>
        <tr>
          <th>WEEK ENDING</th>
          <th>RETAIL SALES</th>
          <th>WHOLESALE SALES</th>
          <th>UNITS SOLD</th>
          <th>RETAILER MARGIN</th>
        </tr>
      </thead>
      <tbody>
        {data.sales.map(sale => {return(
          <tr key={sale.weekEnding}>
            <td>{sale.weekEnding}</td>
            <td>${sale.retailSales}</td>
            <td>${sale.wholesaleSales}</td>
            <td>{sale.unitsSold}</td>
            <td>${sale.retailerMargin}</td>
          </tr>
        )})}
      </tbody>
    </Table>
  );
}

export default DataTable;