import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';

function ReactTable(props) {
        console.log(props.TotalData);
        return (
                
                <Table striped bordered hover size="sm">
                        <thead>
                                <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Contact</th>
                                        <th>Action</th>
                                </tr>
                        </thead>
                        <tbody>
                                {props.Data.map(function(name, index){
                                        return <tr key={index}>
                                                        <td>{index}</td>
                                                        <td>{name.name}</td>
                                                        <td>{name.contact}</td>
                                                        <td><Button varient="primary">Edit</Button></td>
                                                </tr>;
                                })}
                        </tbody>
                        <tfoot>
                                <tr>
                                        <td colSpan={4} className="text-right">
                                                {props.TotalData > props.DataPerPage?
                                                        <Pagination>
                                                                <Pagination.First />
                                                                <Pagination.Prev />
                                                                <Pagination.Item>{1}</Pagination.Item>
                                                                <Pagination.Item>{2}</Pagination.Item>
                                                                <Pagination.Item>{3}</Pagination.Item>
                                                                <Pagination.Item active>{3}</Pagination.Item>
                                                                <Pagination.Item>{4}</Pagination.Item>
                                                                <Pagination.Item>{5}</Pagination.Item>
                                                                <Pagination.Item>{6}</Pagination.Item>
                                                                <Pagination.Next />
                                                                <Pagination.Last />
                                                        </Pagination> : 
                                                        <Pagination>
                                                                <Pagination.First />
                                                                <Pagination.Prev />
                                                                <Pagination.Item>{1}</Pagination.Item>
                                                                <Pagination.Ellipsis />

                                                                <Pagination.Item>{10}</Pagination.Item>
                                                                <Pagination.Item>{11}</Pagination.Item>
                                                                <Pagination.Item active>{12}</Pagination.Item>
                                                                <Pagination.Item>{13}</Pagination.Item>
                                                                <Pagination.Item disabled>{14}</Pagination.Item>

                                                                <Pagination.Ellipsis />
                                                                <Pagination.Item>{20}</Pagination.Item>
                                                                <Pagination.Next />
                                                                <Pagination.Last />
                                                        </Pagination>
                                                }
                                                
                                        </td>
                                </tr>
                        </tfoot>
                </Table>
                        
        );
}

export default ReactTable;