import axios from "axios";
import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Admin.css";

const Admin = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imgValue, setImgValue] = useState();

  const onSubmit = (data) => {
    const productValue = {
      bookname: data.book_name,
      author: data.book_author,
      price: data.price,
      image: imgValue,
    };
    fetch("https://rocky-savannah-92763.herokuapp.com/addbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productValue),
    }).then((res) => console.log(res));
  };

  const handleImageUpload = (event) => {
    const newImage = new FormData();
    newImage.set("key", "1e3f125677d34dd6addc22731df17a5a");
    newImage.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", newImage)
      .then((response) => {
        console.log(response.data.data.display_url);
        setImgValue(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="form_box">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="book_name all_in_one">
                  <label>Book Name</label>
                  <input
                    name="book_name"
                    defaultValue=""
                    placeholder="Add Book Name"
                    ref={register}
                  />
                </div>

                {/* include validation with required or other standard HTML validation rules */}
                <div className="book_auth all_in_one">
                  <label>Book Author</label>
                  <input
                    name="book_author"
                    placeholder="Add Author"
                    ref={register({ required: true })}
                  />
                </div>
                <div className="price all_in_one">
                  <label>Price</label>
                  <input
                    name="price"
                    ref={register({ required: true })}
                    placeholder="Price"
                  />
                </div>

                <div className="add_book all_in_one">
                  <label>Add Book Cover </label>
                  <input
                    name="image"
                    type="file"
                    onChange={handleImageUpload}
                  />
                </div>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="btn_sub">
                  <input type="submit" />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
