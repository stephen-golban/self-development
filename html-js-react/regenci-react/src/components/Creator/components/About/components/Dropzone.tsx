import { useState } from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Dropzone = () => {
  const [fileList, setFileList] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const dummyRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  console.log(selectedFile);
  
  const onChange = (info: any) => {
    switch (info.file.status) {
      case "uploading":
        setFileList(info.file);
        break;
      case "done":
        setSelectedFile(info.file);
        setFileList(info.file);
        break;

      default:
        // error or removed
        setSelectedFile(null);
        setFileList([]);
    }
  };
  return (
    <Upload
      fileList={fileList}
      customRequest={dummyRequest}
      onChange={onChange}
      listType="picture"
      maxCount={1}
    >
      <Button icon={<UploadOutlined />}>+ Upload</Button>
    </Upload>
  );
};

export default Dropzone;
