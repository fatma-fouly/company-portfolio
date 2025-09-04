import React from 'react'
import './footer.css';
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation("footer");
  return (
    <div >
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p className="mb-2">
          <strong>© 2025 Al-Aref.</strong> {t("rights")}
        </p>
        <p className="mb-2">{t("follow")}
                    <a href="https://web.facebook.com/Alarefbusiness/?_rdc=1&_rdr" target='_blank' className="text-white ms-2"><i className="fab fa-facebook-f"></i></a>
                    <a href="#home" target='_blank' className="text-white ms-2"><i className="fab fa-twitter"></i></a>
                    <a href="#home" target='_blank' className="text-white ms-2"><i className="fab fa-instagram"></i></a>
                </p>
            </div>
       </footer>
    </div>
  )
}
