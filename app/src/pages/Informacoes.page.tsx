import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonFooter,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Informacoes: React.FC = () => {
  const history = useHistory();

  const handleContactRedirect = () => {
    history.push("/contato"); // Direciona para a página de contato
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quem Somos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>
          <h2>QUEM SOMOS</h2>
          <p>
            A ONG Unidos e Solidários, iniciou suas atividades em 2017, e atende
            toda a região norte de Porto Alegre. Nossa sede está localizada no
            bairro Sarandi, e nossa expectativa é abranger todos os bairros da
            região norte.
          </p>
          <p>
            Atualmente contamos com cerca de 32 voluntários que desempenham um
            papel fundamental dentro da ONG, seja através de serviços sociais,
            voluntariado para preparação de alimentos, trabalhos necessários
            para o bom funcionamento e atendimento da comunidade.
          </p>
          <p>
            Desde sua criação, já fornecemos mais de 250 mil refeições,
            minimizando a fome e resgatando a dignidade de milhares de
            indivíduos e suas famílias em situação de vulnerabilidade social.
          </p>

          <h2>MISSÃO</h2>
          <p>
            Contribuir para a construção de uma sociedade mais solidária,
            minimizando a fome e efetivamente transformando vidas. Ser
            reconhecida como uma instituição do terceiro setor - ONG
            (Organização Não Governamental) que desenvolve projetos que cooperam
            para a transformação social.
          </p>

          <h2>AÇÕES</h2>
          <IonList>
            <IonItem>
              <IonLabel>
                <h3>DISTRIBUIÇÃO DE CESTAS BÁSICAS</h3>
                <p>
                  Cestas básicas de alimento e higiene distribuídas para
                  famílias carentes.
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <h3>GELADEIRA SOLIDÁRIA</h3>
                <p>Marmitas prontas para retirada.</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <h3>ALMOÇO SOLIDÁRIO</h3>
                <p>
                  Servido em torno de 100 refeições, destinado a pessoas em
                  situação de vulnerabilidade.
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <h3>TERAPIAS ALTERNATIVAS</h3>
                <p>
                  Reiki, Terapia reencarnacionista, Terapias Quânticas.
                  Profissional Voluntário: Luciano Rohde.
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <h3>BRECHÓ</h3>
                <p>
                  Distribuição de vestuário e venda de roupas para reversão em
                  alimentos.
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <h3>GRUPO DE APOIO DESTINADO A FAMÍLIAS ATÍPICAS</h3>
                <p>
                  Deficiências ocultas ou invisíveis variam de distúrbios como
                  ansiedade, depressão e transtorno do espectro autista, perda
                  auditiva, TDAH, etc.
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <h3>DISTRIBUIÇÃO DE MATERIAL ESCOLAR</h3>
                <p>Cadernos, livros, lápis, canetas, borrachas ...</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <h3>BANHO SOLIDÁRIO</h3>
                <p>Espaço para banho e entrega de kit de higiene.</p>
              </IonLabel>
            </IonItem>
          </IonList>

          <h2>COMO AJUDAR?</h2>
          <p>
            Sua doação faz com que possamos dar continuidade a todos os projetos
            já existentes, e possamos ampliar nossa rede de apoio através de sua
            doação. Alimentos, cestas básicas, produtos de higiene, produtos de
            limpeza, fraldas, vestuário, calçados, e equipamentos hospitalares
            são essenciais para dar continuidade à ação social.
          </p>
          <p>Entre em contato.</p>
        </IonText>
      </IonContent>
      <IonFooter>
        <IonButton expand="full" onClick={handleContactRedirect}>
          Contato
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default Informacoes;
