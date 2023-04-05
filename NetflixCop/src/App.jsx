
import './App.css'
import imagen from "./img/tv.png";
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
            <img className='tv' src={imagen} alt="ppp"  />
            <video className='tvvideo' data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop=""><source src={videouno} type="video/mp4"/></video>  
             </div>
          <div className='restaurar '></div>
        </div>
      </section>

      <section>
        <div className='contenido'>
          <div className='contLeft'>video</div>
          <div className='contRight'>text</div>
          <div className='restaurar'></div>
        </div>
      </section>
      <section>
        <div className='contenido'>
          <div className='contLeft'>text</div>
          <div className='contRight'>vid</div>
          <div className='restaurar'></div>
        </div>
      </section>
      <section>
        <div className='contenido'>
          <div className='contLeft'>video</div>
          <div className='contRight'>text</div>
          <div className='restaurar'></div>
        </div>
      </section>
      <section>

      </section>
    </div>
  )
}

export default App
