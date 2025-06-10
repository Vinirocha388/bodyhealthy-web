import axios from "axios";

// URL base da API
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001";

// Cliente axios com URL base configurada
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para adicionar token em requisições autenticadas
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


// Função para fazer login com email ou userName
export const login = async (credentials = {}) => {
  const { email, userName, password } = credentials;

  try {
    const response = await apiClient.post("https://bodyhealthy-back.onrender.com/auth/login", {
      email,
      userName,
      password,
    });

    const data = response.data;

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    return { success: true, token: data.token, user: data.user };
  } catch (error) {
    if (error.response && error.response.data) {
      return {
        success: false,
        message: error.response.data.error || error.response.data.message,
      };
    }
    return { success: false, message: "Erro ao conectar ao servidor." };
  }
};



// Função para registrar novo usuário
export const register = async (userData) => {
  try {
    const response = await apiClient.post("/auth/register", userData);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Erro no registro:", error);

    if (error.response) {
      // Verificar erros comuns de registro
      if (error.response.status === 409) {
        // Verifica se o erro é de email, userName ou cellphone já em uso
        const message = error.response.data?.message || "";
        if (message.toLowerCase().includes("email")) {
          return {
            success: false,
            message: "Este email já está em uso.",
          };
        }
        if (message.toLowerCase().includes("username")) {
          return {
            success: false,
            message: "Este userName já está em uso.",
          };
        }
        if (message.toLowerCase().includes("cellphone")) {
          return {
            success: false,
            message: "Este celular já está em uso.",
          };
        }
        return {
          success: false,
          message: "Este email, userName ou celular já está em uso.",
        };
      }

      return {
        success: false,
        message: error.response.data?.message || "Erro ao cadastrar.",
      };
    } else if (error.request) {
      return {
        success: false,
        message: "Servidor não respondeu. Verifique sua conexão.",
      };
    } else {
      return {
        success: false,
        message: "Erro ao tentar conectar com o servidor.",
      };
    }
  }
};

// Função para verificar autenticação atual
export const checkAuth = async () => {
  try {
    const response = await apiClient.get("/auth/me");
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return { success: false };
  }
};

// Função para fazer logout (limpa tokens no client-side)
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // Limpar o cookie (útil para integração com middleware)
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  return { success: true };
};

// Exportar o cliente axios configurado
export default apiClient;