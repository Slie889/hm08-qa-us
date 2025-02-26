Urban Route UI Testing Project

A. The purpose of this project testing is automating the UI testing with the WebdriverIO framework. The benefit of using WebdriverIO framework is:
   - Provides a high-level Application Programming Interface (API)
   - Makes writing, maintaining, and scaling tes suites easier.
   - Fits naturally into modern web development stacks
   - Allows developers to write tests in a familiar language.


B. We will use Git and GitHub for this project. Set-up instruction as follow below,

   Step 1. Clone the repo to your computer
   Linked your account with GitHub, a repository will be created automatically. The repository name will be hm08-qa-us.  

   Go to GitHub and clone the new repo to your local computer, using the following steps:
   
   1. Open your preffered terminal. If you're on Windows, you will need to use Git Bash.
   2. Create a directory to store all of your projects.
      Example:
      cd ~ # make sure you're in your home directory;
      mkdir projects # create a folder called projects;
      cd projects # change directory into the new projects folder
   3. Clone the repo.
   

  Step 2. Work with the project locally
   Open the local copy project folder on your computer.

   Before starting to work on the project, run npm install from the console in your project folder. 
   Copy a server URL so that your code can access the server. 

   Server address: https://cnt-347e6e3a-bc67-4764-9dc8-47934b5a9732.containerhub.tripleten-services.com

   In wdio.conf.js, replace the base URL with the Urban Routes URL generated above.


C. The Testing project include several task,

   Tasks 1.
   
   Write several tests to check the functionality of the Urban Routes. Write your tests in the createAnOrder.e2e.js file located in the test/specs folder.

   Write automated tests covering the full process of ordering a taxi. The test should cover:
   
   1. Setting the address
   2. Selecting Supportive plan
   3. Filling in the phone number
   4. Adding a credit card (Tip: the "link" button does not become active until the card CVV field on the "Adding a card" modal id="code"; class="card-input" loses focus.
      To change focus you can simulate the user pressing TAB or clicking somewhere else on the screen).













       
   
