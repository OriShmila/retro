import React, {Component, Fragment} from 'react';
import HomePage from './comp/homePage';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
 } from 'react-router-dom';
import EligibilityCheck from './comp/eligibilityCheck';
import RetroPlusContract from './comp/retroPlusContract';
import RetroPlusAdmin from './comp/retroPlusAdmin';
import Contact from './comp/contact';
import Registration from './comp/registration';
import {Navbar, Nav} from 'react-bootstrap';
import axios from 'axios';

class App extends Component { 
   constructor (props){
      super (props);
      this.state = {
        fields: {phon: '', firstName: '', lastName:'', id: '',
          email: '', numBoy: '', family: '', gender: '', isShare: ''
                },
          temp: { phonNum: '',  beginNum: '', didContact: false, didReadContract: false, isLeagal: true,
          isBoy: ''},   
          check: [{},{},{}],
          aler: {isEligibility: false,
                 answer: null}  
                };

                  this.changeData = this.changeData.bind(this);
                  this.submitData = this.submitData.bind(this);
   }

   changeData(event, val){
    if (event === true){
      console.log(222)
        val.temp.didContact = event;
        this.setState(val);
    }
    else{
        let copy = this.state.temp;
        copy.didContact = event;
        this.setState(copy);
    } 
  }

  submitData(status, val, param){
    val.fields.phon = val.temp.beginNum + val.temp.phonNum; 
    if (param === true){
    val.fields[status] = 'yes';
    }
    let copy = this.state;
    Object.keys(val).forEach((key) => {
        copy[key] = val[key]
      });
    copy.fields.phon = val.fields.phon;
    this.setState({copy});

    return this.handleSubmit(status);
    }


   async handleSubmit(status){
    let copy = {};
    copy.fields = this.state.fields;

    if(status === "eligibility")
      copy.check = this.state.check;

     return axios.post('http://192.168.43.141:5000/post', copy).then(async(res) => {
        return await res.data;
      }).catch
    (err => console.error(err));
   }

   routing(){
    return(
      <Navbar fixed="top" bg="info" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
      <div className="container">
        <Nav className="mr-auto">
        <NavLink to="/" exact className="link" activeClassName="active" >דף הבית</NavLink>
          <NavLink className="link" activeClassName="active" to="/eligibilityCheck">לבדיקת זכאות</NavLink>
          <NavLink className="link" activeClassName="active" to="/contact">צור קשר</NavLink>
          <NavLink className="link" activeClassName="active" to="/retroPlusContract">לתקנון החברה</NavLink>
        </Nav>
        </div>
      </Navbar.Collapse>
      <Navbar.Brand className="navBra" href="#home">Retro Plus</Navbar.Brand>
    </Navbar>
    );
    };
      
   render(){
      return(
    <div className="container my">
      <Router>
       <Fragment>
         <this.routing/>
         <Switch>
    <Route exact path='/' render={() => <HomePage/>} />
    <Route path='/eligibilityCheck'  render={() => <EligibilityCheck detail={this.state}
    submitData={this.submitData}/>}/>
    <Route path='/contact' render={() => <Contact fields={this.state.fields} temp={this.state.temp}
    submitData={this.submitData}/>}/>
    <Route path='/registration' render={() => <Registration fields={this.state.fields} temp={this.state.temp}
    submitData={this.submitData}  changeData={this.changeData}/>}/>
    <Route path='/retroPlusContract' render={() => <RetroPlusContract didContact={this.state.temp.didContact}
    changeData={this.changeData}/>}/>
    <Route path='/retroPlusAdmin' component={RetroPlusAdmin}/>
    <Route component={() => <div>404 לא נמצא</div> }/>
    </Switch>
    </Fragment> 
    </Router>
       </div>
  )
}
}
export default App;  


  