import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonToast,
} from "@ionic/react";
import Login from "./Login.page";

const Configuracoes: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAutenticado(true);
    } else {
      setAutenticado(false);
    }
  }, []);

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      setToastMessage("As senhas não coincidem!");
      setShowToast(true);
      return;
    }
    // Aqui você pode adicionar a lógica para troca de senha
    setToastMessage("Senha alterada com sucesso!");
    setShowToast(true);
  };

  return autenticado ? (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Troca de Senha</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Senha Atual</IonLabel>
          <IonInput
            type="password"
            value={currentPassword}
            onIonChange={(e) => setCurrentPassword(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Nova Senha</IonLabel>
          <IonInput
            type="password"
            value={newPassword}
            onIonChange={(e) => setNewPassword(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Confirme Nova Senha</IonLabel>
          <IonInput
            type="password"
            value={confirmPassword}
            onIonChange={(e) => setConfirmPassword(e.detail.value!)}
          />
        </IonItem>
        <IonButton expand="full" onClick={handleChangePassword}>
          Alterar Senha
        </IonButton>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  ) : (
    <Login />
  );
};

export default Configuracoes;
