export interface Artisan {
  id: number;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  featured: boolean;
  products: number[];
}

export const artisans: Artisan[] = [
  {
    id: 1,
    name: "Sarah Chen",
    specialty: "Ceramic Artist",
    location: "Portland, OR",
    rating: 4.9,
    reviews: 127,
    image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Specializing in functional pottery with modern aesthetic. Each piece is hand-thrown and glazed with unique patterns.",
    featured: true,
    products: [1, 5]
  },
  {
    id: 2,
    name: "James Wilson",
    specialty: "Wood Sculptor",
    location: "Seattle, WA",
    rating: 4.8,
    reviews: 89,
    image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Creating custom furniture and artistic sculptures from reclaimed wood. Sustainable craftsmanship with 15 years experience.",
    featured: false,
    products: [2]
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    specialty: "Textile Designer",
    location: "Austin, TX",
    rating: 5.0,
    reviews: 156,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Hand-woven textiles using traditional techniques passed down through generations. Specializing in natural fibers.",
    featured: true,
    products: [3, 6]
  },
  {
    id: 4,
    name: "Alex Kumar",
    specialty: "Jewelry Maker",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 203,
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Unique metal jewelry crafted with sustainable materials. Each piece tells a story of modern elegance.",
    featured: false,
    products: [4]
  }
];