export interface Employee  {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  salary: number;
};

export type EmployeesResponse = {
  users: Employee[];
  total: number;
  skip: number;
  limit: number;
};


export interface Reactions {
  likes: number;
  dislikes: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}



export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  // add more fields here if you use them from the API
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}