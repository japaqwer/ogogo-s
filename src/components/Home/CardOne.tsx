import { Container, Grid, Box, Text, Heading, Image, Flex, Link } from "@chakra-ui/react";

function CardOne() {
  return (
    <Container py={5} maxW={"container.lg"}>
      <Text fontSize={["lg", "xl"]} fontWeight="bold" mb={2}>
        Популярные товары
      </Text>
      <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap={4}>
        <Box
          borderRadius="10px"
          // border="1px"
          boxShadow="-1px 0px 9px rgba(0, 0, 0, 0.1), 1px 1px 9px rgba(0, 0, 0, 0.05)"
        >
          <Flex direction={["column", "row"]} mb={4} p={4}>
            <Box mr={[0, 4]} mb={[4, 0]}>
              <Image
                boxSize={["100%", "180px"]}
                // objectFit="cover"
                src="/images/qwertyuiop.png"
                alt="Dan Abramov"
              />
            </Box>
            <Box>
              <Text fontSize={["lg", "xl"]} fontWeight="bold" mb={2}>
                Slim W1 Wired backlit keyboard
              </Text>
              <Text fontSize="lg">Легко очищается</Text>
              <Text fontSize="lg">То что тебе нужно</Text>
              <Link href="#" color={"#009B95"}>
                Подробнее
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box
          borderRadius="10px"
          boxShadow="-1px 0px 9px rgba(0, 0, 0, 0.1), 1px 1px 9px rgba(0, 0, 0, 0.05)"
        >
          <Flex direction={["column", "row"]} mb={4} p={4}>
            <Box mr={[0, 4]} mb={[4, 0]}>
              <Image
                boxSize={["100%", "180px"]}
                // objectFit="cover"
                src="/images/qwertyuiop.png"
                alt="Dan Abramov"
              />
            </Box>
            <Box>
              <Text fontSize={["lg", "xl"]} fontWeight="bold" mb={2}>
                Slim W1 Wired backlit keyboard
              </Text>
              <Text fontSize="lg">Легко очищается</Text>
              <Text fontSize="lg">То что тебе нужно</Text>
              <Link href="#" color={"#009B95"}>
                Подробнее
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box
          borderRadius="10px"
          boxShadow="-1px 0px 9px rgba(0, 0, 0, 0.1), 1px 1px 9px rgba(0, 0, 0, 0.05)"
        >
          <Flex direction={["column", "row"]} mb={4} p={4}>
            <Box mr={[0, 4]} mb={[4, 0]}>
              <Image
                boxSize={["100%", "180px"]}
                // objectFit="cover"
                src="/images/qwertyuiop.png"
                alt="Dan Abramov"
              />
            </Box>
            <Box>
              <Text fontSize={["lg", "xl"]} fontWeight="bold" mb={2}>
                Slim W1 Wired backlit keyboard
              </Text>
              <Text fontSize="lg">Легко очищается</Text>
              <Text fontSize="lg">То что тебе нужно</Text>
              <Link href="#" color={"#009B95"}>
                Подробнее
              </Link>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Container>
  );
}

export default CardOne;
