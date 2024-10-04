import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonImg,
  IonButton,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { heart, call } from "ionicons/icons";

const Brecho: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Vestido Floral",
      image:
        "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lkl93mzb4z1k44",
      price: "R$ 39,90",
    },
    {
      id: 2,
      name: "Camiseta Vintage",
      image:
        "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lkl93mzb4z1k44",
      price: "R$ 29,90",
    },
    {
      id: 3,
      name: "Saia Midi",
      image:
        "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lkl93mzb4z1k44",
      price: "R$ 49,90",
    },
    {
      id: 4,
      name: "Blusão de Lã",
      image:
        "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lkl93mzb4z1k44",
      price: "R$ 59,90",
    },
    {
      id: 5,
      name: "Calça Jeans",
      image:
        "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lkl93mzb4z1k44",
      price: "R$ 89,90",
    },
    {
      id: 6,
      name: "Camiseta Branca",
      image:
        "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lkl93mzb4z1k44",
      price: "R$ 19,90",
    },
    // Adicione mais produtos conforme necessário
  ];

  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 2));
  const [startIndex, setStartIndex] = useState(2);

  const loadMoreProducts = (event: CustomEvent) => {
    const newVisibleProducts = products.slice(startIndex, startIndex + 2);
    setVisibleProducts([...visibleProducts, ...newVisibleProducts]);
    setStartIndex(startIndex + 2);

    event.detail.complete(); // Finaliza o evento de scroll infinito
    if (startIndex + 2 >= products.length) {
      event.detail.disabled = true; // Desabilita o scroll infinito se não houver mais produtos
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Roupas de Brechó</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            {visibleProducts.map((product) => (
              <IonCol size="6" key={product.id}>
                <IonCard>
                  <IonCardHeader>
                    <IonImg src={product.image} alt={product.name} />
                  </IonCardHeader>
                  <IonCardContent>
                    <IonCardTitle>{product.name}</IonCardTitle>
                    <p>{product.price}</p>
                    <IonButton
                      expand="full"
                      color="secondary"
                      fill="outline"
                      onClick={() => console.log("Interesse declarado")}
                    >
                      <IonIcon slot="start" icon={heart} />
                      Declarar Interesse
                    </IonButton>
                    <IonButton
                      expand="full"
                      color="primary"
                      fill="outline"
                      onClick={() => console.log("Contato realizado")}
                    >
                      <IonIcon slot="start" icon={call} />
                      Contato
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonInfiniteScroll threshold="100px" onIonInfinite={loadMoreProducts}>
          <IonInfiniteScrollContent loadingText="Carregando mais produtos..." />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Brecho;
