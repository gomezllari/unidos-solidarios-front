import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import { cadastrar, login } from "../services/Service";
import { useHistory } from "react-router";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const handleAuth = async () => {
    if (isLogin) {
      await loginFunc();
    } else {
      cadastrar(nome, usuario, senha);
      loginFunc();
    }
  };

  const loginFunc = async () => {
    const result = await login(usuario, senha);
    localStorage.setItem("token", result.token);
    useHistory().push("/");
  };
  const alteraSenha = (e: any) => {
    console.log(e);
    setSenha(e.detail.value!);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{isLogin ? "Login" : "Cadastro"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {!isLogin && (
          <IonItem>
            <IonLabel position="floating">Nome</IonLabel>
            <IonInput
              type="text"
              value={nome}
              onIonChange={(e) => setNome(e.detail.value!)}
            />
          </IonItem>
        )}
        <IonItem>
          <IonLabel position="floating">Nome de usuário</IonLabel>
          <IonInput
            type="text"
            value={usuario}
            onIonChange={(e) => setUsuario(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Senha</IonLabel>
          <IonInput type="password" value={senha} onIonChange={alteraSenha} />
        </IonItem>
        <IonButton expand="full" onClick={handleAuth}>
          {isLogin ? "Entrar" : "Cadastrar"}
        </IonButton>
        <IonButton
          expand="full"
          color="medium"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Não tem uma conta? Cadastre-se"
            : "Já tem uma conta? Faça login"}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
