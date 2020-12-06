import React from "react";
import { Container, FormGroup, Label, Input } from "reactstrap";
import { SearchDoctorForm } from "../../../components/form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { SearchDoctors } = this.props;

    let search =
      this.props &&
      this.props.history &&
      this.props.history.location &&
      this.props.history.location.state &&
      this.props.history.location.state.search;
    let location =
      this.props &&
      this.props.history &&
      this.props.history.location &&
      this.props.history.location.state &&
      this.props.history.location.state.location;

    return (
      <div className="banner">
        <Container>
          <SearchDoctorForm
            location={location}
            search={search}
            SearchDoctors={SearchDoctors}
          />
          <div className="search-filter-wrapper">
            <div className="search-filter d-flex justify-content-between">
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  <span class="checkmark"></span>
                  Clinic Consultation
                </Label>
                <Label check>
                  <Input type="checkbox" />
                  <span class="checkmark"></span>
                  Video Consultation
                </Label>
              </FormGroup>
              <div>
                <i className="fas fa-chevron-down" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    SearchDoctors: state.BookOurDoctors,
  };
};
// export default withRouter(SearchFilter);
export default withRouter(connect(mapStateToProps)(SearchFilter));
