import { useState } from 'react';
import githubImg from '../../assets/images/github.png'
import Input from '../../components/Input';
import Repo from '../../components/Repo';
import { Container } from './styles';
import Button from '../../components/Button';
import { api } from '../../services/api'

function App() {
  const [repos, setRepos] = useState([])
  const [inputValue, setInputValue] = useState("");

  async function handleSearchRepo(url) {
    try {
      const response = await api.get(`repos/${url}`)
      
      if(response.data.id) {
        const exist = repos.filter(repo => repo.id === response.data.id)[0]

        if(!exist) {
          setRepos(prev => [...prev, response.data])
          setInputValue("")
        } else {
          alert("Repositório já adicionado!")
        }
      } else {
        throw new Error("Repositório não encontrado")
      }
    } catch (error) {
      alert(error)
    }
  }

  function handleRemoveRepo(id) {
    const newList = (repos.filter(repo => repo.id !== Number(id)))
    setRepos(newList)
  }

  return (
    <Container className="App">
      <img src={githubImg} alt="Logo do Github" width={72} height={72} />
      <Input 
        handleChange={(e) => setInputValue(e.target.value)}
        currentValue={inputValue}
      />
      <Button 
        handleClick={() => handleSearchRepo(inputValue)}
      />
      {repos.map(repo => <Repo data={repo} handleRemove={(e) => handleRemoveRepo(e.target.id)} />)}
    </Container>
  );
}

export default App;
