const express = require('express');
const bodyParser = require('body-parser');
const { getFSM, actionCreators } = require('fsm-avalon');

const app = express();
const port = 4001;

const { reducer, getValidateError, getActions } = getFSM();

const { 
	initGame,
	startRound,
	buildTeam,
	vote,
	drawVotesResult,
	executeMission,
	drawMissionsResult,
	assassin
} = actionCreators ;


app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', (req, res) => {
	const { state, payload, type } = req.body;
	let newState = reducer(undefined, {});
	newState = reducer(newState, actionCreators[type](payload));
	res.status(400).json(newState);
})

app.listen(4001);

