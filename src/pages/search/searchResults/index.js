import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { DocResultCard } from "../../../components/card";
import CallScreen from "../../../components/card/DocResultCard/CallScreen";
import { useDispatch, useSelector } from "react-redux";

const SearchResults = () => {
  const [isStream,setStream] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // const stream = state.VideoSessionData.stream || {};
  // const size = Object.keys(stream).length;
  return (
  <div className="search-results-wrapper">
    <Container fluid="xl">
      <h2>We have found 112 Dentist in Chandigarh</h2>
      <Row>
        {[{}, {}].map((data, index) => (
          <Col lg="6" className="px-lg-1 mb-3">
            <DocResultCard {...data} />
          </Col>
        ))}
      </Row>

      <Row>
          <Col lg="12" className="px-lg-1 mb-3">
            <CallScreen />
          </Col>
      </Row>
    </Container>
  </div>
);
        }

export default SearchResults;
