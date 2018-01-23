import React from "react";
import Navbar from "./Navbar";
import AddList from "./AddList";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
/**
 * TableNames Component :
 * Displayed when accessing the "/tables" route
 * Encloses a list of tables and buttons to add more to the list of tables.
 */

export default class TableNames extends React.Component {
   state = {
      tableNames: []
  };
  
  componentDidMount = () => {
    // If table names are previously provided store them in local memory , retrieve and display them
    let items = JSON.parse(window.localStorage.getItem("tablesList"));
    if (items === null) {
      // WILL HAVE TO ADD A WARNING
    } else {
      this.setState({ tableNames: items });
    }
  };

  componentDidUpdate = () => {
    // On addition of new table details store the updated values into local storage
    let tablesList = JSON.stringify(this.state.tableNames);
    window.localStorage.setItem("tablesList", tablesList);
  };

  updateTableList = newItem => {
    // Retrieve data sent by the AddList Component and add it to the state variable
    this.setState({
      tableNames: this.state.tableNames.concat(newItem)
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <List names={this.state.tableNames} />
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <AddList update={this.updateTableList} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

/**
 * Table Name List Component:
 * Fetches data from the state and displays it inside of a button.
 */
const List = props => (
  <div>
    {props.names.map(key => (
      <Trick pass={key} key={key}/>     
    ))}
  </div>
);
const Trick = props => (
  <div>
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Button raised color="primary" href={`/form?aname=${props.pass}`}>
          {props.pass}
        </Button>
      </Grid>
    </Grid>
  </div>
)