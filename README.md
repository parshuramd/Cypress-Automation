Creating Cypress Automation Project
// How to handle iframes in cypress
// method 1 
   step 1 - get iframe unique css selector
   step 2 - yield body in variable (el[0].contentDocument.body)
   step 3 - wrap body
// method 2 
   its(el[0].contentDocument.body)
// method 3
  by plugin cypress-iframe
  