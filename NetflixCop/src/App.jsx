import React, { useState } from 'react';
import './App.css'
import imagen from "./img/tv.png";
import imagephone from "./img/mobile.jpg";
import imagedevice from "./img/device.png";
import imageboys from "./img/Boys.png";
import videouno from "./img/video-tv-0819.mp4";




function App() {


  const [div1Visible, setDiv1Visible] = useState(false);
  const [div2Visible, setDiv2Visible] = useState(false);
  const [div3Visible, setDiv3Visible] = useState(false);
  const [div4Visible, setDiv4Visible] = useState(false);
  const [div5Visible, setDiv5Visible] = useState(false);
  const [div6Visible, setDiv6Visible] = useState(false);

  const handleButtonClick = (divNumber) => {
    if (divNumber === 1) {
      setDiv1Visible(!div1Visible);
      setDiv2Visible(false);
      setDiv3Visible(false);
      setDiv4Visible(false);
      setDiv5Visible(false);
      setDiv6Visible(false);
    } else if (divNumber === 2) {
      setDiv1Visible(false);
      setDiv2Visible(!div2Visible);
      setDiv3Visible(false);
      setDiv4Visible(false);
      setDiv5Visible(false);
      setDiv6Visible(false);
    } else if (divNumber === 3) {
      setDiv1Visible(false);
      setDiv2Visible(false);
      setDiv3Visible(!div3Visible);
      setDiv4Visible(false);
      setDiv5Visible(false);
      setDiv6Visible(false);
    } else if (divNumber === 4) {
      setDiv1Visible(false);
      setDiv2Visible(false);
      setDiv3Visible(false);
      setDiv4Visible(!div4Visible);
      setDiv5Visible(false);
      setDiv6Visible(false);
    } else if (divNumber === 5) {
      setDiv1Visible(false);
      setDiv2Visible(false);
      setDiv3Visible(false);
      setDiv4Visible(false);
      setDiv5Visible(!div5Visible);
      setDiv6Visible(false);
    } else if (divNumber === 6) {
      setDiv1Visible(false);
      setDiv2Visible(false);
      setDiv3Visible(false);
      setDiv4Visible(false);
      setDiv5Visible(false);
      setDiv6Visible(!div6Visible);
    }
  }



  return (
    <div  >
      <section className="cabecera">
        <nav>
          <div className='logo'>
            <span>Netflix</span></div>
          <div className='login'><span>Iniciar seccion</span></div>
        </nav>
        <div className='cabecerados'>
          <h1 className='peliculas'>Películas y series ilimitadas y mucho más</h1>
          <p className='disfruta'>Disfruta donde quieras. Cancela cuando quieras.</p>
          <p className='disfruta'>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
          <form className='for'>
            <input type="text" name="email" id="" placeholder='Email' />
            <button >Comenzar {">"} </button>
          </form>
        </div>
      </section>

      <section className='sectiondos'>
        <div className='contenido'>
          <div className='contLeft txt'>
            <h2 className='textH2' >Disfruta en tu TV</h2>
            <p className='textP'>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
          </div>
          <div className='contRight image'>
            <img className='tv' src={imagen} alt="ppp" />
            <video data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline muted loop className='tvvideo' ><source src={videouno} type="video/mp4" /></video>

          </div>
          <div className='restaurar '></div>
        </div>
      </section>

      <section>
        <div className='contenido'>
          <div className='carga'>
            <div>
              <img data-uia="nmhp-card-animation-asset-animation" alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className='imgcarga' />
            </div>
            <div>
              <div>Stranger Things</div>
              <div style={{ fontSize: "0.75rem", fontWeight: "400", color: "#0071eb" }}>Descargando...</div>
            </div>
            <div className='cargaCir'></div>
          </div>
          <div className='contLeft'> <img className='tv' src={imagephone} alt="ppp" />
          </div>

          <div className='contRight'>
            <h2 className='textH2' >Descarga tus series para verlas offline</h2>
            <p className='textP' >Guarda tu contenido favorito y tendrás siempre algo para ver.</p></div>
          <div className='restaurar'></div>
        </div>
      </section>
      <section>
        <div className='contenido'>
          <div className='contLeft'>
            <h2 className='textH2' >Disfruta donde quieras</h2>
            <p className='textP' >Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo adicional.</p></div>
          <div className='contRight'><img className='tv' src={imagedevice} alt="ppp" />
            <video className="tvvideo" style={{ width: "296px", right: "-233px", top: "84px" }} data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline muted loop ><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" /></video></div>
          <div className='restaurar'></div>
        </div>
      </section>
      <section>
        <div className='contenido'>
          <div className='contLeft'><img className='tv' src={imageboys} alt="ppp" /></div>
          <div className='contRight'>
            <h2 className='textH2' >Crea perfiles para niños</h2>
            <p className='textP' >Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</p></div>
          <div className='restaurar'></div>
        </div>
      </section>

      {/* ///////////////////////////////////////Preguntas Frecuentes///////////////////////////////////////////////////////// */}

      <section className='preguntas'>
        <div className='divpreguntas'>
          <h2 className='subtitu'>Preguntas frecuentes</h2>
          <div>
            <ul>
              <li>
                <h3 className='lh3'>
                  <button onClick={() => handleButtonClick(1)} className='bott' style={{ transition: "all 0.25s cubic-bezier(0.5, 0, 0.1, 1) 0s" }}>
                    <span>
                      ¿Qué es Netflix?
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-13srxut e1tuurd64" data-name="Add" alt="">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor">
                      </path>
                    </svg>
                  </button>
                </h3>
                {div1Visible && <hr />}
                {div1Visible &&
                  <div className={'contenPregun'} >
                    <span style={{ transition: "4s" }} >
                      Netflix es un servicio de streaming que ofrece una gran variedad de películas,
                      series y documentales premiados en casi cualquier pantalla conectada a internet.
                      <br />
                      <br />
                      Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible.
                      Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
                    </span>
                  </div>}

              </li>
              <li>
                <h3 className='lh3'>
                  <button onClick={() => handleButtonClick(2)} className='bott' >
                    <span>
                      ¿Cuánto cuesta Netflix?
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-13srxut e1tuurd64" data-name="Add" alt="">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor">
                      </path>
                    </svg>

                  </button>
                </h3>
                {div2Visible && <hr />}
                {div2Visible && <div className='contenPregun'>
                  <span>
                    Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming,
                    todo por una tarifa plana mensual. Planes desde $ 16.900 hasta $ 38.900 al mes.
                    Sin costos adicionales ni contratos.
                  </span>
                </div>}
              </li>
              <li>
                <h3 className='lh3'>
                  <button onClick={() => handleButtonClick(3)} className='bott'>
                    <span>
                      ¿Dónde puedo ver Netflix?
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-13srxut e1tuurd64" data-name="Add" alt="">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor">
                      </path>
                    </svg>

                  </button>
                </h3>
                {div3Visible && <hr />}
                {div3Visible && <div className='contenPregun'>
                  <span>
                    Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido
                    al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión
                    a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores
                    multimedia y consolas de juegos.
                    <br />
                    <br />
                    Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10.
                    Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo
                    adonde sea.
                  </span>
                </div>}
              </li>
              <li>
                <h3 className='lh3'>
                  <button onClick={() => handleButtonClick(4)} className='bott' >
                    <span>
                      ¿Cómo cancelo?
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-13srxut e1tuurd64" data-name="Add" alt="">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor">
                      </path>
                    </svg>
                  </button>
                </h3>
                {div4Visible && <hr />}
                {div4Visible && <div className='contenPregun'>
                  <span>
                    Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online
                    con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.
                  </span>
                </div>}
              </li>
              <li>
                <h3 className='lh3'>
                  <button className='bott' onClick={() => handleButtonClick(5)}>
                    <span>
                      ¿Qué puedo ver en Netflix?
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-13srxut e1tuurd64" data-name="Add" alt="">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor">
                      </path>
                    </svg>

                  </button>
                </h3>
                {div5Visible && <hr />}
                {div5Visible && <div className='contenPregun'>
                  <span>
                    Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales
                    premiados y más. Todo lo que quieras ver, cuando quieras.
                  </span>
                </div>}
              </li>
              <li>
                <h3 className='lh3'>
                  < button className='bott' onClick={() => handleButtonClick(6)}>
                    <span>
                      ¿Es bueno Netflix para los niños?
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-13srxut e1tuurd64" data-name="Add" alt="">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor">
                      </path>
                    </svg>
                  </button>
                </h3>
                {div6Visible && <hr />}
                {div6Visible && <div className='contenPregun'>
                  <span>
                    La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan
                    el control mientras los peques disfrutan series y películas familiares en su propio espacio.
                    <br />
                    <br />
                    Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir
                    el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados
                    títulos que no quieras que los niños vean.
                  </span>
                </div>}
              </li>
            </ul>
            <div style={{marginTop: "2.85rem"}}>
              <div style={{content: '2',padding:" 0 2rem", }}>
                <form style={{flexDirection:"column", display:"flex", }} aria-label="Suscríbete o reinicia tu membresía con Netflix." method="post">
                  <h3 >¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h3>
                  <div  style={{flexDirection: "row", alignItems: "flex-end", display: "flex", justifyContent: "center"}}>
                    <div >
                      <label>Email</label>
                      <div >
                        <input autocomplete="email" minlength="5" maxlength="50" type="email"  name="email"  value=""/>
                          <div aria-hidden="true" ></div>
                            </div>
                            </div>
                           
                <button  type="submit">
                 <span>Comenzar</span> 
                  <div aria-hidden="true">
                    <span dir="ltr" >
                      <svg style={{top:"5px", position:"relative"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path  fill-rule="evenodd" clip-rule="evenodd" d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z" fill="currentColor">
                          </path>
                          </svg>
                          </span>
                          </div>
                          </button>
                  </div> </form>
                  </div></div>
          </div>
        </div>

      </section>
      <section>

      </section>
    </div>
  )
}

export default App
