// src/pages/PrivateTabs.tsx
import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import {
  shirtOutline,
  informationCircle,
  phonePortrait,
  ellipsisHorizontalCircle,
} from "ionicons/icons";
import Brecho from "../pages/Brecho.page";
import Informaçoes from "../pages/Informacoes.page";
import Contato from "../pages/Contato.page";
import Configuracoes from "../pages/Configuracoes.page";
import { Route } from "react-router";

const PrivateTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home/brecho" component={Brecho} exact={true} />
        <Route path="/home/info" component={Informaçoes} exact={true} />
        <Route path="/home/contato" component={Contato} exact={true} />
        <Route path="/home/config" component={Configuracoes} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="brecho" href="/home/brecho">
          <IonIcon icon={shirtOutline} />
          <IonLabel>Brechó</IonLabel>
        </IonTabButton>
        <IonTabButton tab="informacoes" href="/home/informacoes">
          <IonIcon icon={informationCircle} />
          <IonLabel>Informações</IonLabel>
        </IonTabButton>
        <IonTabButton tab="contato" href="/home/contato">
          <IonIcon icon={phonePortrait} />
          <IonLabel>Brechó</IonLabel>
        </IonTabButton>
        <IonTabButton tab="config" href="/home/config">
          <IonIcon icon={ellipsisHorizontalCircle} />
          <IonLabel>Configurações</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default PrivateTabs;
