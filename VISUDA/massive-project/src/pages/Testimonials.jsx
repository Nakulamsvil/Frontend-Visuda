import '../styles/Testimonials.css';

const testimonials = [
    {
        photo: 'src/components/crop.png',
        quote: 'Pengalaman saya menggunakan aplikasi ini sungguh memuaskan, mulai dari kemudahan navigasi hingga responsifnya layanan pelanggan',
        author: 'Bung Mbrun',
        rating: 5
    },
    {
        photo: 'src/components/sitinur.jpg',
        quote: 'Dengan fitur-fitur yang intuitif dan efisien, saya merasa lebih terhubung dengan layanan publik yang saya butuhkan.',
        author: 'Siti Nur',
        rating: 4
    },
    {
        photo: 'src/components/bututi.jpg',
        quote: 'Aplikasinya pun sangat mudah dipahami, bahkan oleh ibu-ibu seperti saya. Terima kasih banyak kepada tim yang telah membuat hidup kami menjadi lebih nyaman dengan teknologi ini.',
        author: 'Buk Tuti',
        rating: 5
    }
];

const Testimonials = () => {
    return (
            <div className="testimonials-container">
                <h1>Testimonials</h1>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="card-top">
                                <img src={testimonial.photo} alt={`Testimonial ${index}`} className="testimonial-photo" />
                                <div className="testimonial-quote">{testimonial.quote}</div>
                            </div>
                            <div className="card-bottom">
                                <div className="testimonial-author">{testimonial.author}</div>
                                <div className="testimonial-rating">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default Testimonials;
