import { fetchJson } from "@/helpers/fetcher";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Img,
  Text,
} from "@chakra-ui/react";
import useSWR from "swr";

export interface IProduct {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
  vendor_code: string;
}

const ProductList = () => {
  const { data, error } = useSWR(
    "http://127.0.0.1:8000/api/admin_panel/product_list/?page=2",
    fetchJson
  );

  if (error) {
    return <div>Не удалось загрузить данные о продуктах.</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((product: IProduct) => (
        <Card key={product.id} bg={"white"}>
          <CardHeader>
            <Heading size="md" color={"black"}>
              {product.name}
            </Heading>
          </CardHeader>
          <CardBody>
            <Image src={product.image} alt={"12345678"} />
            <Text color={"black"}>{product.description}</Text>
            <Text color={"black"}>{product.price}</Text>
            <Text color={"black"}>{product.quantity}</Text>
            <Text color={"black"}>{product.vendor_code}</Text>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
