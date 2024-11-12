'use client'
import React from 'react';
import { Header } from '../../../my-serflix-web/src/layout/Main/subComponents/Header/header';
import { Footer } from '@/layout/Main/subComponents/Footer/footer';

function working() {
  return (
    <main>
    <Header />
    <div className="App" style={styles.container}>
      <h1 style={styles.text}>🛠️ 404 - Estamos trabajando en ello... 🛠️</h1>
    </div>
    <Footer />
    </main>
   
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