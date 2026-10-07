const baseUrl = 'https://api.api-store.workers.dev/api/bazardor'

export const AllProducts = async () => {
  const res = await fetch(
    "https://better-auth-backend-kappa.vercel.app/api/products",{cache:'force-cache'}
  );

  const data = await res.json();

  return data;
};




export default baseUrl;