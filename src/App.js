import './App.css';
import { useEffect, useState } from 'react';
import { Octokit } from "octokit";
import { Commit } from './componets/Commit';

function App() {

  const [repo, setRepo] = useState('');
  const [owner, setOwner] = useState('');
  const [reponame, setReponame] = useState('');

  useEffect( () => {

    const octokit = new Octokit({
      auth: `${process.env.REACT_APP_API_TOKEN}`
    })

    const fetchData = async () => {
      try{
          const res = await octokit.request(`GET /repos/${owner}/${reponame}/commits`, {
          owner: `${owner}`,
          repo: `${reponame}`,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })
        setRepo(res.data);
        
      } catch (error) {
        setRepo('');
        console.log("failed to fetch data")
      } 
    }
    fetchData();
  }, [owner, reponame])

  console.log(repo);
  function handleOwnerName (e) {
    setOwner(e.target.value)
  }

  function handleReponame (e) {
    setReponame(e.target.value)
  }
 
  return (
    <div className="App">

      <div className='container1'>
 
        <input 
          type="text"
          id="Owner"
          placeholder='Owner'
          onChange= {handleOwnerName}
          >
        </input>

        <input 
          type="text"
          id="reponame"
          placeholder='Repo name'
          onChange= {handleReponame}
          >
        </input>
      </div>

      <div className='commitsHistory'>
         { repo.length ? repo.map(commit => <Commit key={commit.sha}  data = {commit}/>) : null  }
      </div>
    </div>
  );
}

export default App;
