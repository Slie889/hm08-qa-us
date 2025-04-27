Urban Route UI Testing Project

A. The purpose of this project testing is automating the UI testing with the WebdriverIO framework. The benefit of using 

   WebdriverIO framework is:
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
   


C. How to run the Project

   We are using the WebdriverIO, a populer open-source testing framework with a powerful set of APIs for webpage 
   interaction. WebdriverIO (WDIO) will help to create and run test for web applications. 

   
   Step to run the Project:
   1. We need to create a directory for test project
      
      mkdir sample-wdio-project

   2. After creating the directory, we need to set up a Node.js project
      # move terminal to the directory that you want to use
      cd sample-wdio-project

      # run the npm command to initialize a project
      npm init --yes

   3. npx will create a project file as follow below,

      
      <img width="517" alt="image" src="https://github.com/user-attachments/assets/8a4a1bb5-aa32-43cc-b04c-17e8367530d8" 
      />


   4. Install all its dependencies, to do this, run the following command

      npx wdio config

   5. The WDIO installer will run

       

      <img width="508" alt="image" src="https://github.com/user-attachments/assets/2af1fa9a-fcaf-407c-a45d-8d76a280ab26" />

     
      During the installation, you will be asked a series of question, some questions will require you to type in Y or N. Other question will require you to use the arrow 
      keys for up and down. The option highlighted in blue is the option you have selected and you press the Enter key to confirm of your choice.


      <img width="586" alt="image" src="https://github.com/user-attachments/assets/321d80e5-a39e-4712-a6b6-01860d46c9a8" />


      Now you can run auto-generated test to check that everything was installed correctly. First, let's check that you have a compatible version of Chrome installed.

      If your WDIO was not working or you did not see the chromedriver in the selections, look for the package.jason file. Open it up using a text editor or just using 
      your browser. You will see something like as below,

      <img width="556" alt="image" src="https://github.com/user-attachments/assets/3de7963b-6387-4919-b94b-7792a013a07d" />

      The version of chromedriver is 112.0.0. If the version of Chrome installed is lower, we may encounter errors. To check the current version of Chrome by clicking on 
      the menu with three dots, and then clicking Help --> About Google Chrome.

  6.  After everything installed well, you can run a test, using command,
      
      npm run wdio
    
    
D. Testing project

   The key factor of writing the effective tests is being able to accurately locate elements on a webpage. The methods for 
   finding the elements such as using CSS selectors,XPath expressions, and accessibility locators. Write several tests to 
   check the functionality of the Urban Routes. Write your tests in the createAnOrder.e2e.js file located in the 
   test/specs folder. 

   
   Write automated tests covering the full process of ordering a taxi. The test should cover:
   
   1. Setting the address
   2. Selecting Supportive plan
   3. Filling in the phone number
   4. Adding a credit card (Tip: the "link" button does not become active until the card CVV field on the "Adding a card" 
      modal id="code"; class="card-input" loses focus.
      To change focus you can simulate the user pressing TAB or clicking somewhere else on the screen).
   5. Writing a message for the driver
   6. Ordering a Blanket and handkerchiefs (Tip: there are two selectors to be aware of here.  One selector to click on 
      and one to run expect on to verify that the state 
      changed)
   7. Ordering 2 ice creams
   8. The car search modal appears
   9. Waiting for the driver info to appear in the modal (optional) In addition to the steps above there is an optional 
      step you can check.

   The driver search modal will appear and there will be a countdown while a driver is assigned. The modal will change 
   from showing the car search to the driver info, as shown below:

   <img width="521" alt="image" src="https://github.com/user-attachments/assets/a7bcb045-d6ab-4630-b1aa-5a3b7507c1c2" />


   

   

   












       
   
