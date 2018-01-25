import React from "react";
import axios from "axios";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import MenuItem from "material-ui/Menu/MenuItem";
import Typography from "material-ui/Typography";
import AddIcon from "material-ui-icons/Add";
import Popover from "material-ui/Popover";

export default class RegFrom extends React.Component {
  state = {
    open: false,
    errOpen: false,
    fopen: false,
    age: "",
    gender: "",
    ageArr: [
      "15-18",
      "18-20",
      "20-25",
      "25-40",
      "40-50",
      "50-55",
      "55-60",
      "60 & above"
    ]
  };

  handleSubmit = event => {
    event.preventDefault();
    if (event.target.pass.value === event.target.cpass.value) {
      axios
        .post("/info", {
          name: event.target.name.value,
          age: event.target.age.value,
          email: event.target.email.value,
          password: event.target.pass.value,
          gender: event.target.gender.value,
          bday: event.target.date.value,
          address: event.target.address.value
        })
        .then(res => {
          console.log(res);
          this.setState({ open: true });
        })
        .catch(err => {
          console.log(err);
          this.setState({ fopen: true });
        });
    } else {
      this.setState({ errOpen: true });
    }
  };

  handleChange = event => {
    this.setState({
      age: event.target.value
    });
  };

  handleChangeGen = event => {
    this.setState({
      gender: event.target.value
    });
  };

  handleClose = () => {
    this.setState({ open: false, errOpen: false, fopen: false });
  };
  render() {
    const genderArray = ["Male", "Female", "Cannot Disclose"];
    return (
      <div>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <Grid container justify="center" alignItems="center" spacing={0}>
            <Grid item xs={8}>
              <TextField
                label="Name"
                name="name"
                margin="normal"
                placeholder="Please enter your complete name"
                fullWidth
                required
                autoFocus
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Email"
                name="email"
                margin="normal"
                placeholder="example@example.com"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Password"
                type="password"
                name="pass"
                margin="normal"
                placeholder="Please enter your password"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Confirm Password"
                name="cpass"
                type="password"
                margin="normal"
                placeholder="Please re-enter your password"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Address"
                placeholder="Please enter your address"
                name="address"
                multiline
                fullWidth
              />
            </Grid>
            <Grid item xs={8}>
              <Grid container direction="row" alignItems="center">
                {/* Date Input Field */}
                <Grid item xs={4}>
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    name="bdate"
                    helperText="Please select your birthday"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    required
                  />
                </Grid>
                {/* Age Input Form */}
                <Grid item xs={4}>
                  <TextField
                    select
                    name="age"
                    label="Select Age"
                    value={this.state.age}
                    onChange={this.handleChange}
                    helperText="Please select your age group"
                    margin="normal"
                    fullWidth
                    required
                  >
                    {this.state.ageArr.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                {/* */}
                <Grid item xs={4}>
                  <TextField
                    select
                    label="Select Gender"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleChangeGen}
                    helperText="Please select your gender"
                    margin="normal"
                    fullWidth
                    required
                  >
                    {genderArray.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-end"
              spacing={0}
              style={{ paddingTop: "1.5rem" }}
            >
              <Grid item xs={3} style={{ paddingLeft: "7rem" }}>
                <Button
                  type="submit"
                  fab
                  color="primary"
                  onSubmit={this.handleSubmit}
                >
                  <AddIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
        <Popover
          open={this.state.open}
          anchorEl={null}
          anchorReference="anchorEl"
          onClose={this.handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          anchorPosition={{ top: 200, left: 400 }}
        >
          <Typography style={{ padding: "20px 20px" }}>
            Registered Successfully.
          </Typography>
        </Popover>
        <Popover
          open={this.state.errOpen}
          anchorEl={null}
          anchorReference="anchorEl"
          onClose={this.handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          anchorPosition={{ top: 200, left: 400 }}
        >
          <Typography style={{ padding: "20px 20px" }}>
            Please enter valid input.
          </Typography>
        </Popover>
        <Popover
          open={this.state.errOpen}
          anchorEl={null}
          anchorReference="anchorEl"
          onClose={this.handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          anchorPosition={{ top: 200, left: 400 }}
        >
          <Typography style={{ padding: "20px 20px" }}>
            Registration failed.
          </Typography>
        </Popover>
      </div>
    );
  }
}