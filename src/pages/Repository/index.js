import React, { useEffect, useState } from "react";

import api from "../../services/api";
import Container from "../../components/Container";
import {
  Loading,
  Owner,
  IconLoader,
  IconChevLeft,
  LinkBackToHome,
  IssuesList,
} from "./styles";

export default function Repository({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const repositoryName = decodeURIComponent(match.params.repository);
    async function getPromisses() {
      return await Promise.all([
        api.get(`/repos/${repositoryName}`),
        api.get(`/repos/${repositoryName}/issues`, {
          params: {
            state: "open",
            page: 1,
            per_page: 5,
          },
        }),
      ]);
    }

    getPromisses().then(function (value) {
      const [repo, iss] = value;

      setRepository(repo.data);

      setIssues(iss.data);
      setLoading(false);
    });
  }, []); //eslint-disable-line
  if (loading) {
    return (
      <Loading>
        Carregando
        <IconLoader />
      </Loading>
    );
  }

  return (
    <Container>
      <Owner>
        <LinkBackToHome to="/">
          <IconChevLeft />
        </LinkBackToHome>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <h1>{repository.owner.login}</h1>
        <h2>{repository.name}</h2>
        <p>{repository.description}</p>
      </Owner>
      <IssuesList>
        {issues.length > 0 ? (
          issues.map((issue) => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}> {issue.title}</a>
                  {issue.labels.map((label) => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))
        ) : (
          <h3>O repositorio não possui Issues</h3>
        )}
      </IssuesList>
    </Container>
  );
}
