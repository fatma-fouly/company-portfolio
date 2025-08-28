import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div >
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p className="mb-0"><strong>© 2025 Al-Aref.</strong> All rights reserved.</p>
                <p className="mb-0">Follow us on:
                    <a href="#" className="text-white ms-2"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-white ms-2"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-white ms-2"><i className="fab fa-instagram"></i></a>
                </p>
            </div>
       </footer>
    </div>
  )
}
