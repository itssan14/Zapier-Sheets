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
  constructor(props) {
    super(props);
    this.state = {
      tableNames: []
    };
  }

  componentWillMount = () => {
    this.setState({
      tableNames: this.state.tableNames.concat("Sanjay", "Test")
    });
  };

  updateTableList = (newItem) => {
    this.setState({
      tableNames: this.state.tableNames.concat(newItem)
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <List names={this.state.tableNames} />
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <AddList update={this.updateTableList}/>
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
      <div key={key}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Button raised color="primary">
              {key}
            </Button>
          </Grid>
        </Grid>
      </div>
    ))}
  </div>
);

