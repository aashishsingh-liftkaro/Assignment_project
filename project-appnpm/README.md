# React Data Table Project

A modern **React + TypeScript** application built with **Vite** and **TanStack Table**.

The project demonstrates a reusable and scalable data-table architecture with pagination, sorting, filtering, searching, and reusable UI components.

## 🚀 Tech Stack

- **React** – UI library
- **TypeScript** – Type safety
- **Vite** – Development and build tool
- **TanStack Table** – Headless table management
- **SCSS** – Component styling
- **ESLint** – Code quality and linting
- **RTK Query** – Data Fetching and state updates

## 📌 Project Features

### Data Table

The project contains a reusable `DataTable` component built using TanStack Table.

It supports:

- Pagination

### 📄 Pagination

The table includes pagination so large datasets can be displayed across multiple pages.

Users can navigate between:

- Previous page
- Next page
- Individual pages
- Different page sizes

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

## 📁 Project Structure

```text
## 📁 Project Structure

```text
project-appnpm/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   │
│   ├── components/
│   │   ├── table/
│   │   │   ├── DataTable.tsx
│   │   │   └── DataTable.scss
│   │   │
│   │   └── ...
│   │
│   ├── hooks/
│   │   ├── useEmployee.ts
│   │   ├── useProduct.ts
│   │   └── usePost.ts
│   │
│   ├── types/
│   │   └── responseTypes.ts
│   │
│   ├── services/
│   │   ├── employeeService.ts
│   │   ├── postService.ts
│   │   └── productService.ts
│   │
│   ├── styles/
│   │   └── variables.scss
│   │
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Employee.tsx
│   │   ├── Home.tsx
│   │   ├── Post.tsx
│   │   └── Product.tsx
│   │
│   ├── constants/
│   │   ├── TableHeader.tsx
│   │   ├── TableHeader.scss
│   │   └── url-constant.ts
│   │ 
│   ├── store/
│   │    └── store.ts
│   │
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
└── vite.config.ts

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
service
↓
Data
 ↓ 
Column Definitions
 ↓
TanStack Table
 ↓
Pagination
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

- Sorting
- Filtering
- Pagination
- Row models
- Column definitions
- Table state

The UI remains completely customizable.

## 🛠️ Installation

### Clone the repository

```bash
git clone https://github.com/aashishsingh-liftkaro/project-assignment.git
```

### Navigate to the project

```bash
cd project-appnpm
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at the local Vite development URL.

## 🏗️ Production Build

Create a production build:

```bash
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
.env
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

### SCSS

Used for custom component styling.

## 🔮 Future Improvements

Possible future improvements include:

- Server-side pagination
- Server-side searching
- Server-side filtering
- API integration
- Column visibility controls
- Row selection
- Export to CSV/Excel
- Advanced filter UI
- Responsive mobile table
- Loading and empty states

## 👨‍💻 Author

**Aashish Singh**

