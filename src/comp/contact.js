import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Details from './details';

class Contact extends Component { 
   constructor(props){
      super(props);
      this.state = {fields: Object.assign({},this.props.fields),
                    temp: Object.assign({},this.props.temp), 

                   };

      this.handleSubmitCheck = 
      this.handleSubmitCheck.bind(this);
   }

   handleSubmitCheck(event) {
      event.preventDefault();
      console.log("send reg")
      this.props.submitData("registration", this.state, true).then((val)=>{
         if (val){
            alert (this.state.fields.firstName + ' פרטיך נכנסו למערכת נציגנו ייצרו איתך קשר');
         }
         else{
            alert ('מצטערים יש תקלה במערכת אנא נסה מאוחר יותר');
         }
      })
   }

   render(){
      return(
         <div>
         <div className="row">
         <div className="conTi">
           <div className="offset-md-4 col-md-5">
           <h1 className="ti"><b>צרו איתנו קשר</b></h1>
     </div>
     </div>
     </div>
         <div className="container">
     <div className="row de">
            <div className="userdetail span-2">
            <h3> איך ליצור איתך קשר</h3>
            <form className="in" onSubmit={this.handleSubmitCheck}>
            <Details fields={this.state.fields} temp={this.state.temp}/>
            <br/>
              <div><Button variant="info" type="submit">שלח</Button></div>
             </form>
             </div>
             <div className="offset-3"/>
            <div className="conac">
           <h3>ליצירת קשר</h3><br/>
           <h5><p>מספר הטלפון שלנו <br/>
           0586603050</p>
           <p>כתובת המייל שלנו<br/>
            retro-plus111@gmail.com</p></h5>
            </div>
            </div>
            </div>
            
            </div>
            
    )
   }
}     
export default Contact;


  