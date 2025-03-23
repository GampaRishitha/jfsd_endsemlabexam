
---

# **JFSD End Sem Lab Exam**  

## **Overview**  
This project is part of the **JFSD (Java Full Stack Development) End Semester Lab Exam**. It demonstrates a **full-stack web application** using **Spring Boot** for the backend and **ReactJS** for the frontend. The application includes user authentication, database integration, and CRUD operations.  

## **Key Features**  
✅ **User Authentication** – Secure login and registration.  
✅ **Database Integration** – Uses **PostgreSQL** with Hibernate ORM.  
✅ **CRUD Operations** – Create, Read, Update, and Delete functionalities.  
✅ **REST API** – Well-structured endpoints for seamless frontend-backend communication.  
✅ **Payment Integration** (if applicable) – Paytm payment gateway for transactions.  

## **Tech Stack**  
- **Spring Boot** – Backend framework  
- **Hibernate** – ORM for database interaction  
- **PostgreSQL** – Database  
- **ReactJS** – Frontend framework  
- **CSS (in JS)** – Styling without separate CSS files  
- **Paytm API** (if integrated) – Secure payment processing  

## **Installation & Setup**  

### **Backend Setup (Spring Boot)**  

1️⃣ **Clone the repository:**  
```sh
git clone https://github.com/GampaRishitha/jfsd_endsemlabexam.git
cd jfsd_endsemlabexam/backend
```
2️⃣ **Configure the database:**  
- Update **`application.properties`** with PostgreSQL credentials.  

3️⃣ **Build and run the backend:**  
```sh
mvn clean install
mvn spring-boot:run
```

### **Frontend Setup (ReactJS)**  

1️⃣ **Navigate to the frontend directory:**  
```sh
cd frontend
```
2️⃣ **Install dependencies:**  
```sh
npm install
```
3️⃣ **Run the frontend:**  
```sh
npm start
```

## **Project Structure**  
📂 **jfsd_endsemlabexam**  
 ├── 📁 **backend** → Spring Boot application  
 ├── 📁 **frontend** → ReactJS application  
 ├── 📄 **README.md** → Project documentation  
 ├── 📄 **database.sql** → Sample database structure  
 ├── 📁 **controllers** → API endpoints  
 ├── 📁 **models** → Database models  
 ├── 📁 **services** → Business logic  
 ├── 📄 **package.json** → Frontend dependencies  
 ├── 📄 **application.properties** → Backend configuration  
 └── 📄 **PAYTM.md** → Payment integration guide (if applicable)  

## **How It Works**  
- **Users can register and log in securely.**  
- **CRUD operations** allow managing data efficiently.  
- **Database integration** ensures data persistence.  
- **REST API** connects the frontend and backend seamlessly.  
- **Payment system** (if applicable) handles transactions securely.  

## **Contribution**  
Contributions are welcome! You can:  
✅ Optimize backend performance.  
✅ Improve UI/UX.  
✅ Enhance security measures.  

## **License**  
This project is open-source and available under the **MIT License**.  

## **Contact**  
For queries or collaboration, reach out via **GitHub Issues** or email.  

🚀 **Happy Coding!**  

---
