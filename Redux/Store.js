//Actions
const ActionCreators = require('./Actions');
//Reducers
const {policies,claimsHistory,accounting} = require('./Reducers');
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies,
})


const store = createStore()


//Create an action to pass it to the dispatch method 

const sampleAction = ActionCreators.createPolicy('Alex',20);


//We call to store.dispatch(action)

store.dispatch(sampleAction);

//Anothe sugar syntas

store.dispatch(ActionCreators.createPolicy('Alex',20));
store.dispatch(ActionCreators.createPolicy('Jim',30));
store.dispatch(ActionCreators.createPolicy('Bob',40));


store.dispatch(ActionCreators.createClaim('Alex',120));
store.dispatch(ActionCreators.createClaim('Jim',20));

store.dispatch(ActionCreators.deletePoliciy('Bob'));


store.getState();

