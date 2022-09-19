<h4>Project: User manager :<h4>

<p>
This is ab simple ack-end user manager is a system built using the model viewer controller frame work using Node js, Express js and Mongo Atlas DB. The system exposes endpoints that allow for user access control, password recovery, Session management, user data management (CRUD operations on user data). The endpoints are secured using middleware and session cookies to authorize access. 
</p>

The system should expose endpoints that provide the following services:
1. Login validation, Normal html and goggle log in , 
2. Password recovery
3. Session creation
5. Access control (route authentication through sessions)
6. Security management 
7. Route authentication, 
8. Reporting


<h5>Software ======================================================================================================================================================= </h5>

1. Node js 
2. Express js

<h5>Libraries =======================================================================================================================================================</h5>

Dev dependences:
1.  nodemon 
1.  cross-env

Dependences:
2.  connect-mongodb-session
3.  cookie-parser
5.  crypto-js
6.  dotenv
8.  express
9.  express-fileupload
10. express-session
11. mongoose
12. moment
13. nodemailer
14. passport

<h5>Database</h5>
•	Mongo DB 

<h4>Components
=================================================================================================================================================</h4>

<h5>1  Server(server.js) ============================================================================</h5>
<h5>2  App(app.js) ==================================================================================</h5>



<h5>3 models (Data models)  =========================================================================</h5>

      1. user model  (user.data.model.js)
<br>  


<h5>4 Config files  =================================================================================</h5>

1. .Config.env:

# Node Config
NODE_ENV= DEVELOPMENT
ENV_PORT= 3000
MONGO_URI= ongodb+srv://<UserName>:<password>.4p1ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
<br>

# JWT
SALT=
SECRET=
<br>

# Google 
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
<br> 

# Password recovery
BASE_URL = 
<br>

2. db.js:
3. passport.js
<h5>5 Controllers  ==============================================================================</h5>

1. main (main.controller.js)
<ul>
	<li>
		@controller  test 
	    @desc    test usrl
        @route   GET: /test
	</li>
</ul>

2. user-account-access (user-account-access.controller.js)
<ul>
	<li>
		@controller  register 
	    @desc    Register user 
        @route   POST: /register
        @Model   /models/user.data.model
	</li>
	<li>
		@controller  login 
	    @desc    Log in  
        @route   POST /login
        @Model   /models/user.data.model
	</li>
	<li>
		@controller  loginGoogle
        @desc    Log in google 
        @route   POST /:userId/:token
        @Model   /models/user.data.model 
	</li>
	<li>
		@controller  logout
        @desc    Log out user
        @route   POST /:userId/:token
	</li>
</ul>


3. user-account-recovery (controllers/user-account-recovery.controller.js)
<ul>
	<li>
		@controller  updateRecoveredPassword
        @desc       Send password recovery email link
        @route      POST /recover/password
	</li>
	<li>
		@controller  updateRecoveredPassword
        @desc       Recive and update new password
        @route      POST /:userId/:token
		@Model      /models/user.data.model 
	</li>
</ul>

<b>accounts-access <br> 
<br> 


<h5> 6 error handlers(handlers)  ===================================================================== </h5> 

1. errorHandler.js
<ul>
	<li>
	catchErrors
	</li>
	<li>
	    mongoseErrors
	</li>
	<li>
	    developmentErrors
	</li>
	<li>
	    productionErrors
	</li>
	<li>
	    notFound
	</li>
	<li>
	    MongoServerSelectionError
	</li>
</ul>


<h5>7 middleware  ==================================================================================== </h5> 
	auth-session.middleware:
<br> 
   "Authenticates users account  end points using session variables"
<br> 

	auth.middleware:
<br> 
   "Authenticates administration end points using header authorisation"
<br>  
   
	user-account-recovery.moddleware:
<br> 
   "Authenticates temporary end points using cookies"

<h5>8 Git ignore files =============================================================================== </h5> 

1.    node_module
2.    .env


<h5>9 Config files  =================================================================================</h5>



<h5>10 Assets  ======================================================================================</h5>

	Images
  
