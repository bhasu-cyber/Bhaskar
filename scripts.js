
   /* 
    document.querySelectorAll('.icon-container img').forEach(icon => {
         icon.addEventListener('click', () => {
             alert(`Navigating to ${icon.alt}`);
             // Add navigation logic here, e.g., window.location.href
            });
    }); */

    // Create a new job card element
    var newJobCard = document.createElement('div');
    newJobCard.classList.add('job-card'); // Add the job-card class

    // Add content to the new job card
    newJobCard.innerHTML = `
        <h3>Full Stack Developer</h3>
        <p>Company Name: TCS</p>
        <p>Location: Hyderabad</p>
        <p>Experience: Fresher</p>
       <a href="FindYourJobTodayAboutJobDetails.html"><button>View Details</button></a>
    `;

    // Get the job listings container
    var jobListings = document.querySelector('.job-listings');

    // Insert the new job card at the beginning
    jobListings.insertBefore(newJobCard, jobListings.firstChild);




     // Create a new job card element
     var newJobCard = document.createElement('div');
     newJobCard.classList.add('job-card'); // Add the job-card class
 
     // Add content to the new job card
     newJobCard.innerHTML = `
         <h3>Python Developer</h3>
         <p>Company Name: TCS</p>
         <p>Location: Hyderabad</p>
         <p>Experience: Fresher</p>
        <a href="FindYourJobTodayAboutJobDetails.html"><button>View Details</button></a>
     `;
 
     // Get the job listings container
     var jobListings = document.querySelector('.job-listings');
 
     // Insert the new job card at the beginning
     jobListings.insertBefore(newJobCard, jobListings.firstChild);