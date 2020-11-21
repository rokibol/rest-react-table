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
  const [PerPageData] = useState(5);

  var columns = [
      {
        "Name":"ID",
        "ValueMember":"id"
      },
      {
        "Name":"Name",
        "ValueMember":"name"
      },
      {
        "Name":"Contact",
        "ValueMember":"contact"
      }
  ];

  useEffect(() => {
      var data = [];
      for(var i = 0; i < PerPageData; i++)
      {
          data.push({"id":i, "name":""+i, "contact":"Contact " +i});
      }
      SetTableData(data);
  },[])

  function LoadData(start, limit) {
      var data = [];
      for(var i = start; i < (start+limit); i++)
      {
        data.push({"id":i,"name":""+i,"contact":"Contact " +i});
      }
      return data;
  }

  return (
    <Container fluid>
        <Row>
            <Col md={12} className="text-center">
                <ReactTable Data={table_data} Columns={columns} TotalData={TotalData} DataPerPage={PerPageData} DataLoadCallback={LoadData}/>
            </Col>
        </Row>
    </Container>
  );
}

export default App;