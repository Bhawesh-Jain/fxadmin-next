"use client"
import { useEffect } from 'react';

const AlwaysRefreshPage = () => {
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem('hasReloaded');

    if (!hasReloaded) {
      sessionStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }
  }, []);

  return null; 
};

export default AlwaysRefreshPage;