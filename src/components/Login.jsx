import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/auth';
import { If, Else, Then } from 'react-if';


// export default class Login extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       username: "", password: ""
//     }
//   }
//   static contextType = AuthContext
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value })
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.context.login(this.state.username, this.state.password)
//   }
//   render() {
//     return (
//       <If condition={this.context.loggedIn}>
//         <Then>
//           <button onClick={this.context.logout}>Logout</button>
//         </Then>
//         <Else>
//           <form onSubmit={this.handleSubmit}>
//             <input type="text" name="username" placeholder="Enter Username" onChange={this.handleChange} />
//             <input type="text" name="password" placeholder="Enter Password" onChange={this.handleChange} />
//             <button>Login</button>
//           </form>
//         </Else>
//       </If>
//     )
//   }
// }



const Login = () => {
  const contextType = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function changeUsername(e) {
    setUsername(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    contextType.login(username, password);
  }


  return (
    <If condition={contextType.loggedIn}>
      <Then>
        <button onClick={contextType.logout}>Logout</button>
      </Then>
      <Else>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Enter Username" onChange={changeUsername} style={{ borderRadius: '50px', width: '30%' }} />
          <input type="text" name="password" placeholder="Enter Password" onChange={changePassword} style={{ borderRadius: '50px', width: '30%' }} />
          <button style={{ borderRadius: '50px', width: '10%', height: '40px', marginLeft: '80%' }}>Login</button>
        </form>
      </Else>
    </If>
  )
}

export default Login