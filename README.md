# Ticket Wizard

A comprehensive web application designed to streamline the experience of managing and attending concerts. From user account management to ticket sales, this application offers a robust set of features tailored for concert enthusiasts and organizers alike.

## Table of Contents
- [Core Features](#core-features)
- [Technical Implementation](#technical-implementation)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)
- [Contact Information](#contact-information)
- [Project Status](#project-status)
- [FAQs](#faqs)
- [Acknowledgments](#acknowledgments)

## Core Features

### 1. User Account Management
- **Description:** Secure account management system allowing users to sign up, log in, and manage their profiles.
- **Functionalities:**
  - Sign-up and login pages with form validation and session-based authentication.
  - User profile management, including the ability to view and edit account details and purchase history.

### 2. Concert Listings
- **Description:** A dynamic listing of upcoming concerts, providing detailed information about artists, venues, and dates.
- **Functionalities:**
  - A main page featuring artists and upcoming shows, sorted by date.
  - Detailed concert view pages with comprehensive artist and venue information.

### 3. Ticket Sales
- **Description:** A seamless ticket purchasing experience, offering various ticket types and calculating total costs, including taxes.
- **Functionalities:**
  - An intuitive concert selection interface for choosing ticket types and quantities.
  - A checkout page that displays the total price, including taxes, and requires user confirmation.
  - Purchase confirmation alerts to ensure users are informed of their successful transactions.

### 4. Responsive Design
- **Description:** A mobile-friendly application that ensures a consistent and accessible user experience across all devices.
- **Functionalities:**
  - Implementation of Bootstrap for a responsive UI.
  - Extensive testing on various devices to guarantee compatibility and usability.

## Technical Implementation

### Frontend
- Utilizes Handlebars for dynamic content rendering.
- Bootstrap is employed to achieve a responsive design.
- Vanilla JavaScript or jQuery is used for client-side logic, including form validation and AJAX requests.

### Backend
- An Express.js server handles API requests and serves Handlebars views.
- A MySQL database, managed with Sequelize ORM, stores data related to users, concerts, and tickets.
- RESTful API endpoints are implemented for user, concert, and ticket sales management.

### Security
- Dotenv is used to secure environment variables, including database credentials.
- Session-based authentication is implemented for secure user login management.

### Deployment
- The application is deployed on Heroku, facilitating easy access and demonstration.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ticket_wizard.git
```
2. Navigate to the project directory:
```bash
cd ticket_wizard
```
3. Install dependencies:
```bash
npm install
```
4. Start the application:
```bash
node server.js
```

## Usage

After installation, open your web browser and navigate to `http://localhost:3001` to view the application.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

## Credits

- **HTML & Styling:** The application's frontend utilizes HTML5 and CSS3, with Bootstrap for styling and layout. This ensures a modern and user-friendly interface.
- **Testing:** Rigorous testing is conducted across different browsers and devices to ensure functionality and responsiveness.

## Contact Information

For any inquiries or contributions, please contact [your email] or open an issue in the GitHub repository.

## Project Status

This project is currently in development. Future enhancements will include social media integration, a rating system for artists and venues, and personalized concert recommendations based on user preferences.

## FAQs

Q: How do I reset my password?
A: You can't. Dont forget your password

## Acknowledgments

Special thanks to all the contributors and users who have made this project possible.
- Katy and Jessica for their debugging expertise
