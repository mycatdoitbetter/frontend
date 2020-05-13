import React, { useState, useContext, useEffect, useRef } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import {
  Form,
  SubmitButton,
  IconGithub,
  IconPlus,
  IconLoader,
  List,
  IconTrash,
  SwitchCustom,
} from "./styles";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { ThemeContext } from "../../App";
export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

function Main() {
  const actualTheme = useContext(ThemeContext);

  const [newRepository, setNewRepository] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [switcher, setSwitcher] = useState(false);

  const switchIcon = (isLight) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 15,
        color: "#f0f0f0",
        paddingRight: 2,
      }}
    >
      {isLight ? <FiSun /> : <FiMoon />}
    </div>
  );

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const response = await api.get(`repos/${newRepository}`);
    const data = response.data.full_name;
    setRepositories([...repositories, data]);
    setNewRepository("");
    setLoading(false);
  }

  useEffect(() => {
    const repositoriesOnlocalStorage = localStorage.getItem("repositories");

    if (repositoriesOnlocalStorage) {
      setRepositories(JSON.parse(repositoriesOnlocalStorage));
    }
  }, []);

  const prevRepositories = usePrevious(repositories);
  useEffect(() => {
    if (prevRepositories !== repositories) {
      localStorage.setItem("repositories", JSON.stringify(repositories));
    }
  }, [repositories]); //eslint-disable-line

  function deleteItem(item) {
    if (window.confirm(`Você realmente deseja excluir ${item}?`)) {
      repositories.splice(repositories.indexOf(item), 1);
      localStorage.setItem("repositories", JSON.stringify(repositories));
      window.location.reload();
    }
  }

  return (
    <Container>
      <SwitchCustom
        onChange={() => {
          actualTheme();
          setSwitcher(!switcher);
        }}
        checked={switcher}
        checkerIcon={false}
        checkedIcon={switchIcon(true)}
        uncheckedIcon={switchIcon(false)}
      />
      <h1>
        <IconGithub />
        Repositórios
      </h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar repositorio (owner/repository)"
          value={newRepository}
          onChange={(e) => {
            setNewRepository(e.target.value);
          }}
        />
        <SubmitButton loading={loading}>
          {loading ? <IconLoader /> : <IconPlus />}
        </SubmitButton>
      </Form>
      <List>
        {repositories.map((repository) => (
          <li key={repository.indexOf()}>
            <span>{repository}</span>

            <IconTrash onClick={() => deleteItem(repository)} />
            <Link to={`/repository/${encodeURIComponent(repository)}`}>
              Detalhes
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}

export default Main;
