import React, { ChangeEvent, FormEvent } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface State {
  description: string;
  category: string;
  price: number;
  quantity: number;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  in_stock: boolean;
  vendor_code: string;
  discount: number;
  display: string;
  processor: string;
  video_card: string;
  ram: string;
  color: string;
  connection_type: string;
  design: string;
  wire_length: string;
  equipment: string;
  type: string;
  charging_type: string;
  material: string;
  model: string;
  capacity: string;
  fastening: string;
}

class AdminProduct extends React.Component<{}, State> {
  state: State = {
    description: "",
    category: "",
    price: 0,
    quantity: 0,
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    in_stock: false,
    vendor_code: "",
    discount: 0,
    display: "",
    processor: "",
    video_card: "",
    ram: "",
    color: "",
    connection_type: "",
    design: "",
    wire_length: "",
    equipment: "",
    type: "",
    charging_type: "",
    material: "",
    model: "",
    capacity: "",
    fastening: "",
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      ...this.state,
      [e.target.id]: value,
    } as Pick<State, keyof State>);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let data2 =  new FormData();
    data2.append("category", this.state.category)
    data2.append("description", this.state.description);
    // data2.append("description", this.state.description);
    const data = {
      description: this.state.description,
      category: this.state.category,
      price: this.state.price,
      quantity: this.state.quantity,
      image1: this.state.image1,
      image2: this.state.image2,
      image3: this.state.image3,
      image4: this.state.image4,
      image5: this.state.image5,
      in_stock: this.state.in_stock,
      vendor_code: this.state.vendor_code,
      discount: this.state.discount,
      display: this.state.display,
      processor: this.state.processor,
      video_card: this.state.video_card,
      ram: this.state.ram,
      color: this.state.color,
      connection_type: this.state.connection_type,
      design: this.state.design,
      wire_length: this.state.wire_length,
      equipment: this.state.equipment,
      type: this.state.type,
      charging_type: this.state.charging_type,
      material: this.state.material,
      model: this.state.model,
      capacity: this.state.capacity,
      fastening: this.state.fastening,
    };

    let url = "http://127.0.0.1:8000/api/admin_panel/product_create/";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        // window.location.href = "/";
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    console.log(data);
  };

  render() {
    return (
      <Box rounded={"lg"} boxShadow={"lg"} p={8}>
        <Flex minH={"70vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={6} px={3}>
            <Box rounded={"lg"} boxShadow={"lg"} p={8}>
              <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Описание"
                    id="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Категория"
                    id="category"
                    value={this.state.category}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="number"
                    placeholder="Цена"
                    id="price"
                    value={this.state.price}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="number"
                    placeholder="Количество"
                    id="quantity"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="file"
                    placeholder="Изображение 1"
                    id="image1"
                    value={this.state.image1}
                    onChange={this.handleChange}
                    required
                  />
                  <Input
                    type="file"
                    placeholder="Изображение 2"
                    id="image2"
                    value={this.state.image2}
                    onChange={this.handleChange}
                    required
                  />
                  <Input
                    type="file"
                    placeholder="Изображение 3"
                    id="image3"
                    value={this.state.image3}
                    onChange={this.handleChange}
                    required
                  />
                  <Input
                    type="file"
                    placeholder="Изображение 4"
                    id="image4"
                    value={this.state.image4}
                    onChange={this.handleChange}
                    required
                  />
                  <Input
                    type="file"
                    placeholder="Изображение 5"
                    id="image5"
                    value={this.state.image5}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                {/* <Box mt={8}>
                  <Input
                    type="checkbox"
                    id="in_stock"
                    checked={this.state.in_stock}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="in_stock">В наличии</label>
                </Box> */}
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Артикул"
                    id="vendor_code"
                    value={this.state.vendor_code}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="number"
                    placeholder="Скидка"
                    id="discount"
                    value={this.state.discount}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Дисплей"
                    id="display"
                    value={this.state.display}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Процессор"
                    id="processor"
                    value={this.state.processor}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Видеокарта"
                    id="video_card"
                    value={this.state.video_card}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Оперативная память"
                    id="ram"
                    value={this.state.ram}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Цвет"
                    id="color"
                    value={this.state.color}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Тип соединения"
                    id="connection_type"
                    value={this.state.connection_type}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Дизайн"
                    id="design"
                    value={this.state.design}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Длина провода"
                    id="wire_length"
                    value={this.state.wire_length}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Комплектация"
                    id="equipment"
                    value={this.state.equipment}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Тип"
                    id="type"
                    value={this.state.type}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Тип зарядки"
                    id="charging_type"
                    value={this.state.charging_type}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Материал"
                    id="material"
                    value={this.state.material}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Модель"
                    id="model"
                    value={this.state.model}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Емкость"
                    id="capacity"
                    value={this.state.capacity}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Крепление"
                    id="fastening"
                    value={this.state.fastening}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Button
                  type="submit"
                  boxShadow={"xl"}
                  size="lg"
                  fontWeight={"bold"}
                  px={6}
                  py={3}
                  _hover={{
                    bgGradient: "linear(to-r, teal.500,green.500)",
                    boxShadow: "xl",
                  }}
                >
                  Создать продукт
                </Button>
              </form>
            </Box>
          </Stack>
        </Flex>
      </Box>
    );
  }
}

export default AdminProduct;
