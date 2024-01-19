import './App.css';
import { useEffect, useState } from 'react';
import { Octokit } from "octokit";

function App() {

  const [repo, setRepo] = useState([]); 
  // const [user, setUser] = useState({});

  useEffect( () => {

    const octokit = new Octokit({
      auth: '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'
    })

    const fetchData = async () => {
      try{
          const res = await octokit.request('GET /repos/Moeletsi47/Calculator/commits', {
          owner: 'OWNER',
          repo: 'REPO',
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })

        setRepo(res);

      } catch (error) {
        console.log("failed to fetch data")
      } 

     
      console.log(repo)
    }

    fetchData();

  },[])
  return (
    <div className="App">
      Hello React
    </div>
  );
}

export default App;
