import { fetchJson } from "@/helpers/fetcher";
import axios from "axios";
import useSWR from "swr";
// import { fetchJson } from "@/helpers/fetcher";
interface product_test {
  id: any;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image1: string | null;
  image2: string | null;
  image3: string | null;
  image4: string | null;
  image5: string | null;
  in_stock: boolean;
  vendor_code: string;
  discount: number;
  display: string | null;
  processor: string | null;
  video_card: string | null;
  ram: string | null;
  color: string | null;
  connection_type: string | null;
  design: string | null;
  wire_length: string | null;
  equipment: string | null;
  type: string | null;
  charging_type: string | null;
  material: string | null;
  model: string | null;
  capacity: string | null;
  fastening: string | null;
  width: string | null;
  length: string | null;
  height: string | null;
  category: number;
}

export const images = [
  {
    id: "01",
    src: "https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    alt: "Awesome watch",
  },
  {
    id: "02",
    src: "https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1777&q=80",
    alt: "Awesome watch",
  },
];

export const products = [
  {
    id: "1",
    name: "Bamboo Tan",
    currency: "USD",
    price: 122,
    flag: "new",
    imageUrl:
      "https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    ratingCount: 1,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images,
  },
  {
    id: "2",
    name: "Iconic Turquoise",
    currency: "USD",
    price: 199,
    salePrice: 179.99,
    flag: "on-sale",
    imageUrl:
      "https://images.unsplash.com/photo-1509941943102-10c232535736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    rating: 4,
    ratingCount: 12,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images,
  },
  {
    id: 3,
    name: "фыв",
    description: "фывыфвф",
    price: 324535,
    quantity: 12,
    image1:
      "http://127.0.0.1:8000/api/admin_panel/product_list/?page=2/{image1}",
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    in_stock: true,
    vendor_code: "234sdf",
    discount: 12,
    display: null,
    processor: null,
    video_card: null,
    ram: null,
    color: null,
    connection_type: null,
    design: null,
    wire_length: null,
    equipment: null,
    type: null,
    charging_type: null,
    material: null,
    model: null,
    capacity: null,
    fastening: null,
    width: null,
    length: null,
    height: null,
    category: 1,
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;
export type ProductImage = ElementType<typeof images>;

export const productTest = () => {
  const data2 = useSWR(
    "http://127.0.0.1:8000/api/admin_panel/product_list/?page=2",
    fetchJson
  );
  const { data, error } = useSWR(
    "http://127.0.0.1:8000/api/admin_panel/product_list/?page=2",
    fetchJson
  );
  console.log(data2);
  const productData = [
    {
      id: 2,
      name: "фыв",
      description: "фывыфвф",
      price: 324535,
      quantity: 12,
      image1:
        "/media/media/product_image/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-04-24_%D0%B2_20.36.20.png",
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      in_stock: true,
      vendor_code: "234sdf",
      discount: 12,
      display: null,
      processor: null,
      video_card: null,
      ram: null,
      color: null,
      connection_type: null,
      design: null,
      wire_length: null,
      equipment: null,
      type: null,
      charging_type: null,
      material: null,
      model: null,
      capacity: null,
      fastening: null,
      width: null,
      length: null,
      height: null,
      category: 1,
    },
  ];

  return data || productData;
};

