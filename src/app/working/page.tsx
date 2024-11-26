'use client'
import React from 'react';
import { Main } from '@/layout/Main/main';

function working() {
  return (
    <Main>
      <div className="App" style={styles.container}>
        <h1 style={styles.text}>🛠️ 404 - Estamos trabajando en ello... 🛠️</h1>
      </div>
    </Main>

  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#black',
  },
  text: {
    fontSize: '24px',
    color: '#333',
  }
};

export default working;