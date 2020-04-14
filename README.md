Your goal is to build a simple UI that :

Allows a user enter data with some input fields, and then click on a button which passes the data to the estimation function you built from challenge 1 to 3. In the UI, designate each input field with a HTML attribute as follows:

 - input for population data has attribute of data-population
 - input for timeToElapse data has attribute of data-time-to-elapse
 - input for reportedCases data has attribute of data-reported-cases
 - input for totalHospitalBeds data has attribute of data-total-hospital-beds
 - input for periodType data has attribute of data-period-type and should be a
		SELECT
		 - field with values limited to days, weeks, or months
		 - The button for submitting the data from the UI should have an attribute of data-goestimate.

Feel free to handle submission with the data-go-estimate button and pass the data from the input fields to your estimation function. Though this is not required (we won't even check), doing it helps you have a functional UI you can show off!

Scores a minimum of 75 for performance, best practices, SEO, and accessibility, as measured by Chrome's Lighthouse tool. 

Host your web app on GitHub pages, Netlify or anything you like. You can also test your app here and see how it performs. 

Once your app is up and running (online),
 - locate the app.properties file at the root of your project folder and update the value for frontend.url