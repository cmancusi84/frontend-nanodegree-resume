/*
bio contains:

	name : string
	role : string
	contacts : an object with
	    mobile: string
	    email: string 
	    github: string
	    twitter: string (optional)
	    location: string
	welcomeMessage: string 
	skills: array of strings
	biopic: url
	display: function
*/
var bio = {
	name: "Chris Mancusi",
	role: "Web Developer",
	contacts: {
		mobile: "941-555-1212",
		email: "chris.mancusi@yahoo.com",
		github: "cmancusi84",
		twitter: "@ChrisMancusiIsntOnTwitter",
		location: "Bradenton, FL",
	},
	welcomeMessage: "Let me create your website!",
	skills: ["HTML", "CSS", "Javascript", "Python"],
	biopic: "images/biopic.jpg",
	display: function() {

		var contacts = HTMLmobile.replace("%data%", this.contacts.mobile);
		contacts += HTMLemail.replace("%data%", this.contacts.email);
		contacts += HTMLtwitter.replace("%data%", this.contacts.twitter);
		contacts += HTMLgithub.replace("%data%", this.contacts.github);
		contacts += HTMLlocation.replace("%data%", this.contacts.location);

		$("#footerContacts").append(contacts);
		$("#topContacts").append(contacts);

		$("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", this.name));

		$("#header").append(HTMLbioPic.replace("%data%", this.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
		$("#header").append(HTMLskillsStart);

		this.skills.forEach(addSkill);
	}
};


/*
education contains:

	schools: array of objects with
	   name: string
	   location: string
	   degree: string
	   majors: array of strings
	   dates: string (works with a hyphen between them)
	   url: string
	onlineCourses: array of objects with
	   title: string
	   school: string
	   dates: string (works with a hyphen between them)
	   url: string
	display: function
*/

var education = {
	schools: [{
			name: "Demonstration School",
			location: "Tampa, FL",
			degree: "Associates",
			majors: ["CS"],
			dates: "2012",
			url: "http://google.com",
		},
		{
			name: "School of Demonstration",
			location: "Bradenton, FL",
			degree: "Bachelors",
			majors: ["CS"],
			dates: "2014",
			url: "http://google.com",
		}
	],
	onlineCourses: [{
			title: "Some kind of course",
			school: "Nonexistent University",
			dates: "01/01/15-06/31/15",
			url: "http://google.com"
		},
		{
			title: "Very interesting course",
			school: "Imaginary College",
			dates: "07/01/15-12/31/15",
			url: "http://google.com"
		}
	],
	display: function() {

		this.schools.forEach(addSchool);

		$("#education").append(HTMLonlineClasses);

		$("#education").append(HTMLschoolStart.replace('><', '><div id="courses"></div><'));

		this.onlineCourses.forEach(addCourse);
	}
};

/*
work contains:

    jobs: array of objects with
       employer: string
       title: string
       location: string
       dates: string (Can be 'in progress')
       description: string
    display: function
*/

var work = {
	jobs: [{
			employer: "Industrial Demonstrations",
			title: "Head of Demos",
			location: "Los Angeles, CA",
			dates: "12/01/14-10/31/16",
			description: "In this role I learned to create example text to fill my resume. Among my many responsibilities was making sure that at least one line of example text is long enough to fully test text displayed in a variety of different browsers, screen resolutions, and window sizes. While a long description is not necessary, improperly-wrapped text can make a page nearly impossible to read."
		},
		{
			employer: "Demo Worldwide",
			title: "Demonstration Manager",
			location: "Bradenton, FL",
			dates: "01/01/17-current",
			description: "In this position I oversaw the creation of demonstrational resumes, including but not limited to creating thumbnails (for my various fake projects) sized to a certain resolution."
		}
	],
	display: function() {
		this.jobs.forEach(addJob);
	}
};

/*
projects contains:

      projects: array of objects with
            title: string 
            dates: string (works with a hyphen between them)
            description: string
            images: array with string urls
      display: function
*/

var projects = {
	projects: [{
			title: "Pie chart collection",
			dates: "01/01/16-03/01/16",
			description: "This project involved finding example pie charts to display in this section of my resume. Surprisingly, some pie charts have nothing to do with pies.",
			images: [
				"images/project1-1.jpg",
				"images/project1-2.jpg"
			]
		},
		{
			title: "Schematic diagram study",
			dates: "04/01/16-01/01/17",
			description: "This project involved collecting and studying schematic diagrams. Not only does it sound fancy, the random images from Google look great on a resume (shown below).",
			images: [
				"images/project2-1.jpg",
				"images/project2-2.jpg"
			]
		}
	],
	display: function() {
		this.projects.forEach(addProject);
	}
};

function addSkill(skill) {
	$("#skills").append(HTMLskills.replace("%data%", skill));
}

function addJob(job) {

	var output = HTMLworkEmployer.replace("%data%", job.employer);
	output += HTMLworkTitle.replace("%data%", job.title);
	output += HTMLworkDates.replace("%data%", job.dates);
	output += HTMLworkLocation.replace("%data%", job.location);
	output += HTMLworkDescription.replace("%data%", job.description);

	$("#workExperience").append(HTMLworkStart.replace("><", ">" + output + "<"));
}

function addProject(project) {

	var output = HTMLprojectTitle.replace("%data%", project.title);
	output += HTMLprojectDates.replace("%data%", project.dates);
	output += HTMLprojectDescription.replace("%data%", project.description);

	for (var i = 0; i < project.images.length; i++)
		output += HTMLprojectImage.replace("%data%", project.images[i]);

	$("#projects").append(HTMLprojectStart.replace("><", ">" + output + "<"));
}

function addSchool(school) {

	var output = HTMLschoolName.replace("%data%", school.name);
	output += HTMLschoolDegree.replace("%data%", school.degree);
	output += HTMLschoolDates.replace("%data%", school.dates);
	output += HTMLschoolLocation.replace("%data%", school.location);
	output += HTMLschoolMajor.replace("%data%", school.majors.join(", "));

	$("#education").append(HTMLschoolStart.replace("><", ">" + output + "<"));
}

function addCourse(course) {

	var output = HTMLonlineTitle.replace("%data%", course.title);
	output += HTMLonlineSchool.replace("%data%", course.school);
	output += HTMLonlineDates.replace("%data%", course.dates);
	output += HTMLonlineURL.replace("%data%", course.url);

	$("#courses").append(output);
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
