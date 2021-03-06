import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class retroPlusContract extends Component { 
    componentDidMount(){
        document.body.style.overflow = "visible"
      }
    
   handleClick(){
      this.props.changeData(false);
   }

   render(){
      return(
        <div>
        <div className="row">
        <div className="contractTi">
          <div className="offset-md-4 col-md-5">
          <h1 className="ti"><b>לתקנון החברה</b></h1>
    </div>
    </div>
    </div>
         <div className="container col-md-8">
             
             <h3>הסכם לתשלום עמלת עבודה עבור שרות החזר מס</h3>
     הסכם בין המשתמש (להלן הלקוח) לבין "רטרו פלוס" ע.מ  316550573 מרח' מנדלי מוכר ספרים  8רחובות (להלן : "הספק") מצד שני.
<br/> <br/>
     <b>לפיכך הוסכם בין הצדדים כדלקמן</b><br/><br/>
     <ol>
         <li>מינוי הספק – הלקוח ממנה בזאת את הספק ומי 
             מטעמו לפעול ולטפל בשמו בנושא החזרי מס להם עשוי להיות זכאי.</li>
         <li>השירות המוצע – הטיפול באמצעות ספק יכלול את בדיקת 
             זכאותו של הלקוח להחזר מס, פניה לרשויות המס בעניינו והמשך
            המעקב בפניה עד לקבלת תשובת רשויות 
            המס ובמידת הצורך הגשת בקשת תיקון בשמו ו/או מתן יעוץ להמשך תהליכים.</li>
        <li>הלקוח מצהיר ומסכים בזאת כי ימסור את כל הנתונים 
            המלאים והמדויקים בנוגע לעצמו ולבני משפחתו לעניין הכנסות נוספות
            מכל מקור שהוא, ללא יוצא מן הכלל לגבי כל 
            אחת מן השנים עליהם מבקש החזר מס וכל המידע, המסמכים והנתונים שנמסרו
            לספק הינם נכונים ומלאים.</li>
        <li>הלקוח מתחייב להמציא לספק את המסמכים 
            הנדרשים על ידו לצורך מתן שירות הנ"ל בפרק זמן שאינו עולה על  30 יום ממועד
            חתימת הסכם זה.</li>
        <li>לצורך הסכם זה, יראו כ"החזר מס'" 
            את הסכום שיקבע על פי שומת מס הכנסה לתקופה הרלוונטית לבקשת הלקוח, לפני כל
            קיזוז ו/או עיקול בגין חוב המגיע ממנו לצד ג'.</li>
        <li>לאחר שנעשתה בדיקת זכאות ונמצא 
            כי הלקוח זכאי להחזר, מתחייב הלקוח להגיש את הבקשה באמצעות הספק "רטרו פלוס"
            בלבד. במידה ויחליט להגיש את הבקשה
            באמצעות ספק אחר או בעצמו או לא להגיש בכלל, יחויב הלקוח בשכ"ט לפי הסכם זה.</li>
        <li>במועד זה יסדיר הלקוח את אמצעי 
            התשלום באמצעות מסירת מס' כרטיס אשראי או שיק בסכום העמלה ללא תאריך משוך
            מהחשבון המזוכה.</li>
            <li>החיוב בפועל יתבצע ביום הזיכוי על פי הודעה ממס הכנסה.</li>
        <li>התמורה ותשלום עמלת העבודה - הלקוח ישלם את עמלת העבודה לספק בהתאם למפורט להלן:
            <ul>
                <li>עבור בדיקה ראשונית של היתכנות ההחזר לא ישלם הלקוח דמי טיפול ראשוניים.</li>
                <li>עבור בדיקה ראשונית של היתכנות ההחזר לא ישלם הלקוח דמי טיפול ראשוניים.</li>
                <li>החזר מס מעל -  ₪10,000, יחויב בעמלת עבודה בשיעור מופחת של %19 בתוספת מע"מ כחוק.</li>
                <li>החזר מס מעל - ₪20,000, יחויב בעמלת עבודה בשיעור מופחת של %18 בתוספת מע"מ כחוק.</li>
                <li>החזר מס מעל -  ₪30,000, יחויב בעמלת עבודה בשיעור מופחת של %17 בתוספת מע"מ כחוק.</li>
                <li>החזר מס מעל – ₪40,000, יחויב בעמלת עבודה בשיעור מופחת של %16 בתוספת מע"מ כחוק.</li>
            </ul></li>
        <li>יובהר בזאת כי הספק אינו אחראי בכל מקרה בו יתגלה ללקוח חוב במס הכנסה.</li>
        <li>יובהר בזאת כי התחשיבים שנעשים
             מבוססים, על המידע שמסר ונאסף על ידי הלקוח. בכל מקרה בו יתברר כי קיימים אירועי
            מס נוספים, שלא הובאו לידיעת הספק במעמד עריכת התחשיבים, האחריות על הלקוח.</li>
            <li>קבלת החזר המס – החזר המס יבוצע במלואו ישירות לחשבון הבנק של הלקוח.</li>
     </ol>
     <div className="end">
     רח' מנדלי מוכר ספרים, 8 רחובות<br/>
     <b>MOBILE:</b> 058-6603050 &nbsp; <b>FAX:</b> 08-9417599 <br/>
    <b> Email:</b> retro-plus111@gmail.com
     <br/><br/>
     {this.props.didContact ? <Link to='./registration'><Button variant="outline-info"
      className="btn-lg" type="button"
     onClick={this.handleClick.bind(this)}>לסיום הרשמה</Button></Link> : null}
     </div>
  </div>
  </div>

      )
   }
}     
export default retroPlusContract