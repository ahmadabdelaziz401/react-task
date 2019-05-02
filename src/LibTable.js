import React from 'react';
import { Table, Icon } from 'antd';
import './App.css';

class LibTable extends React.Component{
render(){
  const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Actions',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Download Model</a>
      <span className="ant-divider" />
      <a href="#">Link to log</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown'
}, {
  key: '2',
  name: 'Jim Green'
}, {
  key: '3',
  name: 'Joe Black'
}]; 
return(
<Table columns={columns} dataSource={data} />
  );
}}

export default LibTable;