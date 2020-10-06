import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../Header/Header.scss";

IndexHeader.propTypes = {};

function IndexHeader() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              href="https://www.youtube.com/watch?v=MpD8vxfkzas&list=PLeS7aZkL6GOvCz3GiOtvtDXChJRuebb7S&index=7"
              className="header__link header__title"
              //mở thêm 1 cái tab mới + ref
              target="_blank"
              rel="noopener noreferrer"
            >
              Easy Frontend
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default IndexHeader;
