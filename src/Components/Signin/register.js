import React,{Component} from 'react';
class Register extends Component{
	constructor(props){
		super(props);
		this.state={
			email:'',
			password:'',
			name:''
		}
	}
	OnNameChange=(event)=>{
		this.setState({
			name:event.target.value
		});
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
		fetch('http://localhost:8081/register',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				email:this.state.email,
				password:this.state.password,
				name:this.state.name
			})
		}).then(response=>response.json()).then(data=>{
			if(data.id){
					this.props.LoadUser(data);
					this.props.submit2();
				}
		})
	}
	render(props){
	return(
	<div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
		<article class="pa4 black-80">
		  <div action="sign-up_submit" method="get" accept-charset="utf-8">
		    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
		      	<legend class="f4 fw6 ph0 mh0">Sign Up</legend>
		      <div class="mt3 tc">
		        <label class="db fw6 lh-copy f6" for="password">Name</label>
		        <input  onChange={this.OnNameChange} class="b pa2 input-reset ba bg-transparent" type="text" name="name"  id="name"/>
		      </div>
		      <div class="mt3 tc">
		        <label class="ddb fw6 lh-copy f6" for="email-address">Email address</label>
		        <input onChange={this.OnEmailChange} class="pa2 input-reset ba bg-transparent measure" type="email" name="email-address"  id="email-address"/>
		      </div>
		      <div class="mt3 tc">
		        <label class="db fw6 lh-copy f6" for="password">Password</label>
		        <input onChange={this.OnPasswordChange} class="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
		      </div>
		    </fieldset>
		    <div class="mt3 tc"><input onClick={this.OnSubmitSignIn} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up"/></div>
		  </div>
        </article>
    </div>
    );
   }
}
export default Register;