import React, { useMemo } from 'react'
import { Typography, Card, CardContent, CardActions, Button } from '@mui/material'

import questions from "./questions";

const Result = (props) => {
    const { answers, restartQuiz } = props;

    const correctAnswers = useMemo(() => {
        return questions.filter((q, i) => {
            return q.correctAnswer === parseInt(answers[i]);
        }).length;
    }, [answers])

    return (
        <Card sx={{ 
            padding: "15px",
            backgroundColor: "#E7F2F8",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px 5px grey", 
             }}>
            <CardContent>
                <Typography sx={{ display: "flex", justifyContent: "center", mb: 3,
                borderBottom: "1px solid black",
                paddingBottom: "20px",
                fontFamily: "Open Sans"
            }} variant="h4">
                    Result
                </Typography>
                <Typography sx={{ display: "flex", justifyContent: "center", alignItems:"center", fontFamily: "Open Sans"}} variant="h4" color="text.secondary">
                    <div>You have scored <span style={{fontWeight: "500"}}>{correctAnswers}</span> out of <span style={{fontWeight: "500"}}>{questions.length}</span> questions correct!</div>
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center", fontFamily: "Open Sans" }}>
                <Button onClick={restartQuiz} variant="outlined" sx={{
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
            }}>
                    Retry
                </Button>
            </CardActions>
        </Card>
    )
}

export default Result