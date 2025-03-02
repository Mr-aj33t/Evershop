# Evershop Project

This is an **Evershop** project built using the Evershop framework, connected to a **Neon PostgreSQL database**, and deployed on **Render**.

## Live Demo
[Click here to visit the live site](https://evershop-86oc.onrender.com)

## Features
- **Evershop Framework**: A modern e-commerce platform for building scalable online stores.
- **Neon Database**: A serverless PostgreSQL database for seamless data management.
- **Render Deployment**: Easy deployment and hosting on Render.

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **PostgreSQL** (or access to a Neon database)
- **Git**

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Mr-aj33t/Evershop.git
cd Evershop
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a **.env** file in the root directory and add the following:

```env
DATABASE_URL="postgresql://neondb_owner:[your-database-Password]@[your-Host-Name]/neondb?sslmode=require"
```
Replace the `DATABASE_URL` with your actual **Neon database** connection string.

### 4. Start the Application
Run the application locally:
```bash
npm run start
```
The application will be available at **http://localhost:3000**.

---

## Deployment on Render

### 1. Push Code to GitHub
Push your code to a GitHub repository:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Create a Render Web Service
1. Go to [Render](https://render.com/) and sign up for an account.
2. Create a new **Web Service** and connect your **GitHub repository**.
3. Add the `.env` variables (including the Neon database connection string) under **Environment Variables**.
4. Set the **Build Command** to:
    ```bash
    npm install && npm run setup && npm run build
    ```
5. Set the **Start Command** to:
    ```bash
    npm run start
    ```

### 3. Deploy
Render will automatically detect the project and start the build process. Once deployed, your application will be live at the provided **Render URL**.

---

## Project Structure
```
Evershop/
├── src/                  # Application source code
├── .env                  # Environment variables
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation
└── ...                   # Other project files
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/YourFeatureName
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/YourFeatureName
    ```
5. Open a **Pull Request**.

## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- **[Evershop](https://evershop.io/)** for the e-commerce framework.
- **[Neon](https://neon.tech/)** for the serverless PostgreSQL database.
- **[Render](https://render.com/)** for deployment and hosting.

## Contact
For questions or support, contact:
- **Name:** Ajeet Kumar
- **Email:** ajeet11011@gmail.com
- **GitHub:** [Mr-aj33t](https://github.com/Mr-aj33t)

## Live Link

