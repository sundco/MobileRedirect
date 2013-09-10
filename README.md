MobileRedirect
==============

This is a javascript/jQuery script that will redirect to a mobile site if a cookie is not found. If they came from the mobile site they will be shown an option to go back to the mobile site.

Works by using pixel detection so anything under 600px will be redirected and given a cookie while anything over is sent to the normal index file. All traffic is routed through the home page so only one seperate directory is created for the mobile site. 

Functions are included to delete the cookie and to set a cookie.
