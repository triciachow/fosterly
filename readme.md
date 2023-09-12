# Introduction

This project was done for the University of London, CM3070 Final Project module.

# How to run the app on localhost?

1. Run `git clone https://github.com/triciachow/fosterly.git` in your desired location on your terminal. You should see two folders: client and server.
2. To get the backend server up and running, within the "server" folder, run `npm install`. Then, run `npm run start:backend`. You should see a message "Server running on port 8000... Database connected!" on your terminal.
3. To get the frontend up and running, open a separate terminal and within the "client" folder, run `npm install`. Then, run `npm run start:frontend`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# How to navigate around the app?

### As a user

1. Create an account on [http://localhost:3000/signup](http://localhost:3000/signup)
2. Go through the onboarding process and complete the form.
3. View the recommended animal profiles suggested to you.
4. You may view all animal profiles from the database from the "View all animals" link on the nav bar or on [http://localhost:3000/all](http://localhost:3000/all)

### As an admin

1. Sign in as an admin on [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. View your dashboard on [http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard)
3. Add more animal profiles from the sidebar "Add Animal Profile" or on [http://localhost:3000/admin/add-new](http://localhost:3000/admin/add-new)
4. Fill up all required form inputs and submit.
