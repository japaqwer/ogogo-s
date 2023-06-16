import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

function CardThree() {
  return (
    <Container py={5} maxW={"container.lg"}>
      <Text fontSize={["lg", "xl"]} fontWeight="bold" mb={2}>
        Рекомендуемое
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        <GridItem w="100%">
          <Box
            borderRadius="10px"
            boxShadow="-1px 0px 9px rgba(0, 0, 0, 0.1), 1px 1px 9px rgba(0, 0, 0, 0.05)"
          >
            <Flex mb={6} p={6}>
              <Box mr={[0, 4]} mb={[4, 0]}>
                <Image
                  boxSize={["100%", "230px"]}
                //   objectFit="cover"
                  src="/images/imac.png"
                  alt="Dan Abramov"
                />
                <Link href="#" color={"#009B95"}>
                  Подробнее
                </Link>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box
            borderRadius="10px"
            boxShadow="-1px 0px 9px rgba(0, 0, 0, 0.1), 1px 1px 9px rgba(0, 0, 0, 0.05)"
          >
            <Flex mb={6} p={6}>
              <Box mr={[0, 4]} mb={[4, 0]}>
                <Image
                  boxSize={["100%", "230px"]}
                //   objectFit="cover"
                  src="/images/ctol.png"
                  alt="Dan Abramov"
                />
                <Link href="#" color={"#009B95"}>
                  Подробнее
                </Link>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box
            borderRadius="10px"
            boxShadow="-1px 0px 9px rgba(0, 0, 0, 0.1), 1px 1px 9px rgba(0, 0, 0, 0.05)"
          >
            <Flex mb={6} p={6}>
              <Box mr={[0, 4]} mb={[4, 0]}>
                <Image
                  boxSize={["100%", "230px"]}
                //   objectFit="cover"
                  src="/images/ctol.png"
                  alt="Dan Abramov"
                />
                <Link href="#" color={"#009B95"}>
                  Подробнее
                </Link>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <GridItem w="100%">
          <Box
            borderRadius="10px"
            boxShadow="-1px 0px 9px rgba(0, 0, 0, 0.1), 1px 1px 9px rgba(0, 0, 0, 0.05)"
          >
            <Flex mb={6} p={6}>
              <Box mr={[0, 4]} mb={[4, 0]}>
                <Image
                  boxSize={["100%", "230px"]}
                //   objectFit="cover"
                  src="/images/comp.png"
                  alt="Dan Abramov"
                />
                <Link href="#" color={"#009B95"}>
                  Подробнее
                </Link>
              </Box>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default CardThree;
