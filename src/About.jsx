import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>🍽️ About FoodHub</h1>

        <p>
          Welcome to <strong>FoodHub</strong>, where every meal is prepared with
          passion and served with love. Since <strong>2003</strong>, we have
          been delighting our customers with fresh ingredients, authentic
          recipes, and exceptional service.
        </p>

        <div className="about-section">
          <h2>👨‍🍳 Owner</h2>
          <p>
            My name is <strong>Kaif Ahmad</strong>, and I am the proud owner of
            FoodHub. My dream has always been to create a restaurant where
            people can enjoy delicious food in a warm and welcoming atmosphere.
          </p>
        </div>

        <div className="about-section">
          <h2>🍕 What We Serve</h2>
          <ul>
            <li>🍔 Burgers</li>
            <li>🍕 Pizza</li>
            <li>🍝 Pasta</li>
            <li>🌮 Fast Food</li>
            <li>🥗 Healthy Meals</li>
            <li>🥤 Fresh Drinks</li>
            <li>🍰 Desserts</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>🌟 Why Choose FoodHub?</h2>
          <ul>
            <li>Fresh and high-quality ingredients</li>
            <li>Experienced chefs</li>
            <li>Fast service</li>
            <li>Affordable prices</li>
            <li>Customer satisfaction is our priority</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>❤️ Our Mission</h2>
          <p>
            To serve delicious, hygienic, and affordable food while creating an
            unforgettable dining experience for every customer.
          </p>
        </div>

        <h3 className="thank-you">
          Thank you for choosing FoodHub. We look forward to serving you!
        </h3>
      </div>
    </div>
  );
};