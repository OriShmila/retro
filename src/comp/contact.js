import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Details from './details';

class Contact extends Component { 
   constructor(props){
      super(props);
      this.state = {fields: Object.assign({},this.props.fields),
                    temp: Object.assign({},this.props.temp), 
                    isReg: false,
                    isSuccess: null
                   };
      this.answer = this.answer.bind(this);
      this.handleSubmitCheck = 
      this.handleSubmitCheck.bind(this);
   }

   vis= "visible";
   componentDidMount(){
      document.body.style.overflow = this.vis
    }
  
   answer(){
      if (this.state.isSuccess === true){
         return(
            <label><h5><p>{this.state.fields.firstName}
               לצערינו אינך זכאי/ת להחזר כרגע<br/>
            תוכל לנסות שוב בשנה הבאה</p></h5>
           <Button autoFocus variant="light"
            className="btn-lg" onClick={() => {
            this.setState({isReg: false})}} type="button">
            לאישור </Button></label>
         )
      }
      else{
         return(
            <label><h5><p>מצטערים יש תקלה במערכת אנא נסה מאוחר יותר</p></h5>
           <Button autoFocus variant="light"
            className="btn-lg" onClick={() => {
            this.setState({isReg: false})}} type="button">
            לאישור </Button></label>
         )
      }
   }

   handleSubmitCheck(event) {
      event.preventDefault();
      console.log("send reg")
      this.props.submitData("registration", this.state, true).then((val)=>{
         if (val){
            this.setState({isSuccess: true});
         }
         else{
            this.setState({isSuccess: false});
         }
      })

      this.setState({isReg: true})
   }

   render(){
      return(
         <div>
          {this.state.isReg ? ( document.body.style.overflow = "hidden",
          <Alert key="answer" fade={false}>
            <div className="ans1">
              {this.answer()}
            </div> 
          </Alert>) : this.componentDidMount()
        }
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
               <fieldset disabled={this.state.isReg}>
            <Details fields={this.state.fields} temp={this.state.temp}/>
            <br/>
              <div><Button variant="info" type="submit">שלח</Button></div>
              </fieldset>
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


  