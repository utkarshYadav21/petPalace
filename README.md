# Pet Adoption Web App

Welcome to our Pet Adoption Web App repository! This web application allows users to adopt pets, give away pets for adoption, and make donations. It is built using React, Node.js, Express.js, MongoDB, and Mongoose.

## Disclaimer

Please note that error handling is not fully implemented in this version of the Pet Adoption Web App. Some errors may be logged to the console but are not yet gracefully handled in the user interface. Future updates will address this issue and provide better error handling. Also the styling of some components is not perfect for now, it will be changed in near future.

## Features

- **User Authentication:** Users can register and login securely. Authentication is done using JWT tokens stored in local storage.

- **Pet Adoption:** Users can browse through a list of pets including dogs, cats, rabbits, birds, etc., and adopt them.

- **Giveaway Form:** Users can fill out a form to give away a pet for adoption.

- **Donation:** Donation functionality is implemented using Stripe.js.

- **Protected Routes:** Access to the adoption and pet details pages is restricted to logged-in users only.

## Demo

https://github.com/utkarshYadav21/petPalace/assets/145287711/b0ba2046-c8b3-4dbb-b08f-805074b36c96

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT tokens
- **Payment:** Stripe.js

## Installation

1. Clone this repository to your local machine.

2. Install dependencies for the frontend and backend:

    ```bash
    # Navigate to the frontend directory
    cd frontend
    npm install

    # Navigate to the backend directory
    cd ../backend
    npm install
    ```

3. Set up MongoDB database and configure the connection URI in the backend.

### Backend Configuration

1. Navigate to the `backend/db/config.js`.

2. Replace the placeholder values with your actual configuration details:
    
    - `MONGODB_URI`: MongoDB connection URI.
  
3. Navigate to the `backend/controllers/donateController.js`.
    
    - `donationUrl`: Your own Url to donation page(In the payment integrationi have created a node code payment link. So go to stripe officail site and then go to more and there go to payment links, where you can create a no code payment url. That should be made for donation. Thencopy the link and paste it in the mentioned file).

4. Navigate to the `backend/index.js`.

    - `stripe`: Your own stripe key.

### Running the application

1. Run the frontend and backend:

    ```bash
    # Start the frontend server
    cd /frontend
    npm start

    # Start the backend server
    cd /backend
    npm start
    ```

