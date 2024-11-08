const API_BASE_URL = "https://auth-back-end-nu.vercel.app"
export const register = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Registration failed!");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed!");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
