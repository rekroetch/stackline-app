import React from "react";
import { useSelector } from "react-redux";

import './App.css';

import Header from './components/Header'
import Table from './components/Table'
import Card from './components/Card'

const App = () => {
  const data = useSelector((state) => state.reducer.data[0]);

  console.log('Data', data)

  return (
    <div>
      <Header/>
      <aside style={{float: 'left', margin: '20px'}}>
        <Card>
          <div style={{textAlign:'center', maxWidth: '300px', height:'100vh', padding:'25px'}}>
            <img src={data.image} alt='Product' style={{height:'200px'}}/>
            <div style={{fontWeight:'bold', fontSize:'30px'}}>{data.title}</div>
            <div>{data.subtitle}</div>
            <hr></hr>
            <div>{data.tags.map(tag => {return(
              <button style={{backgroundColor:'white', border:'1px solid #999', borderRadius: '5px', margin:'5px'}}>{tag}</button>
            )})}</div>
            <hr></hr>
          </div>
          </Card>
      </aside>
      <div style={{}}>
        <div style={{margin:'20px', float: 'left'}}>
          <Card>
            <div style={{minWidth:'900px'}}>
              <div style={{fontSize:'25px'}}>Retail Sales</div>
              <div style={{height:'300px', textAlign:'center'}}>GRAPH</div>
              <hr></hr>
              <div className='row'>
                <div className='col'>JAN</div>
                <div className='col'>FEB</div>
                <div className='col'>MAR</div>
                <div className='col'>APR</div>
                <div className='col'>MAY</div>
                <div className='col'>JUN</div>
                <div className='col'>JUL</div>
                <div className='col'>AUG</div>
                <div className='col'>SEP</div>
                <div className='col'>OCT</div>
                <div className='col'>NOV</div>
                <div className='col'>DEC</div>
              </div>
            </div>
          </Card>
        </div>
        <div style={{margin:'20px', float: 'left'}}>
          <Card>
            <div style={{minWidth:'900px'}}>
              <Table data={data} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
