import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const QuestionCard = (props) => {
  const { question = {}, questionNumber, submitAnswer } = props;
  const [value, setValue] = React.useState(null);

  const handleChangeRadio = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = () => {
    submitAnswer(value);
    setValue(null);
  }


  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{
        backgroundColor: "#E7F2F8",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px 5px grey"
      }}>
        <CardContent>

          <Typography variant="h5" component="div" sx={{
            marginBottom: "10px",
            borderBottom: "1px solid black",
            padding: "10px",
            paddingBottom: "20px",
            fontFamily: "Open Sans",
            fontWeight: "800"
          }}>
            Q{questionNumber})
            <span> </span>
            {question.title}
          </Typography>

          <FormControl sx={{
            fontWeight: "500",
            fontFamily: "Open Sans",
            padding: "10px"
          }}>
            <RadioGroup name="radio-group-quiz" value={value} onChange={handleChangeRadio}>
              {question.options.map((o, i) => {
                return <FormControlLabel key={i + 1} value={i + 1} control={<Radio />} label={o.description} />
              })}
            </RadioGroup>
          </FormControl>


        </CardContent>
        <CardActions>
          <Button disabled={!value} onClick={handleSubmit} variant='contained' fullWidth sx={{
                backgroundColor: "#0C2D48",
                padding: "15px 20px",
                fontFamily: 'Open Sans',
                fontWeight: "500",
                wordSpacing: "0.1rem",
                letterSpacing: '0.15rem',
                borderRadius: '10px',
                color: "white",
                margin: "5px 180px",
                mb: "20px",
                '&:hover':{
                    backgroundColor: '#003B73'
                }
            }}>Submit</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default QuestionCard