import React from 'react'

export default function Departments() {
  return (
    <div id='departments' className='departments-container my-5'>
              <h2 className="text-center mb-4">Our Departments</h2>
        <div className="container">
              <div className="row pt-3 justify-content-center gap-5 my-3"> 
          {/* Public Relations */}
          <div className="col-md-5 about-card py-3 rounded rounded-3 border border-2 border-success shadow">
            <h3> <i class="fa-solid fa-globe "></i> Public Relations Department</h3>
            <p>
              Managing all commercial and administrative dealings with government authorities and private institutions.  
            </p>
          </div>
          {/* Human Resources */}
          <div className="col-md-5 about-card py-3 rounded rounded-3 border border-2 border-success shadow">
            <h3><i class="fa-solid fa-people-roof me-1"></i>Human Resources Department</h3>
            <p>
            Providing solutions for recruitment, temporary staffing, and Emiratization to meet labor market needs.
            </p>
          </div>
          {/* Finance Resources */}
          <div className="col-md-5 about-card py-3 rounded rounded-3 border border-2 border-success shadow">
            <h3><i class="fa-solid fa-coins me-1"></i>Finance Department</h3>
            <p>
           Comprehensive financial and consulting services to ensure compliance with financial and accounting regulations.            </p>
          </div>
           {/* Training & Development */}
          <div className="col-md-5 about-card py-3 rounded rounded-3 border border-2 border-success shadow">
            <h3> <i class="fa-solid fa-graduation-cap me-1"></i>Training Department</h3>
            <p>
          Designing and delivering specialized training programs to enhance employee and corporate efficiency.
           </p>
          </div>
        </div>
        </div>
    </div>
  )
}
