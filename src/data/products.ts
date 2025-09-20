export interface Product {
  id: number;
  name: string;
  artisanId: number;
  artisanName: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  tags: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Handcrafted Ceramic Vase",
    artisanId: 1,
    artisanName: "Sarah Chen",
    price: 89,
    originalPrice: 120,
    image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Pottery",
    description: "Beautiful ceramic vase with unique glaze patterns. Perfect for fresh flowers or as a decorative piece.",
    tags: ["ceramic", "vase", "handmade", "pottery", "home decor"],
    inStock: true
  },
  {
    id: 2,
    name: "Reclaimed Wood Coffee Table",
    artisanId: 2,
    artisanName: "James Wilson",
    price: 450,
    image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Furniture",
    description: "Stunning coffee table made from reclaimed barn wood. Each piece has unique character and history.",
    tags: ["wood", "furniture", "coffee table", "reclaimed", "sustainable"],
    inStock: true
  },
  {
    id: 3,
    name: "Hand-Woven Wool Throw",
    artisanId: 3,
    artisanName: "Maria Rodriguez",
    price: 125,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Textiles",
    description: "Soft wool throw blanket woven with traditional patterns. Perfect for cozy evenings.",
    tags: ["wool", "throw", "blanket", "woven", "textile", "cozy"],
    inStock: true
  },
  {
    id: 4,
    name: "Sterling Silver Pendant",
    artisanId: 4,
    artisanName: "Alex Kumar",
    price: 75,
    originalPrice: 95,
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Jewelry",
    description: "Elegant sterling silver pendant with modern geometric design. Comes with matching chain.",
    tags: ["silver", "pendant", "jewelry", "necklace", "modern"],
    inStock: true
  },
  {
    id: 5,
    name: "Ceramic Dinner Set",
    artisanId: 1,
    artisanName: "Sarah Chen",
    price: 200,
    image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Pottery",
    description: "Complete dinner set for 4 people. Includes plates, bowls, and mugs with matching glaze.",
    tags: ["ceramic", "dinner set", "plates", "pottery", "dining"],
    inStock: true
  },
  {
    id: 6,
    name: "Macramé Wall Hanging",
    artisanId: 3,
    artisanName: "Maria Rodriguez",
    price: 85,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Textiles",
    description: "Beautiful macramé wall hanging made with natural cotton cord. Adds bohemian charm to any space.",
    tags: ["macrame", "wall hanging", "cotton", "boho", "home decor"],
    inStock: true
  }
];