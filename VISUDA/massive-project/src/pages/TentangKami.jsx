import { useState } from 'react';
import '../styles/TentangKami.css';

const TentangKami = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
            <section className="tentang-kami-container">
                <div className="tentang-kami-content">
                    <div className="tentang-kami-text">
                        <h1>Tentang Kami</h1>
                        <p>
                            Kami adalah tim yang berdedikasi untuk <br />
                            memberikan layanan publik yang <br />
                            efisien, transparan, dan mudah diakses <br />
                            bagi seluruh masyarakat.
                            {expanded && (
                                <>
                                    <br />
                                    Lebih lanjut tentang kami: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae velit id tortor varius fringilla. Sed vel tellus quis lectus tempor commodo.
                                </>
                            )}
                            <br />
                            <span className={expanded ? "read-more clicked" : "read-more"} onClick={toggleExpanded}>Selengkapnya</span>
                        </p>
                    </div>
                    <img src="src/components/6.jpg" alt="Gambar Tentang Kami" className="gambar-tentang-kami" /> 
                </div>
                
                <div className="visi-misi">
                    <div className="visi">
                        <h2>Visi</h2>
                        <p>
                            Visi kami adalah menciptakan masyarakat yang lebih sejahtera dan inklusif melalui penyediaan layanan publik yang berkualitas dan mudah diakses oleh semua kalangan.
                        </p>
                    </div>
                    <div className="misi">
                        <h2>Misi</h2>
                        <ul>
                            <li>Memberikan layanan publik yang efisien, tanggap, dan terjangkau.</li>  
                            <li>Meningkatkan aksesibilitas terhadap layanan publik bagi semua lapisan masyarakat.</li>
                            <li>Mengadopsi teknologi modern untuk meningkatkan efisiensi dan transparansi dalam penyelenggaraan layanan.</li>
                            <li>Mendorong partisipasi aktif masyarakat dalam proses pembangunan dan pengambilan keputusan.</li>
                        </ul>
                    </div>
                </div>
            </section>
    );
};

export default TentangKami;
