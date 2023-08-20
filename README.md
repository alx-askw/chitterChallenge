Chitter Challenge
=================


Submission Notes
-----------------
**Installation and running:**
- Backend
    - cd .\chitterBackend\
    - run npm i 
    - for running the server:
        - npm run dev
    - for running the tests
        - npm run test (this is without coverage)
        - npm run coverage (recommended - provides code coverage)
        
**This submission implements both the standard and extended criteria:**
- you can view all peeps on /home
 
- you can login/sign up by pressing the login | sign up button on the top right

- you can login or sign up
    - logins are persistent, if the page is refreshed
    - you can only sign up if your username and email are unique
    - I ran out of time to add the pop-ups for failed login/sign up

- You can logout by pressing the logout button on the top right

- You can return to the home/all peeps page by clicking the logo or Chitter header

- If you are logged in you can write a peep and post it to the all peeps wall
    - this will re-render the page automatically

- Each Peep has the 'name@username', the date (ISO 8601 format), and are displayed in reverse chronological order

- If you are logged in, you can see a reply button, this will post a new reply underneath the relevant Peep
    - the replies are in chronological order (so you can follow a thread)
    - Replies also re-render the page
    - once a reply has been sent and is successful, a button will become visible allowing you to see all the replies
    - the button is only visible on Peeps with replies
    - you do not have to be logged in to view the replies

- If you write a Peep and @ a user by their username, this is considered tagging
    - emails will be sent to all tagged uses in peeps as well as replies
    - you can tag multiple users at once and they will all receive an email
    - it works by searching for words with an @ prefix and using that to find the emails of those users, thus it will only send emails to users who exist
    - *IMPORTANT*: I used an npm package called 'nodemailer' and they require you create a mail transport, I didn't have the time to set up a gmail SMTP, so I used the built in test account. 
    - To view the email to a tagged user, if you post a peep, @ing a valid user, check the console of the express server for a link which will take you to a testing email site with the email that the user would receive if gmail was set up.


**Despite having implemented all the criteria - I consider this to be a partial completion:**

- I didn't have time to implement Express Validation - Express Validator is installed and I set up the middleware functions for doing express validation but I didn't get any further than that

- The passwords of each user are store in plain text - a big no no - but I found it easier for development, if I could see all the information of each of my test users - given more time I would have used bcrypt to encrypt each users passwords

- I forgot to finish the prop type validation in react, though a lost of the react components have it. Again, given more time I would have gone through everything react component and implemented the PropType validation 

- Testing the front end is something that I find very confusing to implement as well as very time consuming, and I simply ran out of time to test it as much as I would like - this is something I will definitely get to grips with post academy














Chitter Requirement Spec
------------------------
* Feel free to use Google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit your work by 9:30am Monday morning

Challenge:
-------

As usual please start by forking this repo.

We are going to write a small twitter clone that will allow users to post messages to a public wall.

Good luck and let the chitter begin!

Features:
-------

### Standard Acceptance Criteria
```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

Additional requirements:
------

* You don't have to be logged in to see the peeps.
* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewright@digitalfutures.com, password123, Ed Wright, edwright6975).
* The username and email are unique.
* Peeps (posts to chitter) have the name of the trainee and their user handle.
* Your README should indicate the technologies used, and give instructions on how to install and run the tests.

### Extended Acceptance Criteria

```
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep

As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee.
```
