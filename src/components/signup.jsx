import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/auth';
import { If, Else, Then } from 'react-if';

const SignUp = () => {
	const contextType = useContext(AuthContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('user');

	function changeUsername(e) {
		setUsername(e.target.value);
	}

	function changePassword(e) {
		setPassword(e.target.value);
	}

	// function handleChangeEmail(e) {
	// 	setEmail(e.target.value);
	// }

	function handleChangeRole(e) {
		setRole(e.target.value);
	}

	function handleSubmitSignup(e) {
		e.preventDefault();
		contextType.signup(email, username, password, role);
	}

	return (
		<If condition={contextType.loggedIn}>
			<Then>
				<div></div>
			</Then>
			<Else>
				
				<form onSubmit={handleSubmitSignup} >
					{/* <input	type="email" name="email" placeholder="Enter Email" onChange={handleChangeEmail} */}
					  {/* style={{borderRadius :'50px' , width:'25%'}}/> */}
					<input type="text" name="username" placeholder="Enter Username" onChange={changeUsername}
					 style={{borderRadius :'50px' , width:'20%'}}/>
					<input type="password"	name="password" placeholder="Enter password" onChange={changePassword}  style={{ borderRadius: '15px', width: '30%', margin:'10px' }}/>

					<select name="roles" id="roles" onChange={handleChangeRole}  style={{ borderRadius: '15px', width: '10%', margin:'10px' }}>
						<option value="user">user</option>
						<option value="editor" >editor</option> <option value="admin">admin</option>
					</select>

					<button style={{ borderRadius: '10px', width: '15%', height: '30px' ,margin :'5px' }}>SignUp</button>
				</form>
			</Else>
		</If>
	);
};

export default SignUp;