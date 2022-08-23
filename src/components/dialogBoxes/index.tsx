import { Modal } from 'antd';
import React from 'react';

const ModalWrapper: React.Fc = (props: any) => {
  const {
    isOpen,
    children,
    toggleModal,
    title = 'Custom Modal',
    Icon,
    size = 'small',
  } = props;

  const modalSize = {
    small: 550,
    medium: 800,
    large: 1300,
  };

  const titleGenerator = () => {
    return (
      <div className="modal-header-custom">
        {Icon}
        {title}
      </div>
    );
  };
  return (
    <>
      <Modal
        title={titleGenerator()}
        visible={isOpen}
        onCancel={toggleModal}
        keyboard={true}
        afterClose={() => {}}
        footer={null}
        // centered={true}
        focusTriggerAfterClose={true}
        zIndex={9999}
        width={modalSize[size]}
      >
        {children}
      </Modal>
    </>
  );
};
export default ModalWrapper;
