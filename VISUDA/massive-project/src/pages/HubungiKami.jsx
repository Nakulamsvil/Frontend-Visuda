import { useState } from 'react';
import '../styles/HubungiKami.css';

const HubungiKami = () => {
    const [faqs] = useState([
        { question: 'Apa saja dokumen yang diperlukan untuk mengajukan permohonan layanan administratif?', answer: 'Dokumen yang diperlukan dapat bervariasi tergantung pada jenis layanan yang diminta. Namun, secara umum, Anda mungkin perlu menyertakan identitas pribadi seperti KTP, dokumen pendukung seperti surat izin usaha, serta dokumen-dokumen tambahan yang sesuai dengan kebutuhan layanan tertentu.'},
        { question: 'Bagaimana cara melacak status permohonan saya setelah diajukan?', answer: 'Anda dapat melacak status permohonan Anda melalui portal online kami atau dengan menghubungi pusat layanan pelanggan kami. Setelah diajukan, Anda akan diberikan nomor referensi yang dapat Anda gunakan untuk melacak status permohonan Anda.' },
        { question: 'Berapa lama waktu yang diperlukan untuk pemrosesan permohonan?', answer: 'Waktu pemrosesan bervariasi tergantung pada jenis layanan yang diminta dan volume permohonan. Namun, kami berusaha untuk memproses permohonan sesegera mungkin. Anda akan diberi perkiraan waktu pemrosesan saat Anda mengajukan permohonan.' },
        { question: 'Apakah ada biaya yang harus dibayar untuk mengajukan permohonan layanan administratif?', answer: 'Ya, beberapa layanan mungkin memerlukan pembayaran biaya administrasi. Rincian biaya akan disertakan dalam informasi permohonan yang kami sediakan.' },
        { question: 'Apakah ada persyaratan khusus yang harus dipenuhi oleh pemohon?', answer: 'Persyaratan khusus dapat bervariasi tergantung pada jenis layanan yang diminta. Informasi tentang persyaratan akan disediakan dalam panduan permohonan yang kami sediakan.' },
        { question: 'Bagaimana cara mengajukan keluhan jika saya tidak puas dengan layanan yang saya terima?', answer: 'Anda dapat mengajukan keluhan melalui formulir kontak di website kami atau menghubungi pusat layanan pelanggan kami. Keluhan Anda akan ditangani dengan serius dan akan direspon sesuai prosedur yang berlaku.' },
        { question: 'Apakah ada opsi untuk mempercepat pemrosesan permohonan?', answer: 'Ya, dalam beberapa kasus, kami menawarkan opsi untuk mempercepat pemrosesan permohonan dengan membayar biaya tambahan. Informasi tentang opsi percepatan akan disertakan dalam panduan permohonan.' },
        { question: 'Apakah layanan administratif ini tersedia secara online atau harus diajukan secara langsung?', answer: 'Sebagian besar layanan kami tersedia secara online melalui portal kami untuk kenyamanan Anda. Namun, ada beberapa layanan yang mungkin memerlukan pengajuan langsung.' },
    ]);

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
            <section className="hubungi-kami-container">
                <div className="hubungi-kami-content">
                    <div className="hubungi-kami-text">
                        <h1>Hubungi Kami</h1>
                        <h2>Permasalahanmu akan teratasi disini</h2>
                        <p>Isi informasi mu disini dan perwakilan visuda akan menghubungi anda. Punya pertanyaan sederhana? Lihat FAQ kami.</p>
                    </div>
                    <form className="hubungi-kami-form">
                        <div className="form-group">
                            <label htmlFor="firstName">Nama Depan:</label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Nama Belakang:</label>
                            <input type="text" id="lastName" name="lastName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">No HP:</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="origin">Asal:</label>
                            <input type="text" id="origin" name="origin" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Pesan:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Kirim</button>
                    </form>
                </div>
                <div className="faq-container">
                    <h2>FAQs</h2>
                    {faqs.map((faq, index) => (
                        <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index} onClick={() => toggleAccordion(index)}>
                            <div className="faq-question">{faq.question}</div>
                            <div className="faq-answer">{faq.answer}</div>
                        </div>
                    ))}
                </div>
            </section>
    );
};

export default HubungiKami;
