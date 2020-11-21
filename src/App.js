import React, {useEffect, useState} from 'react';
import './react-table.scss';
import ReactTable from './rest_react.table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const initializeTableData = [{"id":0,"name":"","contact":""}];
  const [table_data, SetTableData] = useState(initializeTableData);
  const [TotalData] = useState(100);
  const [DataPerPage] = useState(20);
  useEffect(() => {
      var data = [];
      for(var i = 0; i < TotalData; i++)
      {
        data.push({"id":i,"name":""+i,"contact":"Contact " +i});
      }
      SetTableData(data);
  },[]);
  return (
    <Container fluid>
        <Row>
            <Col md={12} className="text-center">
                <ReactTable Data={table_data} TotalData={TotalData} DataPerPage={DataPerPage}/>
            </Col>
        </Row>
    </Container>
  );
}

export default App;