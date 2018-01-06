import React from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import AddIcon from "material-ui-icons/Add";
import Typography from "material-ui/Typography";
import Popover from "material-ui/Popover";
import axios from "axios";

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: "",
      open: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Handle Submit Event
  handleSubmit(event) {
    event.preventDefault();
    let tabName = event.target.tableName.value;
    let tabInfo = event.target.tableInfo.value;
    if (tabName !== "" && tabInfo !== "") {
      this.setState({ name: tabName, content: tabInfo });
      console.log(`Name:    ${tabName} \nContent: ${tabInfo}`);
      axios
        .post("/info", {
          tableName: tabName,
          tabInfo: tabInfo
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({ open: true });
    }
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <Grid container justify="center" alignItems="center" spacing={0}>
            <Grid item xs={8}>
              <TextField
                id="name"
                label="Table Name"
                name="tableName"
                margin="normal"
                placeholder="Enter Table Name"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={0}>
            <Grid item xs={8}>
              <TextField
                id="name"
                label="Content"
                name="tableInfo"
                margin="normal"
                placeholder="Enter content"
                fullWidth
                multiline
                required
              />
            </Grid>
          </Grid>
          <Grid container justify="flex-end" spacing={0}>
            <Grid item xs={3}>
              <Button
                fab
                type="submit"
                color="primary"
                style={{ marginTop: "8px" }}
              >
                <AddIcon />
              </Button>
              <Popover
                open={this.state.open}
                anchorEl={null}
                anchorReference="anchorEl"
                onClose={this.handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                anchorPosition={{
                  top: 200,
                  left: 400
                }}
              >
                <Typography style={{ padding: "20px 20px" }}>
                  Please enter valid input.
                </Typography>
              </Popover>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
