import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import TentangKami from "./TentangKami";
import Testimonials from "./Testimonials";
import HubungiKami from "./HubungiKami";
import '../styles/Beranda.css';

function Beranda() {
  return (
    <>
    <Navbar/>
      <main className="Beranda">
        <ImageSlider />
        <div className="wrapper">
          <section id="beranda" className="content-section">
            <article className="kolom">
              <div className="content-wrapper">
                <div className="text-content">
                  <div className="label">
                    <div className="text-wrapper">
                      VISUDA
                    </div>
                  </div>
                  <p className="description">Memberikan layanan administrasi publik yang berkualitas dan mudah diakses oleh masyarakat.</p>
                  <p className="download-info">Agar meningkatkan pengalaman dan kepuasan pengguna, silahkan download aplikasi kami di platform Android Anda.</p>
                  <a href="https://play.google.com/store/apps/details?id=com.example.app" className="download-button">
                    Download App
                  </a>
                </div>
                <div className="image-content">
                  <img src="src/components/gambar hp1.png" alt="Visuda" className="visuda-image"/>
                </div>
              </div>
            </article>
          </section>
          <Testimonials />
          <TentangKami />
          <HubungiKami />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Beranda;
