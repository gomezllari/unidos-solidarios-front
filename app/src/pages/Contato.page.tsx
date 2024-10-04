import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonIcon,
} from '@ionic/react';
import { call, mail, pin } from 'ionicons/icons';

const Contato: React.FC = () => {
  const phoneNumber = '(51) 99503-9548';
  const email = 'unidosesolidariossrd@gmail.com';
  const address = 'Rua Jackson Figueredo, 1142, Bairro Sarandi, Porto Alegre, RS';

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contato</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem button onClick={() => window.open(`https://wa.me/55${phoneNumber.replace(/\D/g, '')}`, '_system')}>
            <IonIcon slot="start" icon={call} />
            <IonLabel>
              <h2>Telefone e WhatsApp:</h2>
              <IonText>{phoneNumber}</IonText>
            </IonLabel>
          </IonItem>
          <IonItem button onClick={() => window.open(`mailto:${email}`, '_system')}>
            <IonIcon slot="start" icon={mail} />
            <IonLabel>
              <h2>E-mail:</h2>
              <IonText>{email}</IonText>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={pin} />
            <IonLabel>
              <h2>Endereço:</h2>
              <IonText>{address}</IonText>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Contato;


