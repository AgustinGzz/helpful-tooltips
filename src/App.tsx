import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import HelpImage from "./Components/HelpImage";
import ValueCheckbox from "./Components/ValueCheckbox";
import "./App.css";

function App() {
  const rows = [
    {
      setting: "Enable setting 1",
      description: "enables setting 1 to do something",
      value: true,
      helpImage: <HelpImage />,
    },
    {
      setting: "Enable setting 2",
      description: "enables setting 2 to do something else",
      value: false,
      helpImage: <HelpImage />,
    },
    {
      setting: "Enable setting 3",
      description: "this does nothing",
      value: false,
      helpImage: <HelpImage />,
    },
  ];

  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} size="medium" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Setting:</TableCell>
              <TableCell align="left">Description:</TableCell>
              <TableCell align="left">Value:</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left">{row.setting}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">
                  <ValueCheckbox value={row.value} />
                </TableCell>
                <TableCell align="right">{row.helpImage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
