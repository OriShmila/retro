import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


class HomePage extends Component { 
   render(){
      return(
         <div>
         <div className="row">
         <div className="homeTi">
           <div className="offset-md-4 col-md-5">
           <h1 className="ti"><b>דף הבית</b></h1>
     </div>
     </div>
     </div>
         <div className="container">
            <div className="row">
            <div className="col-md-8 offset-md-2 ">
            <h2><b>מי אנחנו?</b></h2>
               <h5><p>רטרו פלוס היא חברה שנועדה לעזור לכם למצות את זכויותיכם בתחום החזרי
                המס בצורה היעילה ביותר. אנו מאמינים במיצוי זכויות הפרט
                ובנגישות מירבית לידע הכלכלי הקיים, כך שהחוק יעבוד לטובתכם.</p>
                <p>בעזרת מענה על שאלון קצר תוכלו לדעת האם אתם זכאים להחזר מס,
                    ואם נמצאתם זכאים- נציגנו יחזור אליכם בהקדם להמשך התהליך. </p></h5>
                    <div className="homeButt">
               <Link to='./eligibilityCheck'><Button variant="warning"
                   className="btn-lg" type="button">
                  לבדיקת זכאות</Button></Link></div>
                  <h2><b>הידעת?</b></h2>
                  <h5><p>רק בשנת 2019 ___ שכירים היו זכאים להחזרים בסכום של 
                     ___ (יחד או בממוצע?) מרשות המיסים. </p></h5>
                  <h2><b>למה אנחנו? </b></h2>
                  <h5><p>ברטרו פלוס תקבלו יחס אישי, מהיר ומקצועי 
                     לפנייתכם. בזכות הייעול הטכנולוגי קיצרנו עבורכם תהליכים, 
                     באופן שמאיץ את משך הזמן עד קבלת ההחזר ומוריד את עלויות הייעוץ. כמו כן, 
                     הפרטים שלכם נשמרים בבטחה אצלנו וניתן לחדש את הבקשה מדי שש שנים.</p></h5>
               <div className="homeMid"/>
               <h2><b>איך זה עובד?</b></h2>
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
                <h2><b>עלינו:</b></h2>
                <h5><p><b>שירה שמילה,</b>מנכ"לית <br/>
                -	בוגרת __   (20...-20...) בתעודת __, ועוסקת בתחום כבר __ שנים בבנק\ חברת __. 
               אם לשני ילדים ונשואה ל__. מייסדת החברה ו...?  
               </p></h5>
               <h4><b>הייתי רוצה לשמוע עוד. מה ניתן לעשות?</b></h4>
               <h5>צור עימנו קשר או השאר את פרטיך ונחזור אליך בהקדם, בעמוד יצירת הקשר\ כאן. </h5> 
               <div className="homeButt">
               <Link to='./contact'><Button variant="warning"
                   className="btn-lg" type="button">
                  ליצירת קשר</Button></Link></div>

            </div>
            </div>

            </div>
            </div>

      )
   }
}     
export default HomePage;


  