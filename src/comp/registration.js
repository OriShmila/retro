import React, {Component} from 'react';
import Details from './details';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class Registration extends Component { 
   errors= {didAgree: 'יש לקרוא את החוזה', id: "מספר תעודת זהות אינו חוקי"};

   constructor(props){
      super(props);
      this.state = {fields: Object.assign({},this.props.fields),
                    temp:  Object.assign({},this.props.temp), 
                   };
   }
   
   async handleSubmit(event) {
      event.preventDefault();

      if(!this.handleValidation()){
         let temp = this.state.temp;
         temp.isLeagal = false;
         this.setState({temp});
      }
      else{
         if (this.state.temp.didReadContract){
            console.log("send reg")
            this.props.submitData("registration", this.state, true).then((val)=>{
               if (val){
                  alert (this.state.fields.firstName + ' פרטיך נכנסו למערכת נציגנו ייצרו איתך קשר');
               }
               else{
                  alert ('מצטערים יש תקלה באתר אנא נסה מאוחר יותר');
               }
            });
         }
      }
   }
  
   handleValidation(){
      let fields = this.state.fields;
      let formIsValid = true;

      // id
      if(typeof fields["id"] !== "undefined"){
         let result = 0;
         formIsValid = false;
       
         if (this.state.fields["id"].length > 4){
            let j = 0;
            for (let i = this.state.fields["id"].length - 1;i >= 0; i--){
               let temp = (j % 2 === 0 ? 1 *  this.state.fields["id"][i] : 2 *  this.state.fields["id"][i]);
               result += temp % 10;
               result += parseInt(temp / 10);
               j++;
            }

            formIsValid = result % 10 === 0; 
         }
        
     return formIsValid;
   }
 }

   handleChange(field, event){         
      let copy= this.state;
      if (field === "isBoy"){
         copy.temp[field] = event.target.value; 
          
         if (copy.temp[field] === "no"){
            copy.fields.numBoy = '0';
         }
       }
       
      else{
         copy.fields[field] = event.target.value;   
      }
     
      if (field === "id"){
         if (!(copy.fields[field] === '' || /^[0-9\b]+$/.test(copy.fields[field]))){ 
            return;
         }

         copy.temp.isLeagal = true;
      }

      this.setState({copy});
  }

   boysNum(){
    return(
      <div>
         <label><b>כמה ילדים?</b></label>&nbsp;
         <input type="number" min="1" max="30" value={this.state.fields["numBoy"]} required
         onChange={this.handleChange.bind(this, "numBoy")}></input>&nbsp;&nbsp;
         <label><b>האם כולם משותפים?</b></label>&nbsp;
         <select className="ifShare" 
         onChange={this.handleChange.bind(this, "isShare")} required
         value={this.state.fields.isShare}>
            <option value="">בחר</option>
            <option value="yes">כן</option>
            <option value="no">לא</option>
         </select>
         </div>
     )
  }

  handel(event, field){
   let copy = this.state.temp;
   copy.didReadContract = true; 
   this.setState({ copy});
   this.props.changeData(true, this.state);
  }

  render(){
   return(
      <div className="page">
        <div className="row">
          <div className="regTi">
            <div className="offset-md-4 col-md-5">
        <h1 className="ti"><b>להרשמה אונליין</b></h1> 
        </div>
        </div>
        </div>
      <div className="container">
         <div className="row">
         <div className="offset-3"/>
             <div className="inDetail">
             <Form className="in" onSubmit={this.handleSubmit.bind(this)}>
             <fieldset>
            <Details fields={this.state.fields} temp={this.state.temp}/><br/>
              <label><b>תעודת זהות:</b></label><br/>
              <input type="text" size="9" maxLength="9" placeholder="ת.ז."
              value={this.state.fields["id"]}
               onChange={this.handleChange.bind(this, "id")} required></input><br/>
               {!this.state.temp.isLeagal ? <span className="eror">{this.errors["id"]}</span> : null}
               <br/>
              <label><b>מייל:</b></label><br/>
              <input type="email" pattern="[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*"
              maxLength="80"
               value={this.state.fields["email"]} placeholder="exsmple@exsmple.com"
               onInvalid={(e) => e.target.setCustomValidity('יש להכניס כתובת מייל חוקית')}
               onInput={(e) => e.target.setCustomValidity('')}           
               onChange={this.handleChange.bind(this, "email")} required/><br/><br/>
              <label><b>סטטוס משפחתי</b></label>&nbsp;
              <select className="family"
               onChange={this.handleChange.bind(this, "family")} required
               value={this.state.fields.family}>
                 <option value="">בחר</option>
                 <option value="singal">רווק</option>
                 <option value="married">נשוי</option>
                 <option value="widow">אלמן</option>
                 <option value="divorcee">גרוש</option>
                 <option value="separated">פרוד</option>
              </select><br/><br/>
              <label><b>האם יש לך ילדים?</b></label> &nbsp;
              <select className="isBoy" 
              onChange={this.handleChange.bind(this, "isBoy")} required
              value={this.state.temp.isBoy}>
                 <option value="">בחר</option>
                 <option value="no">לא</option>
                 <option value="yes">כן</option>
              </select>{this.state.temp["isBoy"] === "yes" ? this.boysNum() : null}
              <div className="contract">
              </div><br/>
              <Form.Check type="checkbox">
                 <Form.Check.Input disabled={!this.state.temp.didReadContract ? true : false}
                  required/>
                 <Form.Check.Label>אני מאשר שקראתי והסכמתי לתנאי&nbsp;
              <Link onClick={this.handel.bind(this, "didRead")}
               to='./retroPlusContract'>חוזה העסקה</Link>
               <br/>
               {!this.state.temp.didReadContract ? <span className="eror">{this.errors["didAgree"]}</span> : null}
               </Form.Check.Label></Form.Check>
              <div><Button variant="info" type="submit">שלח</Button></div>
             </fieldset>
             </Form></div>
             </div>
             </div>
             </div>
     )
   }
}     
export default Registration;

