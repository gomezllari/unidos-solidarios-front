// src/App.tsx
import React from "react";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "@ionic/react/css/palettes/dark.system.css";

setupIonicReact();
import Brecho from "./pages/Brecho.page";
import Configuracoes from "./pages/Configuracoes.page";
import Contato from "./pages/Contato.page";
import Informacoes from "./pages/Informacoes.page";
import {
  ellipsisHorizontalCircleOutline,
  informationCircleOutline,
  phoneLandscapeOutline,
  shirtOutline,
} from "ionicons/icons";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/brecho">
            <Brecho />
          </Route>
          <Route exact path="/info">
            <Informacoes />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
          <Route exact path="/conta">
            <Configuracoes />
          </Route>
          <Route exact path="/">
            <Redirect to="/info" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="brecho" href="/brecho">
            <IonIcon aria-hidden="true" icon={shirtOutline} />
            <IonLabel>Brechó</IonLabel>
          </IonTabButton>
          <IonTabButton tab="info" href="/info">
            <IonIcon aria-hidden="true" icon={informationCircleOutline} />
            <IonLabel>Informações</IonLabel>
          </IonTabButton>
          <IonTabButton tab="contato" href="/contato">
            <IonIcon aria-hidden="true" icon={phoneLandscapeOutline} />
            <IonLabel>Contato</IonLabel>
          </IonTabButton>
          <IonTabButton tab="conta" href="/conta">
            <IonIcon
              aria-hidden="true"
              icon={ellipsisHorizontalCircleOutline}
            />
            <IonLabel>Configurações</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
