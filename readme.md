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
    - 
