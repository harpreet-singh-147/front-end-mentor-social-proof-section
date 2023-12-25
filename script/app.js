const testimonialsRatingsEl = document.querySelector('.testimonials__ratings');
const testimonialsCardsEl = document.querySelector('.testimonials__cards');

fetch('data/data.json')
  .then(res => res.json())
  .then(data => createElements(data));

const createElements = data => {
  data.ratings.forEach((rating, i) => {
    const ratingDivEl = document.createElement('div');
    ratingDivEl.classList.add(
      'testimonials__rating',
      `testimonials__rating-${i}`
    );

    const testimonialsStarsDiv = document.createElement('div');
    testimonialsStarsDiv.classList.add('testimonials__stars');

    for (let i = 0; i < 5; i++) {
      const starIcon = document.createElement('img');
      starIcon.src = rating.icon;
      starIcon.alt = 'Star Icon';
      testimonialsStarsDiv.appendChild(starIcon);
    }

    const testimonialsRatingSummary = document.createElement('span');
    testimonialsRatingSummary.classList.add('testimonials__rating-summary');
    testimonialsRatingSummary.textContent = rating.summary;

    ratingDivEl.appendChild(testimonialsStarsDiv);
    ratingDivEl.appendChild(testimonialsRatingSummary);

    testimonialsRatingsEl.appendChild(ratingDivEl);
  });

  data.testimonials.forEach(testimonial => {
    const testimonialsCard = document.createElement('div');
    testimonialsCard.classList.add('testimonials__card', testimonial.class);

    const testimonialsCardFigure = document.createElement('figure');
    testimonialsCardFigure.classList.add('testimonials__card-figure');

    const testimonialsCardImg = document.createElement('img');
    testimonialsCardImg.classList.add('testimonials__card-img');
    testimonialsCardImg.src = testimonial.icon;
    testimonialsCardImg.alt = testimonial.name;

    const testimonialsCardFigcaption = document.createElement('figcaption');
    testimonialsCardFigcaption.classList.add('testimonials__card-figcaption');

    const testimonialsCardName = document.createElement('h2');
    testimonialsCardName.classList.add('testimonials__card-name');
    testimonialsCardName.textContent = testimonial.name;

    const testimonialsCardVerified = document.createElement('span');
    testimonialsCardVerified.classList.add('testimonials__card-verified');
    testimonialsCardVerified.textContent = 'Verified Buyer';

    testimonialsCardFigcaption.append(
      testimonialsCardName,
      testimonialsCardVerified
    );

    testimonialsCardFigure.append(
      testimonialsCardImg,
      testimonialsCardFigcaption
    );

    const testimonialsTestimonial = document.createElement('p');
    testimonialsTestimonial.classList.add('testimonials__testimonial');
    testimonialsTestimonial.textContent = testimonial.testimonial;

    testimonialsCard.append(testimonialsCardFigure, testimonialsTestimonial);
    testimonialsCardsEl.appendChild(testimonialsCard);
  });
};
