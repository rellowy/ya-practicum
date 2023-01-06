import React, { Component } from "react";
import ModalStyles from "./modal.module.css";
import PropTypes from "prop-types";
import {
  Button,
  CloseIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Header() {
  return null;
}

function Body() {
  return null;
}

class Modal extends Component {
  static Header = Header;

  static Body = Body;

  render() {
    const { show, children } = this.props;
    let header, body;
    if (Array.isArray(children)) {
      header = children.find((child) => child.type === Header);
      body = children.find((child) => child.type === Body);
    } else {
      if (children.type === Header) {
        header = children;
      } else {
        body = children;
      }
    }

    return (
      show && (
        <div className={ModalStyles.modalBackground}>
          <div
            className={[
              ModalStyles.modal,
              "pt-10",
              "pb-10",
              "pl-10",
              "pr-10",
            ].join(" ")}
          >
            <div className={ModalStyles.modalHeader}>
              {header?.props?.children || <div />}
              <Button
                htmlType="button"
                type="secondary"
                size="medium"
                onClick={this.props.handleClose}
              >
                <CloseIcon type="primary" />
              </Button>
            </div>
            <div className={ModalStyles.modalBody}>{body?.props?.children}</div>
          </div>
        </div>
      )
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  handleClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  show: false,
};

export default Modal;
