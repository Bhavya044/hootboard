import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({ config }) => {
  return (
    <div className="footer-container">
      {config?.map((item, index) => {
        return (
          <div
            className="footer-item"
            style={{
              borderRight:
                index !== config.length - 1
                  ? "1px solid 1px solid rgb(188, 188, 188);"
                  : 0,
            }}
          >
            <FontAwesomeIcon size="2x" className="" icon={item?.icon} />
            <div className="item-value">
              <div className="value">{item?.value}</div>
              <div className="title">{item?.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
