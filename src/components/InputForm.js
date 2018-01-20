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
      resOpen: false,
      authorName: "",
      name: "",
      content: "",
      sheetsLink: "",
      open: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  tableName = () => {
    const url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'); 
    let tableName = url[0].slice(url[0].indexOf('=') + 1)
    return tableName;
  }
  handleSubmit = event => {
    event.preventDefault();
    let tabName = this.tableName();
    let tabInfo = event.target.tableInfo.value;
    let sheetsLink = event.target.sheetsLink.value;
    let authorName = event.target.authorName.value;
    if (tabName !== "" && tabInfo !== "" && sheetsLink !== "") {
      this.setState({
        name: tabName,
        content: tabInfo,
        authorName: authorName,
        sheetsLink: sheetsLink
      });
      axios
        .post("/info", {
          tableName: tabName,
          tableInfo: tabInfo,
          sheetsLink: sheetsLink,
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
                id="link"
                label="Sheets Link"
                name="sheetsLink"
                margin="normal"
                placeholder="Enter Sheets Link"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center" spacing={0}>
            <Grid item xs={8}>
              <TextField
                id="name"
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
