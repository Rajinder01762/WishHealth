import React from "react";
import Routes from "./routes";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
// function App() {
//   return (
//     <div>
//       <Routes />
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Routes />
        <NotificationContainer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

