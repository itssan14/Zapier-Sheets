import React from "react";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import Modal from "material-ui/Modal";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import TextField from "material-ui/TextField";
/**
 * Add Button List Component:
 * Adds a button to add new table names along with pre-existing set of tables in the state array.
 */
export default class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mopen: false
    };
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleModalOpen = () => {
    this.setState({ mopen: true });
  };
    
  handleModalClose = () => {
    this.setState({ mopen: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let tableName = event.target.tableName.value;
    this.props.update(tableName);
    this.setState({ mopen: false });
  }
  
  render() {
    return (
      <div>
        <Button
          fab
          type="submit"
          onClick={this.handleModalOpen}
          color="primary"
          style={{ marginTop: "8px" }}
        >
          <AddIcon />
        </Button>
        {/*Modal with a form to be placed inside of here. */}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.mopen}
          onClose={this.handleModalClose}
        >
            <div style={getModalStyle()}>
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <Typography>Enter Input Here :</Typography>
                    </Grid>
                    <form onSubmit={this.handleSubmit}>
                        <Grid item>
                            <TextField 
                                label="Enter Table Name"
                                name="tableName"
                                autoFocus
                            />
                        </Grid><br />   
                        <Grid item>
                            <Button type="submit" raised color="primary">
                                Submit
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </div>
        </Modal>
      </div>
    );
  }
}

function rand() {
    return Math.floor(Math.random() * 20) - 10;
  }
  
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        position: 'absolute',
        width: 8 * 50,
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        border: '1px solid #e5e5e5',
        backgroundColor: '#fff',
        boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
        padding: 8 * 4,
    };
}