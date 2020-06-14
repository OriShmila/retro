import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class HomePage extends Component { 
   render(){
      return(
         <div className="homeBody">
         <div className="row">
         <div className="homeTi">
           <div className="offset-md-4 col-md-6">
           <h1 className="tiHome"><b>רטרו פלוס</b></h1>
     </div>
     </div>
     </div>
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
            <h1><b>מי אנחנו?</b></h1><br/>
               <h5><p>רטרו פלוס הינו משרד יעוץ מס המתמחה 
                  בתחום החזרי המס.<br/>
                   במשרדנו נעזור לכם למצות
                    את זכויותכם בתחום החזרי המס, פריסת מס שבח, פטור מיסים על נכות ועוד.<br/>
                  אנו מאמינים במיצוי זכויות הפרט
                ובנגישות מירבית לידע הכלכלי הקיים, כך שהחוק יעבוד לטובתכם.
                בעזרת מענה על שאלון קצר תוכלו לדעת האם אתם זכאים להחזר מס,
                    ואם נמצאתם זכאים- נציגנו יחזור אליכם בהקדם להמשך התהליך. </p></h5>         
             
                    <div className="homeButt">
               <Link to='./eligibilityCheck'><Button variant="warning"
                   className="btn-lg" type="button">
                  לבדיקת זכאות</Button></Link></div>
                  </div>
              </div>
              
                <div className="homeMid"/>
               <h1><b>איך זה עובד?</b></h1><br/>
               <h5><p>בשני שלבים פשוטים:<br/>
               1.	גשו ללשונית "בדיקת זכאות" <br/>
               2.	אם נמצאתם מתאימים, יופיע בפניכם כפתור "להרשמה".
                השאירו שם את פרטיכם ונציגנו יחזור אליכם בהקדם להמשך התהליך.<br/>
                אין מה לדאוג- הפרטים שלכם שמורים בצורה הטובה ביותר ולא ישותפו עם אף גורם אחר.</p>
               </h5>
               <div className="homeButt">
               <Link to='./eligibilityCheck'><Button variant="warning"
                   className="btn-lg" type="button">
                  לבדיקת זכאות</Button></Link></div>
              
               <h3><b>הייתי רוצה לשמוע עוד. מה ניתן לעשות?</b></h3>
               <h5>צור עימנו קשר או השאר את פרטיך ונחזור אליך בהקדם, בעמוד יצירת הקשר\ כאן. </h5> 
               <div className="homeButt">
               <Link to='./contact'><Button variant="warning"
                   className="btn-lg" type="button">
                  ליצירת קשר</Button></Link></div>
                  <div className="boxReason">
              <div className="col-md-10 offset-md-1">
                  <h1 className="why"><b>למה אנחנו? </b></h1>
                  <h5><p>ברטרו פלוס תקבלו יחס אישי, מהיר ומקצועי 
                     לפנייתכם. כמו כן, 
                     הפרטים שלכם נשמרים בבטחה אצלנו וניתן לחדש את הבקשה מדי שש שנים.</p></h5>
                     </div>
                  <div className="row">
                  <div className="col-md-3 reason">
                  <div className="cost"/>
                <label><h3><b>עלויות כספיות</b></h3>
                <h5>משרדנו הינו בין היחידים שאינו גובה עמלה לפתיחת תיק
               רק במידה ויש החזר - יש עמלה<br/>
               לא קיבלת לא שילמת!!!<br/>
               כמו כן התשלום בעת קבלת הכסף ממס הכנסה. לא לפני!</h5></label>
               </div>
                <div className="col-md-3 reason">
                <div className="birocratic"/>
                <label><h3><b>אפס בירוקרטיה</b></h3>
                <h5>כמייצגים מורשים של מס הכנסה ננפיק בשמכם את המסמכים.<br/>
                כך נחסוך לכם התרוצציות מיותרות למעסיקים, חברות ביטוח, ביטוח לאומי ועוד.</h5></label>
                </div>
                <div className="col-md-3 reason">
                <div className="profesion"/>
                <label><h3><b>מקצועיות</b></h3>
                <h5><ul>
                   <li>יועצי מס מומחים בתחום החזר מס.</li>
                   <li>מתחייבים להחזר הגבוה ביותר.</li>
                   <li>בדיקת כל הקריטריונים.</li>
                   <li>הוגנות.</li>
                </ul></h5></label></div> 
                <div className="col-md-3 reason">
                <div className="attention"/>
                <label><h3><b>ליווי אישי</b></h3>
                <h5>מבדיקת הזכאות ועד קבלת ההחזר - המומחים שלנו ילוו אותך לאורך התהליך.<br/>
                תמיד תוכלו לדבר עם המומחים שלנו בערוצים השונים.</h5></label>
                </div>
               </div></div>
            </div>
            </div>

      )
   }
}     
export default HomePage;


  