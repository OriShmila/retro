import React, {Component} from "react";
 
class Details extends Component { 
  constructor(props){
     super(props);
     this.state = {
        fields: this.props.fields,
        temp:   this.props.temp
  }
}

  handleChange(field1, field2, event){         
   let copy = this.state;
   copy[field1][field2] = event.target.value;

   if (field2 === "phonNum"){
      if (!(copy[field1][field2] === '' || /^[0-9\b]+$/.test(copy[field1][field2]))){ 
         return;
      }
   }

   this.setState({copy});
   
}

  render(){
     return(
          <div className="contact">
            <h4><b>מלא/י את הפרטים:</b></h4><br/>
            <div>
            <label><b> שם מלא:</b></label><br/>
            <label> שם פרטי:</label>&nbsp;
             <input type="text" placeholder="שם פרטי" value={this.state.fields["firstName"]} size="12"
             maxLength="20"
              onChange={this.handleChange.bind(this, "fields", "firstName")} required pattern="^[\D]+$"
              onInvalid={(e) => e.target.setCustomValidity('יש להכניס שם פרטי')} 
              onInput={(e) => e.target.setCustomValidity('')}/><br/>
              <label>משפחה:</label>&nbsp;&nbsp;
              <input type="text" placeholder="שם משפחה" value={this.state.fields["lastName"]} size="12"
               maxLength="20"
              onChange={this.handleChange.bind(this, "fields", "lastName")} required pattern="^[\D]+$"
              onInvalid={(e) => e.target.setCustomValidity('יש להכניס שם משפחה')} 
              onInput={(e) => e.target.setCustomValidity('')}/></div><br/><br/>
             <label><b>טלפון:</b></label><br/>
             <input type="tel" className="phon" pattern="[0-9]{7}" maxLength="7" size="12" required
             placeholder="מספר טלפון" value={this.state.temp["phonNum"]}
             onChange={this.handleChange.bind(this, "temp", "phonNum")}
             onInvalid={(e) => e.target.setCustomValidity('יש להכניס מספר טלפון תקין')} 
              onInput={(e) => e.target.setCustomValidity('')}/>    
             <select required className="temp.beginNum" onChange={this.handleChange.bind(this,"temp", "beginNum")}
             value={this.state.temp.beginNum}
             onInvalid={(e) => e.target.setCustomValidity('יש לבחור קידומת')} 
             onInput={(e) => e.target.setCustomValidity('')}>
                <option value="">-0</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="077">077</option>
                <option value="050">050</option>
                <option value="052">052</option>
                <option value="053">053</option>
                <option value="054">054</option>
                <option value="055">055</option>
                <option value="056">056</option>
                <option value="057">057</option>
                <option value="058">058</option>
                <option value="059">059</option>
             </select>
             </div>
   )
  }
}     
export default Details;