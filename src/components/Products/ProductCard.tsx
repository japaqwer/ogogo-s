import {
  AspectRatio,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Rating } from "./Rating";
import { FavouriteButton } from "./FavouriteButton";
import { PriceTag } from "./PriceTag";
import { Product } from "./_data";

interface Props {
  product: Product;
  rootProps?: StackProps;
}


export const ProductCard = (props: Props) => {
  const { product, rootProps } = props;
  const { name, imageUrl, price, salePrice, rating } = product;
  return (
    <Stack spacing={{ base: "3", md: "3" }} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{ base: "md", md: "xl" }}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Flex justifyContent={"space-between"}>
            <Text
              fontWeight="medium"
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {name}
            </Text>
            <PriceTag price={price} salePrice={salePrice} currency="USD" />
          </Flex>
        </Stack>
        <HStack>
          {/* <Rating defaultValue={rating} size="sm" /> */}
          <Text fontSize="xs" color={useColorModeValue("gray.600", "gray.400")}>
            Apple M1 chip with 8‑core CPUВидеокартаIntegrated 7-core – 8-core
            GPURAM8GB – 16GB unified
          </Text>
        </HStack>
      </Stack>
      <Flex align="center">
        <Button bg={"#009B95"} color={"white"} width="full">
          В корзину
        </Button>
        <Button bg={"#009B95"} color={"white"} width="full">
          купить
        </Button>
        {/* <Link
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Quick shop
        </Link> */}
      </Flex>
    </Stack>
  );
};
