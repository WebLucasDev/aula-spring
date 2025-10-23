const getApiBaseUrl = (): string => {
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  if (window.location.hostname.includes('github.dev')) {
    const hostname = window.location.hostname;
    return `https://${hostname.replace('-5173.', '-8080.')}`;
  }
  
  return 'http://localhost:8080';
};

export const API_BASE_URL = getApiBaseUrl();

console.log('URL:', API_BASE_URL);
