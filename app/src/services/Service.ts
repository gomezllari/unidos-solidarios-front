import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-trabalho.onrender.com",
});

interface IRoupa {
  titulo: string;
  preco: number;
  descricao?: string;
  imagemBase64: string;
}

export const login = async (usuario: string, senha: string) => {
  const response = await api.post("/auth/entrar", { usuario, senha });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Credenciais inválidas");
  }
};

export const cadastrar = async (
  nome: string,
  usuario: string,
  senha: string
) => {
  const response = await api.post("/auth/cadastrar", { nome, usuario, senha });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Credenciais inválidas");
  }
};

export const getRoupas = async () => {
  const response = await api.get("/brecho");
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Credenciais inválidas");
  }
};

export const declararInteresse = async (roupaId: number) => {
  const response = await api.post("/brecho/interesses/" + roupaId);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Erro ao declarar interesse");
  }
};

export const tirarInteresse = async (roupaId: number) => {
  const response = await api.delete("/brecho/interesses/" + roupaId);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Erro ao declarar interesse");
  }
};

export const adicionarRoupa = async (roupa: IRoupa) => {
  const response = await api.post("/brecho", roupa);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Erro ao declarar interesse");
  }
};

export const removerRoupa = async (roupaId: string) => {
  const response = await api.delete("/brecho/" + roupaId);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Erro ao remover roupa");
  }
};

export const editarRoupa = async (roupa: IRoupa, roupaId: string) => {
  const response = await api.put("/brecho/" + roupaId, roupa);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Erro ao declarar interesse");
  }
};
