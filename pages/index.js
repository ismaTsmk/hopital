import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { List, Search, Calendar, Chat } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pose from "./../images/pose_3.png"
import mec from "./../images/mec.png"
import meuf from "./../images/meuf.png"
import mamie from "./../images/mamie.png"
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

import iconPwa from "./../public/icons/hospi384.png"


// import axios from '../lib/axios'

const Home = () => {


  const autorisedNotif = () => {

    const randomNotification = () => {
      var randomItem = 5
      var notifTitle = "dhfjfbhf"
      var notifBody = 'Créé par ';
      var notifImg = 'data/img';
      var options = {
        body: notifBody,
        icon: notifImg
      }
      var notif = new Notification(notifTitle, options);
      setTimeout(randomNotification, 30000);
    }

    Notification.requestPermission().then(function (result) {
      if (result === 'granted') {
        randomNotification();
      }
    });
  }

  return (
    <div >
      <Head>
        <title>Hospi urgency</title>
        <meta name="description" content="By Tismatek Agency" />
        <link rel="icon" href="/favicon.ico" />
        <meta name='application-name' content='hospi urgency' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='PWA App' />
        <meta name='description' content='Best PWA App in the world' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
        <link rel='apple-touch-icon' sizes='152x152' href={iconPwa.src} />
        <link rel='apple-touch-icon' sizes='180x180' href={iconPwa.src} />
        <link rel='apple-touch-icon' sizes='167x167' href={iconPwa.src} />

        <link rel='icon' type='image/png' sizes='32x32' href={iconPwa.src} />
        <link rel='icon' type='image/png' sizes='16x16' href={iconPwa.src} />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='shortcut icon' href='/favicon.ico' />
        {/* <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' /> */}

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://yourdomain.com' />
        <meta name='twitter:title' content='PWA App' />
        <meta name='twitter:description' content={"L'application pour les urgence des hopitaux"} />
        <meta name='twitter:image' content='https://yourdomain.com/icons/android-chrome-192x192.png' />
        <meta name='twitter:creator' content='@DavidWShadow' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='pwa hospi' />
        <meta property='og:description' content={"L'application pour les urgence des hopitaux"} />
        <meta property='og:site_name' content='pwa hospi' />
        <meta property='og:url' content='https://yourdomain.com' />
        <meta property='og:image' content='https://yourdomain.com/icons/apple-touch-icon.png' />

        {/* <!-- apple splash screen images -->
<!-- */}
        {/* <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' /> */}
        {/* --> */}
      </Head>

      <main className='container p-1  ' >

        <div className='row d-flex flex-column justify-content-center px-4'>
          <h1 className="fs-4">
            Hello <br /> Columbine!
          </h1>
          <div className='d-flex d-none'>
            <input className='form-control' type="text" placeholder="recherhez un medecin" />
            <Button variant="outline-primary" >
              <Search color="royalblue" size={25} />
            </Button>

          </div>
          <div className='px-5 d-flex  justify-content-between'>
            <a variant="outline-primary" >
              <Calendar color="royalblue" size={20} />
            </a>

            <a variant="outline-primary" >
              <Chat color="royalblue" size={25} />
            </a>


          </div>
          <button className='btn btn-outline-primary mt-3' onClick={autorisedNotif}>
            autoriser les notifications
          </button>
        </div>
        <div className='container'>
          <div className='row p-4 '>
            <Card className='col-12 rounded-20  px-3 py-2 mb-4 ' style={{ background: "#C0C0C0", borderRadius: "20px", }} >
              <div>
                <h2 className="p-0 m-0"> Coord</h2>
                <div className='d-flex flex-row align-items-center justify-content-between p-0 m-0'>
                  <Card.Img className='' src={mamie.src} style={{ height: "50px", width: "50px", bottom: 0 }} />
                  <div className='row'>
                    <Card.Body className='ps-3  offset-4 col-8 position-relative text-light' style={{ zIndex: '1' }}>
                      <Card.Title className="text-right">Point covid à 10h50 le 12/09</Card.Title>
                      <Button className="btn bg-light text-dark py-0 rounded-8">Notifier</Button>
                    </Card.Body>
                  </div>
                </div>

              </div>


            </Card>


            <Card className='col-12 rounded-20  px-3 py-2 ' style={{ background: "rgba(245, 40, 145, 0.13)", borderRadius: "20px", }} >
              <h2 className="p-0 m-0"> Dechoc</h2>
              <Card.Body className='col-12 position-relative text-light' style={{ zIndex: '1' }}>
                <ListGroup as="ol" >
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                  <Card.Img className='' src={mamie.src} style={{ height: "50px", width: "50px", bottom: 0 }} />

                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Cras justo odio
                    </div>
                    <Badge bg="primary" pill>
                      88988
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Cras justo odio
                    </div>
                    <Badge bg="primary" pill>
                      14
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Cras justo odio
                    </div>
                    <Badge bg="primary" pill>
                      14
                    </Badge>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>

            </Card>


            <Card className='col-12 card-slider d-none' style={{ background: "#3D35E1", borderRadius: "20px", height: "157px" }} >
              <Card.Img className=' position-absolute ' src={pose.src} style={{ zIndex: '1', width: "202px", height: "202px", bottom: 0 }} />
              <div className='row'>
                <Card.Body className='ps-3 pt-4 mt-3 offset-4 col-8 position-relative text-light' style={{ zIndex: '1' }}>
                  <Card.Title className="text-right">Point covid à 10h50 le 12/09</Card.Title>
                  <Button className="btn bg-light text-dark py-0 rounded-8">Notifier</Button>
                </Card.Body>
              </div>

            </Card>
          </div>
        </div>
        {/* 
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Mon planning &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Urgence secours  &rarr;</h2>
            <p>Veuilliez intervennir de toute urgence </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://tismatek.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{'Tismatek'}

        </a>
      </footer>
    </div>
  )
}


export default Home


// export async function getStaticProps() {
//   const response = await axios.post('api/test',[]);
//   console.log(response.data.data)

//   return {
//       props: {
//           offices: response.data.data
//       },
//   }
// }