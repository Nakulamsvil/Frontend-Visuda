import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/ImageSlider.css';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const images = [
        {
            url: 'src/components/1.jpg',
            description: 'Ayo bergabung dalam sesi demo aplikasi kami untuk mendapatkan gambaran lengkap!',
            buttonText: 'DEMO'
        },
        {
            url: 'src/components/2.jpg',
            description: 'Temukan data mu melalui website kami tanpa harus mendowload aplikasi',
            buttonText: 'LEARN MORE'
        },
        {
            url: 'src/components/3.jpg',
            description: 'Kami memahami bahwa pertanyaan mungkin timbul saat Anda menjelajahi layanan kami. Untuk memudahkan Anda, kami telah menyusun FAQ yang komprehensif. Silakan jelajahi FAQ kami untuk menemukan jawaban atas pertanyaan umum yang mungkin Anda miliki. Jika pertanyaan Anda tidak terjawab di sana, jangan ragu untuk menghubungi tim dukungan kami.',
            buttonText: 'CONTACT US'
        }
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <div className="image-container">
                            <img src={image.url} alt={`Slide ${index}`} className="slider-image" />
                            <div className="button-container">
                                <button className="custom-button">{image.buttonText}</button>
                            </div>
                            <div className="overlay">
                                <div className="image-description">
                                    {image.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
