const express=require("express");
const app=express();
const path=require('path');
const ejs=require("ejs");
const config=require("./key.json");
const firebaseConfig=require("./key");
// const {firebase} = require('firebase/app');
// const {getAuth} =require('firebase/auth');
// const { getAuth } = require("firebase/auth");
// const { initializeApp } = require("firebase/app");
// const admin = require("firebase-admin");
// const { signInWithPhoneNumber, RecaptchaVerifier } = require("firebase/auth");

// const { getAppCheck, enableDebugMode }=require("@firebase/app-check");
const { initializeApp} = require('firebase/app');

const { getAuth, createUserWithEmailAndPassword,signInWithPhoneNumber, RecaptchaVerifier} = require("firebase/auth");


// const serviceAccount = require("./key.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });




app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');

app.set("view engine", "ejs");;

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);




// async function sendVerificationCode(phoneNumber) {
//     try {
//       const result = await firebase.auth().signInWithPhoneNumber(phoneNumber);
//       // You can store the verification ID for later use if needed
//       const verificationId = result.verificationId;
//       console.log('Verification code sent successfully', result);
//     } catch (error) {
//       console.error('Error sending verification code:', error);
//     }
//   }





























// app.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             res.status(400).json("Email and password are required");
//         } else {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;
//             res.json(user);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// });




























// window.recaptchaVerifier = admin.auth().RecaptchaVerifier('recaptcha-container', {
//     'size': 'invisible',
//     'callback': (response) => {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       onSignInSubmit();
//     }
//   });


// ....................................................................
app.get('/recaptcha',(req,res)=>{
    res.render('recaptcha');
})


// app.post('/sendOtp', async (req, res) => {
//     try {
//         const phoneNumber = req.body.phoneNumber;
//         if (!phoneNumber) {
//             return res.status(400).json({ error: 'Phone number is required' });
//         }
//         console.log(phoneNumber)

       

//         const confirmation = await signInWithPhoneNumber(auth, phoneNumber);
//         console.log(confirmation)
//         const verificationId = confirmation.verificationId;
//         console.log(verificationId);
//         res.json({ verificationId });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to send OTP' });
//     }
// });

// app.post('/verifyOtp', async (req, res) => {
//     try {
//         const verificationId = req.body.verificationId;
//         const verificationCode = req.body.verificationCode;
//         const credential = confirmPhoneNumberVerification(auth, verificationId, verificationCode);
//         const userCredential = await credential;
//         const user = userCredential.user;
//         res.json(user);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to verify OTP' });
//     }
// });

app.listen(3000,()=>{
    console.log("app listen in port 3000");
  })