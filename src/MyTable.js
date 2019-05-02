import React from 'react';
import { Table, Icon } from 'antd';
import './App.css';

class MyTable extends React.Component{
render(){
  const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
}, {
  title: 'Progress',
  dataIndex: 'progress',
  key: 'progress',
}, {
  title: 'Actions',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Download Model</a>
      <span className="ant-divider" />
      <a href="#">Link to log</a>
      <span className="ant-divider" />
      <a href="#">Pause</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  status: 32,
  progress: 30,
}, {
  key: '2',
  name: 'Jim Green',
  status: 42,
  progress: 40,
}, {
  key: '3',
  name: 'Joe Black',
  status: 32,
  progress: 50,
}]; 
return(
<Table columns={columns} dataSource={data} />
  );
}}

export default MyTable;