# simple_firebase_9
If you are interested in firebase 9, here is some information about it <br>

******************************************* Second Part *******************************************<br>
1.step
Open this link https://console.firebase.google.com/ <br>
---add new project or create project <br>
---Get started by adding Firebase to your app we have 3 options: ios,andorid and web we click on the web  <br>
--Give it a name -> click register app -> click contiune the console and now  we can see this new app<br>
--Click 1 app -> click on the cog and we can see the settings -> scroll down we have three points select the configuration and copy the content to indexjs <br>

2.step <br>
 ---<strong>npm i firebase</strong> <br>
 ---import initializeApp from "firebase/app"  <br>
 ---and use this -> initializeApp(firebaseConfig) -> in the index.js  <br>

3.step <br>
 ---https://console.firebase.google.com/ --> click on your project -> click Firestore Database -> click create database<br>
 ---You have two options: --start in production mode<br>
                           Your data is private by default. Client read/write access will only be granted as specified by your security rules.
  <br>
                          --start in test mode <br>
                          The default security rules for test mode allow anyone with your database reference to view, edit and delete all data in your database for the next 30 days <br>
                          ---select the Cloud Firestore location and enable<br>

4.step <br>
 ---start collection => enter your Collection ID it could be almost anything: games,books,videos, or anything. My collection ID games <br>
 => click on Auto-ID and firebase automatically generates unique id <br>
 => Add field, type, and Value <br>
 =>My field games | type: string | values: dota<br>
 =>I add field and this filed Creator| type: string | value: IceFrog<br>

5.step<br>
 <br>

<br>


