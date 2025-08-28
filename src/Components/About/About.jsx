import about from '../../assets/about us.jpg'
import './About.css'

export default function About () {
  return (
    <div className='pb-4'>
         <section id="about" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="row pt-3 justify-content-center gap-5"> 
          {/* Vision && */}
          <div className="col-md-5 row gap-5">

          <div className="about-card pt-3 rounded rounded-3 border border-2 border-success shadow">
            <h3 className='mt-2 mb-4'> Our Vision</h3>
            <p>
              We strive to be the first partner for entrepreneurs in the UAE
              and the Gulf region, providing innovative solutions that simplify
              government processes and enhance growth opportunities.  
            </p>
          </div>
           <div className="about-card pt-3 rounded rounded-3 border border-2 border-success shadow">
            <h3 className='mt-2 mb-4'>Our Mission</h3>
            <p>
              Our mission at Al-Aref Business Services is to simplify complex
              government procedures through specialized consulting and
              effective technical solutions, helping entrepreneurs focus on
              growing their businesses.
            </p>
          </div>
          </div>
          {/* image */}
          <div className="col-md-6 mb-5 mt-5">
              <img src= {about} className='w-100' alt="" />
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}
