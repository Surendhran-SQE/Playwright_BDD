import{Given,When,Then,setDefaultTimeout, Before, After} from "@cucumber/cucumber"
import {page} from "../../corelibs/corelib.spec"
import { HomePage } from "../pages/homepage";


let hp:HomePage


       Then('verified home page', async function () {
          hp=new HomePage(page)
          hp.EditAc()
         }); 
         
     

         