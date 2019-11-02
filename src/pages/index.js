import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Row from "react-bootstrap/Row"
import { Col, ListGroup } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as FaIcons from "@fortawesome/free-solid-svg-icons"
import Container from "react-bootstrap/Container"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Row className="mt-4 mb-4">
      <Col xs={12} sm={3}>
        <Image/>
      </Col>
      <Col xs={12} sm={9}>
        <Container className="mt-2 mt-sm-0">My name is Jettro Coenradie, I live in The Netherlands and I work for a
          company called Luminis. For some time I have been thinking about creating a small website describing what I do
          and what I like.</Container>
      </Col>
    </Row>
    <Row className="mb-4">
      <Col>
        <ListGroup>
          <ListGroup.Item>
            <FontAwesomeIcon icon={["fab", "linkedin"]} style={{ color: "rgb(43,144,182)" }}/>
            <a href="https://www.linkedin.com/in/jettro/" className="badge badge-light">www.linkedin.com/in/jettro</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon icon={["fab", "github"]} style={{ color: "rgb(43,144,182)" }}/>
            <a href="https://github.com/jettro" className="badge badge-light">github.com/jettro</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon icon={["fab", "twitter"]} style={{ color: "rgb(43,144,182)" }}/>
            <a href="https://twitter.com/jettroCoenradie" className="badge badge-light">twitter.com/jettroCoenradie</a>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
    <Row className="mb-lg-2">
      <Col sm={12} md={6}>
        <Card className="mb-2">
          <Card.Header>
            <FontAwesomeIcon icon={FaIcons["faUserTie"]} style={{ color: "grey" }} size="10x"/>
          </Card.Header>
          <Card.Body>
            <Card.Title>Professional</Card.Title>
            <Card.Text>
              I love to learn and share knowledge. I help customers improve the search experience for their customers.
              Next to that I work on creating the best team for the company I am currently working at: <a
              href="https://www.luminis.eu">Luminis</a>.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/professional/" variant="light">More info</Link>
          </Card.Footer>
        </Card>
      </Col>
      <Col sm={12} md={6}>
        <Card className="mb-2">
          <Card.Header>
            <FontAwesomeIcon icon={FaIcons["faUser"]} style={{ color: "grey" }} size="10x"/>
          </Card.Header>
          <Card.Body>
            <Card.Title>Personal</Card.Title>
            <Card.Text>
              Hard to find boundaries between professional and personal life. I like to read about interesting companies
              and persons, but also thrillers.
              When I make time available, I go out to take photographs in nature.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/personal/" variant="light">More info</Link>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
