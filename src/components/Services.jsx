import React, { useEffect, useState } from 'react';
import axios from 'axios'
import List from './List';
import withListLoading from './WithListLoading';

const Services = ({repos}) => {

    const ListLoading = withListLoading(List);

    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {

        setAppState({ loading: true });

        const apiUrl = 'https://api.github.com/users/hacktivist123/repos';

        axios.get(apiUrl).then((repos) => {
        const allRepos = repos.data;
        setAppState({ loading: false, repos: allRepos });
        });
    }, [setAppState]);

      return (
        <main>
            <div className='container'>
                <h1>My Repositories</h1>
            </div>
            <div className='repo-container'>
                <ListLoading isLoading={appState.loading} repos={appState.repos} />
            </div>
        </main>
      );
}

export default Services