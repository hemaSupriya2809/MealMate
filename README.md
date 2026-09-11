# 🍽️ MealMate: Online Canteen Order Management System

A web-based Smart Canteen Order and Cafeteria Management System designed to digitize food ordering, automate billing, and streamline kitchen operations in campus and workplace dining. The system enables users to browse a dynamic menu, manage real-time shopping carts, and generate digital invoices, while providing administrators with a dedicated control panel to track incoming orders and manage inventory.

---

## 🚀 Features

### 📊 Customer Dashboard & Profile
* Personalized user account dashboard for rapid access
* User profile viewing and management
* Quick shortcuts to menus, active carts, and order receipts
* Persistent session tracking across pages

### 🍔 Dynamic Menu & Food Catalog
* Interactive menu display categorizing breakfast, fast food, meals, and beverages
* Rich product cards with high-resolution food assets, names, and pricing
* Fast category filtering and real-time item availability status
* One-click "Add to Cart" integration

### 🛒 Real-Time Shopping Cart
* Dynamic item addition, removal, and quantity increments
* Instant calculation of item subtotals and overall cart totals
* Empty cart validation to prevent erroneous checkout submissions
* State persistence across page refreshes via browser storage

### 🧾 Automated Digital Invoicing & Billing
* Itemized electronic bill generation upon order placement
* Detailed summary displaying item breakdown, unit costs, quantities, and net total
* Unique order identifier and timestamp assignment
* Printable receipt layout for cafeteria counter verification

### 📦 Order Tracking & History
* Complete history log of past and current cafeteria orders
* Live order progress status (Placed, Preparing, Ready for Pickup, Completed)
* Quick access to previous invoice summaries

### 🔐 Multi-Role Authentication
* **Customer Portal:** Dedicated user registration and login validation
* **Admin Portal:** Separate, secure login interface for cafeteria managers
* Input sanitization and error alerts for invalid credentials

### 🛠️ Admin Management Panel
* Centralized dashboard to view all incoming student and staff orders
* Order status toggles to notify users when food is ready
* Menu management to update prices, item names, and availability
* Kitchen sales and operational logs

---

## 🏗️ System Architecture

```text
User / Customer Browser             Cafeteria Admin Portal
          ↓                                   ↓
┌─────────────────────────────────────────────────────────────┐
│                    Frontend UI Layer                        │
│   (HTML5 / Custom CSS Grid & Flexbox / Vanilla JS DOM)      │
└──────────────────────────────┬──────────────────────────────┘
                               ↓
┌─────────────────────────────────────────────────────────────┐
│                   Client Business Logic                     │
│   auth.js | cart.js | menu.js | bill.js | admin.js          │
└──────────────────────────────┬──────────────────────────────┘
                               ↓
┌─────────────────────────────────────────────────────────────┐
│                 Data Persistence Layer                      │
│                  storage.js Wrapper                         │
│             (Web Storage API / localStorage)                │
└─────────────────────────────────────────────────────────────┘

🛠️ Technologies Used
FrontendHTML5: Semantic markup structure for accessibility and clarity  
CSS3: Custom modular stylesheets utilizing Flexbox and CSS Grid layouts[cite: 1]
JavaScript (ES6+): DOM manipulation, state handling, and client-side business logic[cite: 1]

Storage & State ManagementWeb Storage API (localStorage): 
Persistent storage for accounts, cart state, catalog, and orders[cite: 1]
JSON: Client-side data serialization and parsing[cite: 1]

Development Tools
Visual Studio Code[cite: 1]
Git & GitHub[cite: 1]
Live Server (VS Code Extension)

📁 Project Folder

online-canteen-order-management-main/
│
├── css/                           # Dedicated stylesheets per module[cite: 1]
│   ├── admin.css                  # Admin portal & management tables[cite: 1]
│   ├── bill.css                   # Digital invoice and receipt layouts[cite: 1]
│   ├── cart.css                   # Shopping cart & checkout styling[cite: 1]
│   ├── dashboard.css              # User profile & control panel styles[cite: 1]
│   ├── login.css                  # Authentication & registration forms[cite: 1]
│   ├── menu.css                   # Food grid & product card styles[cite: 1]
│   ├── orders.css                 # Order summary & status lists[cite: 1]
│   └── style.css                  # Global styles, variables, & resets[cite: 1]
│
├── js/                            # Modular client-side scripts[cite: 1]
│   ├── admin-login.js             # Admin authentication logic[cite: 1]
│   ├── admin.js                   # Admin dashboard order & menu operations[cite: 1]
│   ├── auth.js                    # User login validation & session handling[cite: 1]
│   ├── bill.js                    # Receipt compilation & pricing calculations[cite: 1]
│   ├── cart.js                    # Cart state, item math, & validation[cite: 1]
│   ├── menu.js                    # Catalog rendering & item selection[cite: 1]
│   ├── orders.js                  # Order history & status rendering[cite: 1]
│   ├── signup.js                  # Registration input validation & storage[cite: 1]
│   └── storage.js                 # LocalStorage persistence adapter[cite: 1]
│
├── image/                         # Food photography, logos, and UI assets[cite: 1]
│   ├── bg-home.jpg                # Landing page hero background[cite: 1]
│   ├── bg-login.jpg               # Login view background[cite: 1]
│   ├── bg-signup.jpg              # Registration view background[cite: 1]
│   ├── burger.jpg                 # Food item assets[cite: 1]
│   ├── coffee.jpg                 # Food item assets[cite: 1]
│   ├── dosa.jpg                   # Food item assets[cite: 1]
│   ├── meals.jpg                  # Food item assets[cite: 1]
│   ├── pizza.jpg                  # Food item assets[cite: 1]
│   ├── sandwich.jpg               # Food item assets[cite: 1]
│   └── logo.png                   # System branding logo[cite: 1]
│
├── index.html                     # Application home & landing page[cite: 1]
├── login.html                     # Customer sign-in view[cite: 1]
├── signup.html                    # Customer account registration[cite: 1]
├── dashboard.html                 # Customer account dashboard[cite: 1]
├── profile.html                   # User profile view[cite: 1]
├── menu.html                      # Interactive food menu catalog[cite: 1]
├── cart.html                      # Active cart & checkout view[cite: 1]
├── bill.html                      # Order invoice & payment receipt[cite: 1]
├── orders.html                    # Order tracking & history page[cite: 1]
├── admin-login.html               # Staff/Admin login portal[cite: 1]
├── admin-dashboard.html           # Staff/Admin central control panel[cite: 1]
│
└── README.md                      # Documentation file

🔄 Data Flow

Browse Menu (menu.html)
          ↓
Add Items to Cart (cart.html / cart.js)
          ↓
Data Serialized to Browser Storage (storage.js)
          ↓
Checkout & Order Placement (bill.html / bill.js)
          ↓
Receipt Created & Order Queued
          ↓
┌─────────────────────────────────┴─────────────────────────────────┐
↓                                                                   ↓
User Order History (orders.html)              Admin Dashboard (admin-dashboard.html)
(Status Tracking & Invoice Access)            (Order Fulfillment & Status Updates)

🔔 Order Status Workflow
Incoming orders pass through distinct stages to streamline pickup times:

🟡 Order Placed: The customer has verified the cart and confirmed the invoice[cite: 1].

🟠 Preparing: The cafeteria staff accepts the order and begins meal preparation[cite: 1].

🟢 Ready for Pickup: Kitchen updates the ticket; customer presents order ID at the counter[cite: 1].

⚪ Completed: The transaction is closed and archived into the user's order history[cite: 1].

🎯 Objectives
Eliminate physical queueing times in college and office cafeterias[cite: 1].

Prevent manual calculation errors through an automated client-side billing engine[cite: 1].

Provide cafeteria management with an organized dashboard for tracking pending orders[cite: 1].

Ensure a lightweight, serverless architecture that functions directly within standard web browsers[cite: 1].

Offer a mobile-responsive layout for quick ordering on smartphones and desktop browsers[cite: 1].

🌱 Future Enhancements
Backend integration using Node.js, Express, and MongoDB for persistent multi-device syncing.

Payment gateway integration (Stripe, PayPal, UPI, Razorpay) for digital transactions.

Push notifications and SMS alerts when food is prepared and ready for pickup.

QR code scanning at cafeteria collection counters for instant bill verification.

Nutritional information and calorie trackers for all menu items.

Inventory tracking to automatically mark items as "Sold Out" once kitchen stock is depleted.

🔒 Security & Data Note
The application uses browser localStorage as its data layer[cite: 1].

Clearing browser cache or site data will reset custom users, active cart items, and placed orders[cite: 1].

Passwords and sessions in this version are maintained on the client for lightweight, standalone deployment[cite: 1].

👨‍💻 Author
Hema

B.E. Computer Science Engineering

⭐ Project Highlights
🍽️ Complete End-to-End Canteen Ordering Workflow[cite: 1]

🛒 Real-Time Cart Calculations & Quantity Controls[cite: 1]

🧾 Automated Digital Bill & Receipt Generator[cite: 1]

👨‍🍳 Dedicated Staff & Kitchen Admin Dashboard[cite: 1]

📱 Responsive UI Built with Pure HTML5, CSS3, and JavaScript[cite: 1]

📦 Client-Side Storage Architecture via Web Storage APIs[cite: 1]

📜 License
This project is developed for educational and academic purposes.
