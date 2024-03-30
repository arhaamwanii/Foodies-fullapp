CHILDREN PROP
    - in layout.js when the input is passed to the component which it wrapps 
    - the children props brings the actuall content into the warpper
    - the other components are then bought into this layout
    - via its children prop

USE EFFECT 
    - we can also use useEffect as setIteraval 
    - repeat this thing after this much time

USING CLIENT HOOKS
    - we have to mark such components as client side components 

    -COMPONENTS
    
    React Server Components
    : all components in next.js are server side components
    : only the finshed HTML is cent to the frontend
    : improvement boost
    : complete finsied content 

    Client Side Component
    : use state  has to be the client hooks
    : "use client" needs to be added at the top of these components
    
    : you wanna use the useState as down as  you can
    : USE CLIENT AS SEPERATED AND AS DOWN AS THE COMPONENT TREE AS POSSIBLE
    : SEPERATE THAT THING HERE

usePathName :
    - hook in next.js
    - this is the start and gets the current path of the thing 

NEXT.JS
    - as it runs directly on server, we can directly reach out to the data base

You can make servers Components into Async function while as -- normal functions you can't
- that is the thing there is a version of


LOADING.JS 
    - it will become active if anypage next to it is loading data\
    - this file will automatically be showen when you are trying to fetch something and that thing is still loading
    - in its deaylt it will stop the whole component and then show the Loading state

    - of you put this thing in root direcory it will be used for the nested components as well

SUSPENCE COMPONENT
    - this is an built in wrapper component in react which can be used to make a loading scene specific to a certain part of the app
    - it accepts the built in FALLBACK prop where it can recieve the elements that it has to show in fallback while the things are loading

ERROR.JS
    - if the data base is offline or so on..

NOT-FOUND.JS
    - we can make our own custom 404 page

WHEN YOU SET A ASYNC FUCNTION -- IT RETURS A "PROMISE"


meal.instructions = meal.instructions.replace(/\n/g, '<br>');
    - this thing here is used to replace /n in the array with <br> 
    - easy method to do so

IMAGE PICKER
    - using an ref we can acess all the porperties of an html element via the .current property 
    
USE SERVER
    - it is a function it is garanteed to be executed it the server
    - take this function and assign to an ACTION PROP
    - action when this is clicked -- will reusult in the data to be sent to the server
    - can't co exist with use client in the same component

NEXT.JS DOES AGRESSIVE CAHAHING

    - PREGENERATION
    - moving from development to production
    - npm run build
    - will transfomr the code -- ito deployment ready prodcution code
    - things get quicker
    
    - npm run build --- next.js pre renders all the static pages of your app, i.e the ones that can be pre generated 
    - all the pages are prernderd on the reserver and these are then sent to the end user
    - next.js caches these responses -> it never refethces them again


    - once you input has been injected it will store that on the sever but wont render it
    - once to refresh it or we restart the deployment server we get the same resoponse back with out the renderd info
    - it is because next.js does some agressive cahing and pre generates the pages on the intial build process

    next.js will cache this shit - so to not do that we have to do some things
    - reevaluating the path
    - put the   
    
    - REVALIDATEPATH('path' , 'layout or page')

    - so the given path will be revaluated once the given function is called
    - TWO ARGUMENTS

    Q- /PATHTOBEREVALIDATED
    Q- do you want the path to be revalidated or the whole layout which contains the inner components as well

    or the whole app with "/"


ADDING THE PAGE META DATA
    - next.js is looking for exorted files named meta data in all your layout files
    - EXPORT const METADATA = {

    }
    - this data will be looked at by the crawlers
    - all layout will have this 
    - then we can also make speicfic meta data to the different pages

ADDING META DATA DYNAMICALLY
    - we need to 
    - EXPORT ASYNC FUNCTION GENERATEMETADATA(){

    }
    - then this function needs to return the metadata 

    - this function will also recieve the PARAMS PROP 
    - using which we can set the data

    - well there shop works becuase it had an aura like that
     
