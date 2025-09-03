import about from '../../assets/about us.jpg'
import './About.css'
import { useTranslation } from 'react-i18next';

export default function About () {
  const { t } = useTranslation('about');
  return (
    <div className='pb-4'>
         <section id="about" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4"> {t("title")}  </h2>
        <div className="row pt-3 justify-content-center gap-5"> 
          {/* Vision && */}
          <div className="col-md-5 row gap-5">

          <div className="about-card pt-3 rounded rounded-3 border border-2 border-success shadow">
            <h3 className='mt-2 mb-4'>{t("visionTitle")}</h3>
            <p>
              {t("visionText")}
            </p>
          </div>
           <div className="about-card pt-3 rounded rounded-3 border border-2 border-success shadow">
            <h3 className='mt-2 mb-4'>{t("missionTitle")}</h3>
            <p>
              {t("missionText")}
            </p>
          </div>
          </div>
          {/* image */}
          <div className="col-md-6 mb-5 mt-5">
              <img src= {about} className='w-100' alt="" loading='lazy' />
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}
