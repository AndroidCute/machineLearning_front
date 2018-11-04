import React from 'react';
import { message, Icon, Upload } from 'antd';

const Dragger = Upload.Dragger;

class upload extends React.Component{

  onChange = (info) => {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  handleSubmit = (e) => {
    console.log(e);
  }

  render(){
    return(
      <Dragger 
        name='file'
        multiple
        action = 'http://127.0.0.1:7001/upload/file'
        onChange={ this.onChange }
      >
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
    </Dragger>
    );
  }
}

export default upload;
