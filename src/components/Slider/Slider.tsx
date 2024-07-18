import React, { useState, forwardRef} from 'react';
import './Slider.css';
import myPhoto from '../../assets/Ellipse.png';
import myPhoto1 from '../../assets/Ellipse 1.png';
import myPhoto2 from '../../assets/Ellipse 3.png';

interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Константинов Михаил Павлович',
    location: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    avatar: myPhoto
  },
  {
    id: 2,
    name: 'Иван Иванов',
    location: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    avatar: myPhoto1
  },
  {
    id: 3,
    name: 'Артем Корнилов',
    location: 'Самара',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    avatar: myPhoto2
  },
  {
    id: 4,
    name: 'Алексей Смирнов',
    location: 'Москва',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    avatar: myPhoto
  },
  {
    id: 5,
    name: 'Мария Петрова',
    location: 'Новосибирск',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    avatar: myPhoto1
  },
  {
    id: 6,
    name: 'Мария Петрова',
    location: 'Новосибирск',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    avatar: myPhoto2
  },
  {
    id: 7,
    name: 'Мария Петрова',
    location: 'Новосибирск',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    avatar: myPhoto
  },
  {
    id: 8,
    name: 'Мария Петрова',
    location: 'Новосибирск',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    avatar: myPhoto1
  },
  {
    id: 9,
    name: 'Мария Петрова',
    location: 'Новосибирск',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    avatar: myPhoto2
  }
];

const Slider = forwardRef<HTMLDivElement>((props, ref) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(reviews.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div ref={ref} className="slider-container">
      <h2>Отзывы</h2>
      <div className="slider">
        <button className="arrow left-arrow" onClick={prevSlide}>
          &lt;
        </button>
        <div className="slider-content">
          {reviews.slice(currentIndex * 3, currentIndex * 3 + 3).map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <img src={review.avatar} alt={review.name} className="avatar" />
                <h3>{review.name}</h3>
                <p>{review.location}</p>
              </div>
              <p className='text'>{review.text}</p>
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className="dots">
        {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
});

export default Slider;