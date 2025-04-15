import{Given,When,Then,setDefaultTimeout, Before, After} from "@cucumber/cucumber"
import {page} from "../../corelibs/corelib.spec"
import LoginPage from "../pages/loginpage";

let lp:LoginPage


         Given('user launches url', async function () {   
           
           lp=new LoginPage(page)                   
           lp.LaunchUrl()
         });  

         When('user enters username and password', async function () {
                  lp.login()
         
         });  
         
         Then('user Logged out', async function () {
          lp.logout()
     }); 

          

         