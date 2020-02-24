// import React, { Component } from 'react';
// import './App.css';
// import {connect} from 'react-redux';
// import {userAction} from './redux/actions/userAction';

// class App extends Component {
  
//   fetchUsers = () => {
//     this.props.userFetch()
//   }

//   consoleUser = () => {
//     let res = this.props.users
//     res.then((res) => console.log(res))
//   }
  
//   render() {
//     return (
//       <div>
//         <button onClick={this.fetchUsers}>Fetch user</button>
//         <button onClick={this.consoleUser}>Console User</button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = () => state => ({
//   users: state.userFetch.users
// })

// const mapDispatchToProps = dispatch => ({
//   userFetch: () => dispatch(userAction())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {userAction} from './redux/actions/userAction';

function App() {
  const users = useSelector(state => state.userFetch.users)
  const dispatch = useDispatch();

  // users.then((res) => console.log(res))

  return(
    <div>
      <button onClick={() => dispatch(userAction())}>Fetch User</button>
      <button onClick={() => users.then(res => console.log(res))}>Resolve User</button>
    </div>
  )
}

export default App;
