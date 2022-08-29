import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal, Space } from 'antd';
import React from 'react';

const { confirm } = Modal;

const showPromiseConfirm = (onOKClick: any, title: any, content: any): any => {
  confirm({
    title,
    icon: <ExclamationCircleOutlined />,
    content,
    keyboard: true,
    zIndex: 9999,
    closable: true,
    okText: 'Delete',
    okType: 'danger',
    onOk() {
      return onOKClick();
    },

    onCancel() {},
  });
};

const deleteDialog = (onOKClick: any, title: any, content: any) => (
  <Space wrap>{showPromiseConfirm(onOKClick, title, content)}</Space>
  // <h1>asas</h1>
);

export default deleteDialog;
