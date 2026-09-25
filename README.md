# React Assignment Project

A modern **React + TypeScript** application built with **Vite**, **TanStack Table**, **RTK Query**, **Module Federation**, and **shadcn/ui**.

The project demonstrates a reusable and scalable frontend architecture with data tables, pagination, sorting, filtering, searching, reusable UI components, API data fetching, and micro-frontend integration using Module Federation.

## 🚀 Tech Stack

* **React** – UI library
* **TypeScript** – Type safety
* **Vite** – Development and build tool
* **TanStack Table** – Headless table management
* **RTK Query** – API data fetching and state management
* **Module Federation** – Micro-frontend architecture and remote module integration
* **shadcn/ui** – Reusable and accessible UI components
* **SCSS** – Component styling
* **ESLint** – Code quality and linting

## 📌 Project Features

### 📊 Data Table

The project contains a reusable `DataTable` component built using TanStack Table.

### 📄 Pagination

The table includes pagination so large datasets can be displayed across multiple pages.

Users can navigate between:

* Previous page
* Next page
* Individual pages
* Different page sizes

### ♻️ Reusable Components

The table is designed as a reusable component instead of creating a separate table implementation for every page.

For example:

```tsx
<DataTable
  data={employees}
  columns={columns}
/>
```

The same component can be reused with different datasets and column definitions.

### 🎨 shadcn/ui

The project uses **shadcn/ui** components to build a consistent and reusable UI.

Components can be customized directly within the project instead of relying on a fixed component library design.

Examples include:

* Button
* Carousel
* Other reusable UI components

Example:

```tsx
import { Button } from "@/components/ui/button";

<Button>
  View Details
</Button>
```

### 🧩 Module Federation

The project uses **Module Federation** to support a micro-frontend architecture.

Module Federation allows different applications to share modules and components at runtime without requiring all code to exist inside a single application.

The architecture contains:

* **Host application**
* **Remote application**
* Shared modules/components
* Runtime remote module loading

This makes it possible to develop and deploy different frontend applications independently while allowing the host application to consume functionality from remote applications.

### 🔗 Remote Application

The `remote` project provides modules that can be consumed by the main application using Module Federation.

General architecture:

```text
                 Host Application
                       │
                       │
                       ▼
              Module Federation
                       │
                       │
                       ▼
                Remote Application
                       │
                       ▼
              Exposed Components
```

This approach allows the application to integrate independently developed frontend modules.

## 📁 Project Structure

```text
UserTesting/
│
├── project-appnpm/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── table/
│   │   │       ├── DataTable.tsx
│   │   │       └── DataTable.scss
│   │   │
│   │   ├── hooks/
│   │   │   ├── useEmployee.ts
│   │   │   ├── useProduct.ts
│   │   │   └── usePost.ts
│   │   │
│   │   ├── types/
│   │   │   └── responseTypes.ts
│   │   │
│   │   ├── services/
│   │   │   ├── employeeService.ts
│   │   │   ├── postService.ts
│   │   │   └── productService.ts
│   │   │
│   │   ├── styles/
│   │   │   └── variables.scss
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Employee.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── Post.tsx
│   │   │   └── Product.tsx
│   │   │
│   │   ├── constants/
│   │   │   ├── TableHeader.tsx
│   │   │   ├── TableHeader.scss
│   │   │   └── url-constant.ts
│   │   │
│   │   ├── store/
│   │   │   └── store.ts
│   │   │
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── main.tsx
│   │
│   ├── package.json
│   ├── vite.config.ts
│   └── ...
│
├── remote/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   └── ui/
│   │   │       ├── button.tsx
│   │   │       └── carousel.tsx
│   │   │
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   │
│   │   ├── pages/
│   │   │   ├── Footer.tsx
│   │   │   └── Testimonials.tsx
│   │   │
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.tsx
│   │
│   ├── .gitignore
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
│
├── README.md
└── .gitignore
```

## 🧩 Table Architecture

The project uses TanStack Table as a **headless table library**.

TanStack Table handles the table logic while the application controls the UI.

The general workflow is:

```text
Landing Page
     ↓
NavLinks
     ↓
Pages
     ↓
RTK Query / Service
     ↓
API Data
     ↓
Column Definitions
     ↓
TanStack Table
     ↓
Pagination / Sorting / Filtering
     ↓
Reusable DataTable UI
```

This approach keeps the table logic separate from the presentation layer and makes the component easier to reuse.

## 🗂️ Column Definitions

Columns are defined separately from the table component.

Example:

```tsx
const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
```

This allows each table to define its own columns while sharing the same table component.

## 🧱 Reusable Table Header

A reusable table heading component is used to provide a consistent title and description for different tables.

Example:

```tsx
<TableHeader
  title="Employees"
  description="Manage and view employee information"
/>
```

This avoids repeating the same heading markup across different pages.

## 🎯 Why TanStack Table?

TanStack Table was used because it provides table functionality without forcing a specific UI design.

It provides the logic for:

* Sorting
* Filtering
* Pagination
* Row models
* Column definitions
* Table state

The UI remains completely customizable.

## 🎨 Why shadcn/ui?

shadcn/ui provides accessible and customizable UI components that can be integrated directly into the project.

Unlike a traditional component library, the components are added to the application's source code, allowing developers to customize their behavior and styling.

This project uses shadcn/ui for reusable interface elements such as:

* Buttons
* Dialogs
* Tabs
* Carousel
* Dropdowns
* Inputs
* Other common UI elements

## 🧩 Why Module Federation?

Module Federation enables the application to follow a **micro-frontend architecture**.

It allows the host application to load modules from a separate remote application at runtime.

Benefits include:

* Independent application development
* Independent deployment
* Runtime module sharing
* Reusable remote components
* Separation of frontend applications
* Scalable application architecture

The project contains a main application and a remote application that communicate through Module Federation.

## 🛠️ Installation

### Clone the repository

```bash
git clone https://github.com/aashishsingh-liftkaro/Assignment_project.git
```

### Navigate to the project

```bash
cd Assignment_project
```

### Install dependencies

For the main application:

```bash
cd project-appnpm
npm install
```

For the remote application:

```bash
cd ../remote
npm install
```

## ▶️ Start the Development Server

Start the main application:

```bash
cd project-appnpm
npm run dev
```

Start the remote application in another terminal:

```bash
cd remote
npm run dev
```

The applications will be available at their respective local Vite development URLs.

## 🏗️ Production Build

Create a production build for the main application:

```bash
cd project-appnpm
npm run build
```

Create a production build for the remote application:

```bash
cd remote
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🔐 Git

The project uses Git for version control.

`node_modules` and generated build files are excluded using `.gitignore`.

```gitignore
node_modules/
dist/
build/
.env
.env.*
```

## 📚 Main Libraries

### React

Used for building the application UI.

### TypeScript

Used to provide static typing and improve maintainability.

### Vite

Used for fast development, HMR, and production builds.

### TanStack Table

Used for the table's core functionality including sorting, filtering, searching, and pagination.

### RTK Query

Used for API data fetching, caching, and managing server-side state.

### Module Federation

Used to implement micro-frontend architecture and enable runtime communication between the host and remote applications.

### shadcn/ui

Used for reusable, accessible, and customizable UI components.

### SCSS

Used for custom component styling.



## 👨‍💻 Author

**Aashish Singh**
