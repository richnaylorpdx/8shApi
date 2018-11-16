# 8shApi
Markup : #### HAPI project ####

Per the instruction given for the WML Take Home Challenge, I built up an api service using HAPI.JS. Thx to the WML folks for suggesting this, I would have done this using Express without this suggestion and HAPI is much faster to get going. The API service uses a precomposed api search URL to get a response of items that is fundamentally the data source in this case. I do wonder if I interpreted this part correctly. Regardless, upon succesful response from the WML API, the payload response is converted to JSON, and then the 'items' array is filtered for the 'search' term, 'itemId' is added to array for items with matching results, itemId array is returned if it contains any items. 

To search the API using this app enter a URL as follows:
http://localhost:8000/<search term goes here>
EXAMPLE: http://localhost:8000/backpack
  
Instructions for getting started:
Clone repo
Go into resulting folder from clone and perform an 'npm install'
To start application, from within the cloned application folder, and after you have done the 'npm install', execute a 'node index.js'. This will start the application using port 8000
NOTE: App is setup to use port 8000, you can modify this in the server.js file if needed

WML Folks....
Thanks for the chance. As you can imagine, Im pressed for time trying to fit the code challenge in between work and family. I intentionally did not learn to test HAPI and am providing what Ive done as proof of compentency in hopes of another interview. 
