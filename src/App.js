import React, { Component } from 'react';
import Navigation from './Components/navigation/navigation';
import Logo from './Components/logo/logo';
import Particles from 'react-particles-js';
import Rank from './Components/rank/rank';
import InputBox from './Components/inputbox/inputbox';
import Recognition from './Components/recognition/recognition';
import './App.css';
import Clarifai from 'clarifai';
import SignIn from './Components/Signin/Signin';
import Register from './Components/Signin/register';
import Navigation2 from './Components/navigation/naviagation2';


const app = new Clarifai.App({
       apiKey: 'ccc5c978273949bf8b3d4aee4e6a8598'
      });
class App extends Component {
  constructor(){
  	super();
  	this.state={
  		url:'',
  		imageUrl:'',
  		box:{},
  		route:'signin',
      user:{
        id:'',
        name:'',
        email:'',
        entries:'',
        date:''
      }
  	};
  }
  LoadUser=(data)=>{
    this.setState({
      user:{
        id:data.id,
        name:data.name,
        email:data.email,
        entries:data.entries,
        date:data.date
      }
    })

  }
  SignInId=()=>{
  	this.setState({
  		route:'home'
  	})
  }
  SignOut=()=>{
  	this.setState({
  		route:'signin',
      url:''
  	});
  }
  RegsiterId=()=>{
  	this.setState({
  		route:'register'
  	})
  }
 
  FaceDisplay=(data)=>{
  	const ClarifaiData= data.outputs[0].data.regions[0].region_info.bounding_box;
  	console.log(ClarifaiData);
  	const image=document.getElementById('inputimage');
  	const width=Number(image.width);
  	console.log(width);
  	const height=Number(image.height);
  	return{
  		leftCol:ClarifaiData.left_col* width,
  		topRow:ClarifaiData.top_row* height,
  		rightCol:width-(ClarifaiData.right_col * width),
  		bottomRow:height-(ClarifaiData.bottom_row * height)
  	}
}
  DetectBox=(box)=>{
  		this.setState({
  			box:box
  		});
  		console.log(this.state.box);
  }
  OnChange=(event)=>{
  	this.setState({
  		url:event.target.value
  	});
  }
  OnSubmitchange=()=>{
  		this.setState({
  		imageUrl:this.state.url
  		});

  		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.url).then(
        response=>{
      if(response){

      fetch('http://localhost:8081/image',{
      method:'put',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        id:this.state.user.id
      })
    }).then(response=>response.json()).then(data=>{
      this.setState(Object.assign(this.state.user,{entries:data}))

      })
  }
  this.DetectBox(this.FaceDisplay(response))
        .catch (err=>console.error(err));
  })
}
  render() {
  	let button;
  	if(this.state.route==='register')
	      	{	
	      		button=<div>
		      		<Navigation2 click1={this.SignOut} click2={this.RegsiterId}/>
		      		<Register LoadUser={this.LoadUser} submit2={this.SignInId}/>
		      		</div>
	      	}
			else if(this.state.route==='signin')
			{
				button=<div>
					<Navigation2 click1={this.SignOut} click2={this.RegsiterId}/>
		      		<SignIn  LoadUser={this.LoadUser} submit={this.RegsiterId} submit1={this.SignInId}/>
		      		</div>

        }
      		else
      		{
			    button= <div> 
			    	<Navigation click={this.SignOut}/>	
			        <Logo />
			      	<Rank name={this.state.user.name} entries={this.state.user.entries} />
			      	<InputBox  OnChange={this.OnChange} OnSubmit={this.OnSubmitchange}/>
			      	<Recognition image={this.state.imageUrl} box={this.state.box}/>
			      </div>
      		}
    return (
      <div>
	    <Particles style={{position:'fixed', zIndex:'-1'}}
	              params={{
	            		particles: {
	            			number:{
	            				value:50,
	            				density:{
	            					enable:true,
	            					value_area:800
	            				}
	            			}
	            		}
	            	}}
	 	/>
      	{
	      	button
	    }
	  </div>
    );
  }
}

export default App;
