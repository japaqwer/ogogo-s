import {
  Container,
  Grid,
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";

function CardTwo() {
  return (
    <Container py={5} maxW={"container.lg"}>
      <Text fontSize={["lg", "xl"]} fontWeight="bold" mb={2}>
        Категории
      </Text>
      <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap={4}>
        <Box
          borderRadius="10px"
          boxShadow="-1px 0px 9px rgba(0, 0, 0, 0.1), 1px 1px 9px rgba(0, 0, 0, 0.05)"
        >
          <Box mb={4} p={4}>
            <Box>
              <Text fontSize={["lg", "xl"]} fontWeight="bold" mb={2}>
                Наушники
              </Text>
              <Link href="#" color={"#009B95"} bottom={0}>
                подробнее
              </Link>
            </Box>
            <Box
              mr={[0, 4]}
              mb={[4, 0]}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                boxSize={["100%", "300px"]}
                objectFit="cover"
                src="/images/airpods.png"
                alt="Dan Abramov"
              />
            </Box>
          </Box>
        </Box>
        <Grid templateColumns={["1fr", "1fr", "2fr 1fr"]} gap={4}>
          <Flex
            direction={["column", "row"]}
            mb={4}
            p={4}
            borderRadius="10px"
            boxShadow="-1px 0px 9px rgba(0, 0, 0, 0.1), 1px 1px 9px rgba(0, 0, 0, 0.05)"
          >
            <Box mr={[0, 4]} mb={[4, 0]}>
              <Text fontSize={["lg", "md"]} fontWeight="bold" mb={2}>
                Mac
              </Text>
              <Link href="#" color={"#009B95"}>
                Подробнее
              </Link>
              <Image
                boxSize={["100%", "200px"]}
                // objectFit="cover"
                src="/images/mac.png"
                alt="Dan Abramov"
              />
            </Box>
          </Flex>
          <Flex
            direction={["column", "row"]}
            mb={4}
            p={4}
            borderRadius="10px"
            boxShadow="-1px 0px 9px rgba(0, 0, 0, 0.1), 1px 1px 9px rgba(0, 0, 0, 0.05)"
          >
            <Box mr={[0, 4]} mb={[4, 0]}>
              <Text fontSize={["lg", "md"]} fontWeight="bold" mb={2}>
                Сумки
              </Text>
              <Link href="#" color={"#009B95"}>
                Подробнее
              </Link>
              <Image
                boxSize={["100%", "180px"]}
                objectFit="cover"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Box>
          </Flex>
          <Flex
            direction={["column", "row"]}
            mb={4}
            p={4}
            borderRadius="10px"
            boxShadow="-1px 0px 9px rgba(0, 0, 0, 0.1), 1px 1px 9px rgba(0, 0, 0, 0.05)"
          >
            <Box ml={[0, 4]}>
              <Text fontSize={["lg", "md"]} fontWeight="bold" mb={2}>
                Планшеты
              </Text>
              <Link href="#" color={"#009B95"}>
                Подробнее
              </Link>
              <Image
                boxSize={["100%", "180px"]}
                objectFit="cover"
                src="/images/ipad.png"
                alt="Dan Abramov"
              />
            </Box>
          </Flex>
        </Grid>

        <Box
          borderRadius="10px"
          boxShadow="-1px 0px 9px rgba(0, 0, 0, 0.1), 1px 1px 9px rgba(0, 0, 0, 0.05)"
        >
          <Box mb={4} p={4}>
            <Box>
              <Text fontSize={["lg", "xl"]} fontWeight="bold" mb={2}>
                Телефоны
              </Text>
              <Link href="#" color={"#009B95"}>
                Подробнее
              </Link>
            </Box>
            <Box mr={[0, 4]} mb={[4, 0]}>
              <Image
                boxSize={["100%", "350px"]}
                // objectFit="cover"
                src="/images/iphone.png"
                alt="Dan Abramov"
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}

export default CardTwo;
