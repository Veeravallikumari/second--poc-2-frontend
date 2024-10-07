import React from 'react'



const ProviderCard=({providers})=> {
    return (
        <div style={styles.card}>
            <h3>Name: {providers.name}</h3>
            <p>Email :{providers.email}</p>
            <p>Age: {providers.age}</p>
        </div>
    )
}

const styles={
  card:{
    border: '1px solid #ccc',
    borderRadius:'8px',
    padding:'16px',
    margin:'16px',
    maxWidth:'300px',
  }
}

export default ProviderCard;