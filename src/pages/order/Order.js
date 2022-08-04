import { IonTitle, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar, IonButton } from '@ionic/react';
import styles from './Order.module.scss';

import { chatboxEllipsesOutline } from "ionicons/icons";

import { useTranslation } from "react-i18next";

const Order = () => {
    const { t, i18n } = useTranslation('lang');

    return (
        <IonPage className={styles.orderPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol size='2'>

                        </IonCol>
                        <IonCol size='8'>
                            <IonTitle className='main-title ion-text-center'>{t('order.title')}</IonTitle>
                        </IonCol>
                        <IonCol size='2'>
                            <IonRouterLink routerLink="/app/home">
                                <IonIcon icon={chatboxEllipsesOutline} />
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonCard className={styles.topCard}>
                    <IonRow className='ion-justify-content-between ion-align-items-center ion-padding-start ion-padding-end'>
                        <IonCol size='6'>
                            <span>{t('order.account-amount')}:</span>
                            <h2 className={`main-number ${styles.balanceAmount}`}>$ 1231.34</h2>
                        </IonCol>
                        <IonImg src="/assets/images/1.png" />
                    </IonRow>
                </IonCard>
                <IonCard className={`${styles.orderCard}`}>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <div>
                            <h4 className='ion-no-margin'>{t('order.ordinary-member')}</h4>
                            <p>{t('order.commission')} 0.4% | 60 {t('order.order')}</p>
                        </div>
                        <IonImg src='/assets/images/3.png' alt='tooltip' />
                    </IonRow>
                    <IonRow className={`ion-justify-content-center ion-margin-bottom ion-align-items-center ion-margin-top ${styles.orderAmount}`}>
                        <span className={`main-number ${styles.roundedNumber}`}>22</span> <span className='main-number'> / </span><span className='main-number'>60</span>
                    </IonRow>
                </IonCard>
                <div className={`text-white ${styles.orderList}`}>
                    <div className='d-flex ion-justify-content-between ion-align-items-center'>
                        <span>{t('order.get-commission')}</span>
                        <span className='main-number'>$ 56.23</span>
                    </div>
                    <div className='d-flex ion-justify-content-between ion-align-items-center'>
                        <span>{t('order.freeze-amount')}</span>
                        <span className='main-number'>$ 1256.23</span>
                    </div>
                    <div className='d-flex ion-justify-content-between ion-align-items-center'>
                        <span>{t('order.quantity-order')}</span>
                        <span className='main-number'>12</span>
                    </div>
                    <div className='d-flex ion-justify-content-between ion-align-items-center'>
                        <span>{t('order.enable-amount')}</span>
                        <span className='main-number'>$ 1256.23</span>
                    </div>
                </div>
                <IonButton className="custom-button ion-padding-top ion-margin-bottom" expand="block">{t('order.start-order')}</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Order;