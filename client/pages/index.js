import React from 'react';
import buildClient from '../api/build-client';
import styles from '../LandingPage.module.css'; // Assuming you have a CSS module for styling


const LandingPage = ({ currentUser }) => {
  return (
    <body className="is-preload">

    <div id="wrapper">

    <header id="header" className="alt">
    MasterBank
        </header>

        <nav id="nav">
            <ul>
                <li><a href="#intro" className="active">Internet Banking</a></li>
                <li><a href="#first">Credite</a></li>
                <li><a href="#cta">Contact</a></li>
            </ul>
        </nav>
      
        <div id="main">

            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">
                            <div className={styles.loginStatus}>
                                {currentUser ? (
                                    <h2>Esti logat</h2>
                                ) : (
                                  <><h2>Sign In pentru a putea vedea toate functionalitatile</h2>
                                  <h3>Contul tau iti ofera posibilitatea de a trimite bani online, de a vedea conturile si de a tranzactiona online.</h3> </> 
                                )}
                            </div>
                        </header>
                        <ul className="actions">
                            <li><a href="generic.html" className="button">Afla mai multe</a></li>
                        </ul>
                    </div>
                    <span className="image"><img src="images/pic01.jpg" alt="" /></span>
                </div>
            </section>

            <section id="first" className="main special">
                <header className="major">
                    <h2>Credite</h2>
                </header>
                <ul className="features">
                    <li>
                        <span className="icon solid major style1 fa-code"></span>
                        <h3>Credit Nevoi Personale</h3>
                        <p>Poți lua creditul pe loc, direct din aplicatia bancii.</p>
                    </li>
                    <li>
                        <span className="icon major style3 fa-copy"></span>
                        <h3>Credit Ipotecar</h3>
                        <p>Poți opta pentru dobândă variabilă sau fixă toată perioada creditului, ori pentru dobândă fixă în primii 3 de creditare și ulterior variabilă.</p>
                    </li>
                    <li>
                        <span className="icon major style5 fa-gem"></span>
                        <h3>Card credit</h3>
                        <p>Dacă ești deja client ING, îți poți lua singur cardul de credit direct din aplicatie.</p>
                    </li>
                </ul>
                <footer className="major">
                    <ul className="actions special">
                        <li><a href="generic.html" className="button">Afla mai multe</a></li>
                    </ul>
                </footer>
            </section>


            <section id="cta" className="main special">
                <header className="major">
                    <h2>Contact</h2>
                    <p>Datele de contact pot fi gasite in footer.<br />
                    Contactul poate fi prin email sau telefon.</p>
                </header>
                <footer className="major">
                    <ul className="actions special">
                        <li><a href="generic.html" className="button primary">Login</a></li>
                        <li><a href="generic.html" className="button">Afla mai multe</a></li>
                    </ul>
                </footer>
            </section>

        </div>

        <footer id="footer">
            <section>
                <h2>Banca ta de oriunde, oricand</h2>
                <p>Platforma a fost realizata ca exemplu pentru arhitectura bazata pe microservicii. NotABank</p>
                <ul className="actions">
                    <li><a href="generic.html" className="button">Afla mai multe</a></li>
                </ul>
            </section>
            <section>
                <h2>Contact</h2>
                <dl className="alt">
                    <dt>Adresa</dt>
                    <dd>Bucuresti, Str Academiei</dd>
                    <dt>Telefon</dt>
                    <dd>0750 474 234</dd>
                    <dt>Email</dt>
                    <dd><a href="#">contact@masterbank.dev</a></dd>
                </dl>
                <ul className="icons">
                    <li><a href="#" className="icon brands fa-twitter alt"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands fa-facebook-f alt"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon brands fa-instagram alt"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon brands fa-github alt"><span className="label">GitHub</span></a></li>
                    <li><a href="#" className="icon brands fa-dribbble alt"><span className="label">Dribbble</span></a></li>
                </ul>
            </section>
        </footer>

    </div>

</body>

  );
};

LandingPage.getInitialProps = async context => {
  console.log('LANDING PAGE!');
  console.log("Test landing page");
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  return data;
};

export default LandingPage;
