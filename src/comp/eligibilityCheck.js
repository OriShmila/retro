import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Details from './details';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

class EligibilityCheck extends Component {
  askCheck = [{
    '0': "האם אתה או בן זוגך עצמאים?",
    '1': "האם את/ה או בן זוגך הגשתם בקשה להחזרי מס?",
    '2': "מה סכום משכורתך החודשית הגבוהה ביתר?",
    '3': "האם מנכים מס הכנסה ממשכורתך או משכורת בן זוגך?",
    '4': "האם את/ה או בן זוגך משכתם פנסיה או פיצויים מקופת גמל עם ניכוי מס?",
    '5': "האם שילמת מס שבח?",
    '6': "האם התגוררת באחד מששת השנים האחרונות באחד מיישובי הספר?",
    '7': "האם יש לך ילד מיוחד, עבר וועדת השמה או זכאי לקצבה מביטוח לאומי?",
    '8': "האם את/ה או בן זוגך השתחררתם מהצבא אחרי שנת 2011?",
    '9': "האם את/ה או בן הזוג הינכם עולים חדשים?",
    '10': "האם את/ה אן בן זוגך סיימתם תואר אקדמי/דיפלומה משנת 2011 ואילך?",
    '11': " האם את/ה או בן זוגך שילמתם ביטוח חיים (למשכנתא וכדומה)?",
    '12': "האם את/ה או בן זוגך השקעתם בניירות ערך?",
    '13': "האם יש לך או לבן זוגך הפסקות עבודה של חודש לפחות?",
    '14': "האם את/ה או בן זוגך מקבלים כספים מביטוח לאומי? (גמלאות, לידה אן אבטלה)?",
    '15': "האם תרמתם למוסד בעל זכאות להחזר מס (לפי סעיף 46)?",
    '16': "האם את/ה או בן זוגך מקבלים קצבת נכות מביטוח לאומי מעל 89%?",
    '17': "האם אתה גרוש ומשלם מזונות?",
    '18':"האם את/ה משפחה חד הורית?"
    },
    {
    '00': "ממתי?",
    '01': "מתי?",
    '02': "וכן מהי משכורת בן הזוג?",
    '04': "מתי?",
    '05': "באיזו שנה?",
    '06': "באילו שנים?", 
    '07': "ממתי?",
    '09': "ממתי?",
    '010': "ממתי?",
    '016': "ממתי?",
    },
    {
    '004': "מאיזו קופת גמל?",
    '006': "איפה?",
    },
    ];

    eligibility = [
        <label><h2>ברכותינו!</h2>
          <h4><p>הינך זכאי/ת להחזר.<br/>
          להרשמה מהירה אונליין:</p></h4>
          <br/>
         <Link to='./registration'><Button autoFocus variant="light"
         className="btn-lg" type="button">
         להרשמה</Button></Link></label>,
       <label><h5><p>לצערינו אינך זכאי/ת להחזר כרגע<br/>
          תוכל לנסות שוב בשנה הבאה</p></h5>
          <Button autoFocus variant="light"
         className="btn-lg" onClick={() => {let copy = this.state.aler;
         copy.isEligibility = false;
         this.setState(copy)}} type="button">
         לחזרה</Button></label>
    ]

    constructor (props){
      super (props);
      this.state = {
        aler: this.props.detail.aler,
        answer: this.props.detail.answer,
        fields: Object.assign({},this.props.detail.fields),
        temp:   Object.assign({},this.props.detail.temp),
        check:  [{},{},{}],
      };

  } 
  
  handleChange(field, index, event){
    if (field === 'gender'){
      let statCopy = this.state.fields;
      statCopy.gender = event.target.value;

      this.setState({fields: statCopy});
    }
    else{
      let statCopy = this.state.check;
      statCopy[field][index] = event.target.value;
    
      if (index === '06') {
          statCopy[1][index] = statCopy[1][index].replace
          (/^[1-2]{1,1}[0-9]{3,3}$/,
             statCopy[1][index] + '-');
      }

      if (event.target.value === 'no' && field === 0){
        if (statCopy[1][index]){
          statCopy[1][index] = ''
        }
      
        if (statCopy[2][index]){
          statCopy[2][index] = ''
        }
      }
      this.setState({check: statCopy});
  }

  }

  handleSubmit(event){
    event.preventDefault();
    let temp;
    let copy = this.state.aler;

    if (this.isEligibitity()){
      copy.answer = 0;
      temp = true;
    }
    else{
      copy.answer = 1;
      temp = false;
    }
    
    copy.isEligibility = true;
    this.setState(copy);
    this.props.submitData("eligibility", this.state, temp);

  }
  
  isEligibitity(){
    if((this.state.check[0]['4'] !== 'no' && Number(this.state.check[1]['04']) >= 2014) ||
       (this.state.check[0]['5'] !== 'no' && Number(this.state.check[1]['05']) >= 2014) ||
        this.state.check[0]['3'] !== 'no' ||
        (this.state.fields.gender === 'man' && (Number(this.state.check[0]['2']) >= 5850 ||
        Number(this.state.check[1]['02']) >= 7150)) ||
        (this.state.fields.gender === 'woman' && (Number(this.state.check[1]['02']) >= 5850 ||
        Number(this.state.check[0]['2']) >= 7150))){
          if (this.state.check[0]['1'] === 'no' || Number(this.state.check[1]['01']) < 2020){
            return true;
          }
      return false;
    }
  }

  continueAsk(index){
    return(
      this.askCheck[1]['0' + index] ?
        <div className="row">
          <div className="span-2"><label>{this.askCheck[1]['0' + index]}&nbsp;</label>
          {index !== '6' ? <input type="number"
          min="1959" max="2050"
          onInvalid={(e) => e.target.setCustomValidity('יש להכניס שנה')} 
          onInput={(e) => e.target.setCustomValidity('')}  
          onChange={this.handleChange.bind(this, 1, '0' + index)} required></input> :
          <input type="text"
          size="9" maxLength="9" 
          pattern="[1-2]{1,1}[0-9]{3,3}\W?[1-2]{1,1}[0-9]{3,3}"
          value={this.state.check[1]['0' + index] || []}
          onInvalid={(e) => e.target.setCustomValidity('יש להכניס משנה-שנה ')} 
          onInput={(e) => e.target.setCustomValidity('')}           
          onChange={this.handleChange.bind(this, 1, '0' + index)} required></input>}&nbsp;&nbsp;
          </div>
         {this.askCheck[2]['00' + index] ? 
         <div className="span-2"><label>{this.askCheck[2]['00' + index]} &nbsp;</label>
         <input type="text"  maxLength="45"
         onChange={this.handleChange.bind(this, 2, '00' + index)} required></input></div> : 
        null} </div> : null
    )
  }

  buton=()=>{
      let num = 0;
      let bot= [];

      Object.keys(this.askCheck[0]).forEach((key) => {
            bot.push (
              <li className="list-group-item" key={key}><div key={key} className="list">
                <label className="aa">{this.askCheck[0][key]}</label><br/>
            {key === '2' ? 
            <div>
            <input type="number" max="999999999"
            onChange={this.handleChange.bind(this, 0, key)} required></input><br/>
            <label>{this.askCheck[1]['0' + key]}</label><br/> 
            <input type="number" max="999999999"
            onChange={this.handleChange.bind(this, 1, '0' + key)}></input>
            </div>  :
            <div>
              <Form.Group>
                <Form.Check type="radio" id={key} className="bot" name={key} label="כן"
                value="yes"
                 onClick={this.handleChange.bind(this, 0, key)} required/>
                <Form.Check type="radio" className="bot" id={key + '0'} name={key} label="לא"
                value="no"
                 onClick={this.handleChange.bind(this, 0, key)} required/>
                </Form.Group>
              </div>}
            {key === (num++).toString() && this.state.check[0][key] === 'yes' ? 
            this.continueAsk(key) : null}
            </div></li>);
      });
     
      return bot;
    }

  render(){
    return(
      <div className="page">
        <div className="row">
          <div className="checkTi">
            <div className="offset-md-3 col-md-7">
        <h1 className="ti"><b> בדיקת זכאות להחזר מס</b></h1> 
        </div>
        {this.state.aler.isEligibility ?
          <Alert key="answer">
            <div className="ans offset-md-8">
              {this.eligibility[this.state.aler.answer]}
            </div> 
          </Alert> : null
        }
        </div>
        </div>
        <div className="container">
          <div className="row span-5">
        <div className="checks">
         <h3><b> ענה על השאלות ומיד תקבל תשובה בנוגע לזכאותך</b></h3> <br/>
         <h4><b> השאלון מתייחס ל-6 השנים האחרונות (2014 - 2019) </b></h4>
        </div>
       <div className="contact">
        <form className="in" onSubmit={this.handleSubmit.bind(this)}>
          <Details fields={this.state.fields} temp={this.state.temp}/><br/>
          <label><b>ציין את מגדרך (לצורך חישוב הזכאות):</b></label>&nbsp;
          <select required className="gender" onChange={this.handleChange.bind(this,"gender", '')}>
                <option value="">בחר</option>
                <option value="man">גבר</option>
                <option value="woman">אשה</option>
            </select>
           <div  className="check">
            <h4><b>בדיקת זכאות</b></h4><br/><ol className="list-group"><br/>{this.buton()}
            <Button variant="info" type="submit">לבדיקת זכאות</Button></ol></div>
          </form>
          </div> 
          </div>     
          </div>
          </div>
        )
       }
    }     
    export default EligibilityCheck;
