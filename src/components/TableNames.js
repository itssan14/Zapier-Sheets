import React from "react";
import Navbar from "./Navbar";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
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
    this.handleAddList = this.handleAddList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount = () => {
    this.setState({
      tableNames: this.state.tableNames.concat("Sanjay", "Test")
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleAddList = event => {
    event.preventDefault();
    // let val = event.target.name.val;
    // if(val !== "") {
    //   this.setState({ tableNames: val});
    //   console.log(`Value added to the list of tables ${val}`);
    // }
  };

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <List names={this.state.tableNames} />
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
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Button raised color="primary">
            {key}
          </Button>
        </Grid>
      </Grid>
    ))}
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <AddList />
      </Grid>
    </Grid>
  </div>
);

/**
 * Add Button List Component:
 * Adds a button to add new table names along with pre-existing set of tables in the state array.
 */
const AddList = () => (
  <div>
    <Button fab type="submit" color="primary" style={{ marginTop: "8px" }}>
      <AddIcon />
      {/*Modal with a form to be placed inside of here. */}
    </Button>
  </div>
);
