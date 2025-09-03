import { useTranslation } from 'react-i18next';

export default function Departments() {
  const { t } = useTranslation("departments");

  const departments = [
    {
      id: 1,
      icon: "fa-solid fa-globe",
      title: t("public.title"),
      desc: t("public.desc"),
    },
    {
      id: 2,
      icon: "fa-solid fa-people-roof",
      title: t("hr.title"),
      desc: t("hr.desc"),
    },
    {
      id: 3,
      icon: "fa-solid fa-coins",
      title: t("finance.title"),
      desc: t("finance.desc"),
    },
    {
      id: 4,
      icon: "fa-solid fa-graduation-cap",
      title: t("training.title"),
      desc: t("training.desc"),
    },
  ];

  return (
    <div id="departments" className="departments-container my-5 px-2">
      <h2 className="text-center mb-4">{t("heading")}</h2>
      <div className="container">
        <div className="row pt-3 justify-content-center g-4 gap-3 my-3">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="col-md-5 col-sm-12 about-card py-3 rounded rounded-3 border border-2 border-success shadow"
            >
              <h3 className="mb-3 d-flex align-items-center">
                <i className={`${dept.icon} me-2 text-success`}></i>
                {dept.title}
              </h3>
              <p>{dept.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


 // <div id='departments' className='departments-container my-5 px-2'>
    //           <h2 className="text-center mb-4">Our Departments</h2>
    //     <div className="container">
    //           <div className="row pt-3 justify-content-center gap-5 my-3"> 
    //       {/* Public Relations */}
    //       <div className="col-md-5 about-card py-3 rounded rounded-3 border border-2 border-success shadow">
    //         <h3> <i className="fa-solid fa-globe "></i> Public Relations Department</h3>
    //         <p>
    //           Managing all commercial and administrative dealings with government authorities and private institutions.  
    //         </p>
    //       </div>
    //       {/* Human Resources */}
    //       <div className="col-md-5 about-card py-3 rounded rounded-3 border border-2 border-success shadow">
    //         <h3><i className="fa-solid fa-people-roof me-1"></i>Human Resources Department</h3>
    //         <p>
    //         Providing solutions for recruitment, temporary staffing, and Emiratization to meet labor market needs.
    //         </p>
    //       </div>
    //       {/* Finance Resources */}
    //       <div className="col-md-5 about-card py-3 rounded rounded-3 border border-2 border-success shadow">
    //         <h3><i className="fa-solid fa-coins me-1"></i>Finance Department</h3>
    //         <p>
    //        Comprehensive financial and consulting services to ensure compliance with financial and accounting regulations.            </p>
    //       </div>
    //        {/* Training & Development */}
    //       <div className="col-md-5 about-card py-3 rounded rounded-3 border border-2 border-success shadow">
    //         <h3> <i className="fa-solid fa-graduation-cap me-1"></i>Training Department</h3>
    //         <p>
    //       Designing and delivering specialized training programs to enhance employee and corporate efficiency.
    //        </p>
    //       </div>
    //     </div>
    //     </div>
    // </div>