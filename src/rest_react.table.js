import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination'

function ReactTable(props) {
        const [pageData, SetPageData] = useState(props.Data);
        const [paginateArray, SetPaginateArray] = useState(["1"]);
        const [TotalPage, SetTotalPage] = useState(Math.ceil(props.TotalData / props.DataPerPage));
        const [CurrentPageNumber, SetCurrentPageNumber] = useState(1);
        
        useEffect(() => {
                if(pageData.length < 2 && pageData[0].id === 0) {
                        var data = props.DataLoadCallback(0, props.DataPerPage);
                        SetPageData(data);
                }

                var totalPage = Math.ceil(props.TotalData / props.DataPerPage);
                SetTotalPage(totalPage);
                SetCurrentPageNumber(1);
                SetPaginateArray(paginationGenerator(1, totalPage));
        }, []);

        const LoadPageData = (page_number) => {
                var data = props.DataLoadCallback(props.DataPerPage*(page_number-1), props.DataPerPage);
                SetPageData(data);

                SetPaginateArray(paginationGenerator(page_number, TotalPage));
                SetCurrentPageNumber(page_number);
        }

        function paginationGenerator(currentPage, nrOfPages) {
                var delta = 2,
                    range = [],
                    rangeWithDots = [],
                    l;
            
                range.push(1);  
            
                if (nrOfPages <= 1){
                     return range;
                }
            
                for (let i = currentPage - delta; i <= currentPage + delta; i++) {
                    if (i < nrOfPages && i > 1) {
                        range.push(i);
                    }
                }  
                range.push(nrOfPages);
            
                for (let i of range) {
                    if (l) {
                        if (i - l === 2) {
                            rangeWithDots.push(l + 1);
                        } else if (i - l !== 1) {
                            rangeWithDots.push('...');
                        }
                    }
                    rangeWithDots.push(i);
                    l = i;
                }
            
                return rangeWithDots;
        }

        return (
                <Table striped bordered hover size="sm">
                        <thead>
                                <tr>
                                        {
                                                props.Columns.map(function(name, index){
                                                        return <th key={index}>{name.Name}</th>
                                                })
                                        }
                                </tr>
                        </thead>
                        <tbody>
                                {
                                        pageData.map(function(name, index){
                                        return <tr key={index}>
                                                {
                                                        props.Columns.map(function(colName, col_index){
                                                                return <td key={col_index}>{name[colName["ValueMember"]]}</td>
                                                        })
                                                }
                                                </tr>;
                                })}
                        </tbody>
                        <tfoot>
                                <tr>
                                        <td colSpan={4} className="text-right">
                                                <Pagination>
                                                        <Pagination.First onClick={()=>LoadPageData(1)}/>
                                                        <Pagination.Prev onClick={()=>LoadPageData(CurrentPageNumber>1?CurrentPageNumber-1:1)}/>
                                                        {
                                                                paginateArray.map(function(name, index) {
                                                                        if(name === "...") {
                                                                                return <Pagination.Ellipsis key={index}/>;
                                                                        } else {
                                                                                if(CurrentPageNumber === name)
                                                                                {
                                                                                        return <Pagination.Item key={index} active onClick={()=>LoadPageData(parseInt(name))}>{name}</Pagination.Item>;
                                                                                }
                                                                                else
                                                                                {
                                                                                        return <Pagination.Item key={index} onClick={()=>LoadPageData(parseInt(name))}>{name}</Pagination.Item>;
                                                                                }
                                                                        }
                                                                })
                                                        }
                                                        <Pagination.Next onClick={()=>LoadPageData(CurrentPageNumber+1>TotalPage?TotalPage:CurrentPageNumber+1)}/>
                                                        <Pagination.Last  onClick={()=>LoadPageData(TotalPage)}/>
                                                </Pagination>
                                        </td>
                                </tr>
                                <tr>
                                        <td colSpan={4} className="text-right">
                                                
                                        </td>
                                </tr>
                        </tfoot>
                </Table>
                        
        );
}

export default ReactTable;