import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import ProviderCard from './ProviderCard';

const Provider=()=>{
    const [providers,setProviders]=useState([]);
    const [newProvider,setNewProvider]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/providers/details')
        .then(response=>setProviders(response.data))
        .catch(error=>console.error(error));
    },[]);

    const handleAddProvider=()=>{
        axios.post('http://localhost:5000/providers',newProvider)
        .then(response=>{
            setProviders([...providers,response.data.user]);
            setNewProvider({});
        })
        .catch(error=> console.error(error));
    };

    return(

        <div>
      <div style={styles.container}>
        {providers.map((provider) => (
          <ProviderCard key={provider.email} provider={provider} />
        ))}
      </div>
      <div style={styles.form}>
        <h2>Add New Provider</h2>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setNewProvider({ ...newProvider, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setNewProvider({ ...newProvider, email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setNewProvider({ ...newProvider, age: e.target.value })}
        />
        <button onClick={handleAddProvider}>Add User</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  form: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '300px',
  },
};

export default Provider;