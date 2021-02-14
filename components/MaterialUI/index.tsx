import React from "react";
import {
  FormControl,
  FormLabel,
  Switch,
  Button,
  ButtonGroup,
  Modal,
  Select,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Container,
  Input,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  MenuItem,
  ThemeProvider,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import mockData, { groups } from "../../mockData/mockData";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "hsl(330, 100%, 70.6%)",
    },
  },
});

const MaterialUI = () => {
  const [open, setOpen] = React.useState(false);
  const [group, setGroup] = React.useState("1");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleClose = () => setOpen(false);
  const handleChangeGroup = (event) => setGroup(event.target.value);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Typography variant="h3">Feature flags</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Add new
          </Button>
        </Grid>
        <Table>
          <TableBody>
            {mockData.map((n) => (
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1">{n.title}</Typography>
                  <Typography variant="body2">{n.description}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Switch defaultChecked={n.checked} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add new feature flag</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is going to be an awesome feature flag
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              required
            />
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              value={group}
              onChange={handleChangeGroup}
              helperText="Please select feature group"
            >
              {groups.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" variant="contained">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default MaterialUI;
