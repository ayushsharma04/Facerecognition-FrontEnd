import React,{Component} from 'react';
class SignIn extends Component{
	constructor(props){
		super(props);
		this.state={
			email:'',
			password:'',
		}
	}
	OnEmailChange=(event)=>{
		this.setState({
			email:event.target.value
		});
	}
	OnPasswordChange=(event)=>{
		this.setState({
			password:event.target.value
		});
	}
	OnSubmitSignIn=()=>{
		fetch('http://localhost:8081/signin',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				email:this.state.email,
				password:this.state.password
			})
		}).then(response=>response.json()).then(data=>{
			if(data.id){
					this.props.LoadUser(data);
					this.props.submit1();
				}
		})
	}
	render(props){
		return(
		<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center justify">
			<main className="pa4 black-80 justify">
			  <div className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			    	<legend className="f4 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3 tc">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input onChange={this.OnEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3 tc">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input onChange={this.OnPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="tc">
			      <input  onClick={this.OnSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
			    </div>
			    <div className="lh-copy mt3 tc">
			      <a href="#0" onClick={this.props.submit} className="f6 link dim black  ">Register</a>
			    </div>
			  </div>
			</main>
		</article>
		);
	}
}
export default SignIn;