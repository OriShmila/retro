import React, {Component} from 'react';

class RetroPlusAdmin extends Component { 
   error= 'שם משתמש או סיסמה אינם נכונים';

   constructor (props){
      super (props);
      this.state = {user: '',
                    password: '',
                    isAccess: true,
      };
   }

   handleSubmit(event){
      event.preventDefault();
      fetch('http://192.168.43.141:5000/admin/loginAdmin',{
         method: 'POST',
         mode: "cors",
         body: JSON.stringify(this.state),
         redirect: "follow",
         headers: {'Content-Type': 'application/json',
                  'Accept': 'application/json'}
       }).then((res) =>{ 
       if (res.redirected){
          window.location.href = res.url;
       }
       else{
         this.setState({isAccess: false})
       }
      }).catch
       ((err) => console.error(err))
      }
   
   render(){
      return(
       <div className="login-form">
			<h1>Login Form</h1>
			<form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" name="username" placeholder="Username" value={this.state.user}
             onChange={(e) => this.setState({user: e.target.value, isAccess: true})} required/>
            <input type="password" name="password" placeholder="Password" autoComplete="on"
            onChange={(e) => this.setState({password: e.target.value, isAccess: true})} required/>
           {!this.state.isAccess ? <span className="eror">{this.error}</span> : null}
				<input type="submit"/>
			</form>
		</div>

      )
   }
}     
export default RetroPlusAdmin;
