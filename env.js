export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'https://localhost5001' : ''