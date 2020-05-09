import React, { useState } from "react";
import { Container, Form, SubmitButton, IconGithub, IconPlus } from "./styles";
function Main() {
  const [newRepository, setNewRepository] = useState("");

  function handleInputChange(e) {
    setNewRepository(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(newRepository);
  }

  return (
    <Container>
      <h1>
        <IconGithub />
        Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar repositorio"
          value={newRepository}
          onChange={handleInputChange}
        />

        <SubmitButton type="submit">
          <IconPlus />
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Main;
