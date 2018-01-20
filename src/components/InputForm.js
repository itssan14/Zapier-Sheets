import React from "react";
import axios from "axios";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import AddIcon from "material-ui-icons/Add";
import Typography from "material-ui/Typography";
import Popover from "material-ui/Popover";

export default class InputForm extends React.Component {
  state = {
    resOpen: false,
    authorName: "",
    name: "",
    content: "",
    title: "",
    open: false
  };

  handleSubmit = event => {
    event.preventDefault();
    let tabName = window.location.href.slice(
      window.location.href.indexOf("=") + 1
    );
    let tabInfo = event.target.tableInfo.value;
    let title = event.target.title.value;
    let authorName = event.target.authorName.value;
    if (tabName !== "" && tabInfo !== "" && title !== "") {
      this.setState({
        name: tabName,
        content: tabInfo,
        authorName: authorName,
        title: title
      });
      axios
        .post("/info", {
          tableName: tabName,
          tableInfo: tabInfo,
          title: title,
          authorName: authorName
        })
        .then(res => {
          this.setState({ resOpen: true });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({ open: true });
    }
  };

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ resOpen: false });
  };

  render() {
    return (
      <div>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <Grid container justify="center" alignItems="center" spacing={0}>
            <Grid item xs={8}>
              <TextField
                label="Title"
                name="title"
                margin="normal"
                placeholder="Enter the title field"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center" spacing={0}>
            <Grid item xs={8}>
              <TextField
                label="Author Name"
                name="authorName"
                margin="normal"
                placeholder="Enter Author Name"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={0}>
            <Grid item xs={8}>
              <TextField
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
              <Popover
                open={this.state.resOpen}
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
                  Data succesfully entered into table {this.state.name}
                </Typography>
              </Popover>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
