import React, { useCallback, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import { Autocomplete, Rating } from '@material-ui/lab'

import axios from 'axios';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
export default function AddressForm() {

  const [departments, setDepartments] = useState([]);
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');


  const fetchData = useCallback( async () => {
      const result = await axios.get('http://localhost:8000/departments')
      
      setDepartments(result.data);

      console.log(result.data);
  }, [])

  const fetchModules = useCallback( async () => {
    if(value2 != null){
      const result = await axios.get(`http://localhost:8000/modules/${value2._id}`)

      setModules(result.data);
      console.log('modulesss', result.data);
    }
}, [value2])

  useEffect(() => {
      fetchData();
      fetchModules();
  },[fetchData, fetchModules])
  const [modules, setModules] = React.useState({})
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select Department and Module
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Autocomplete
            id="combo-box-demo"
            value={value2}
            onChange={(event, newValue) => {
              setValue2(newValue);
            }}
            options={departments}
            getOptionLabel={(option) => option.dName}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Department" variant="outlined" />}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Autocomplete
            id="combo-box-demo"
            value={value3}
            onChange={(event, newValue) => {
              setValue3(newValue);
            }}
            options={modules}
            getOptionLabel={(option) => option.moduleCode}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Module" variant="outlined" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            Usefulness
          </Typography>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            Lecture
          </Typography>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            size="large"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
          {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}