
import './App.css'
import imagen from "./img/tv.png";
import imagephone from "./img/mobile.jpg";
import imagedevice from "./img/device.png";
import imageboys from "./img/Boys.png";
import videouno from "./img/video-tv-0819.mp4";
function App() {


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
            <button >Comenzar</button>
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
            <video className='tvvideo' data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop=""><source src={videouno} type="video/mp4" /></video>
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
              <div  style={{fontSize:"0.75rem", fontWeight: "400", color: "#0071eb"}}>Descargando...</div>
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
          <video className="tvvideo" style={{width:"296px",right: "-233px",top: "84px"}} data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop=""><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/></video></div>
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
      <section>

      </section>
      <section>

      </section>
    </div>
  )
}

export default App
