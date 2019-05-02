import React from "react";
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Input
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Demo extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  normFile (e) {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        
         <FormItem
          {...formItemLayout}
          label="Retrain Name"
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'retrain', message: 'The input is not valid Retrain Name!',
            }, {
              required: true, message: 'Please input your Retrain Name!',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Select[multiple]"
        >
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'Please select annotations', type: 'array' },
            ],
          })(
            <Select mode="multiple" placeholder="Please select annotations">
              <Option value="cars">Cars</Option>
              <Option value="trees">Trees</Option>
              <Option value="cats">Cats</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Notify When Done:"
        >
          {getFieldDecorator('switch', { valuePropName: 'checked' })(
            <Switch />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Upload"
          
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: (e)=>this.normFile(e),
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Dragger"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
              </Upload.Dragger>
            )}
          </div>
        </FormItem>

        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">Start</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedDemo = Form.create()(Demo);

export default WrappedDemo;