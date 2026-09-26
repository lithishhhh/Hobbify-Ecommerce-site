import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const aboutCards = [
  {
    title: 'What do you actually enjoy doing?',
    content: (
      <>
        <p>We realized that shopping usually starts with a product.</p>
        <p>But sometimes, it should start with a question:</p>
        <p className="about-quote">“What are you interested in?”</p>
        <p>Hobbify flips that idea.</p>
        <p>
          Instead of searching endlessly for products, you start with <strong>your curiosity</strong> —
          and discover the products that can take it further.
        </p>
      </>
    ),
  },
  {
    title: 'Start With a Hobby.',
    content: (
      <>
        <p>Your hobby becomes the starting point.</p>
        <p>
          Pick something you love — or something you've always wanted to try — and Hobbify brings
          together products that belong to that world.
        </p>
        <p><strong>One hobby → countless possibilities.</strong></p>
      </>
    ),
  },
  {
    title: 'Maybe You Don’t Have a Hobby Yet.',
    content: (
      <>
        <p>And that's completely fine.</p>
        <p>Sometimes all you need is a little spark.</p>
        <p>That's why Hobbify isn't just about showing products.</p>
        <p>It's about making you think:</p>
        <p className="about-quote">“Wait... I've always wanted to try that.”</p>
        <p>
          A random guitar could become a music journey. A camera could become a passion for
          photography. A tiny plant could become your first garden.
        </p>
      </>
    ),
  },
  {
    title: 'We Didn’t Want Hobbify to Feel Boring.',
    content: (
      <>
        <p>Let's be honest.</p>
        <p>Shopping platforms can sometimes feel like:</p>
        <p><strong>Product → Price → Add to Cart → Done.</strong></p>
        <p>We wanted something different.</p>
        <p>So when you choose a hobby, Hobbify talks back.</p>
        <p>Choose Gardening?</p>
        <p className="about-quote"><strong>“Time to grow something other than your screen time.”</strong></p>
        <p>Because discovering your passion doesn't have to feel serious all the time.</p>
        <p><strong>A little personality makes the journey better.</strong></p>
      </>
    ),
  },
  {
    title: 'Products Make More Sense Together.',
    content: (
      <>
        <p>A product is useful.</p>
        <p>But a collection of products built around something you love?</p>
        <p>That's an experience.</p>
        <p>
          A guitar isn't just a guitar. It's strings, picks, headphones, recording gear, accessories
          — and eventually, maybe your first song.
        </p>
        <p>Hobbify connects these possibilities around <strong>the hobby itself.</strong></p>
        <p><strong>We're not just organizing products. We're organizing possibilities.</strong></p>
      </>
    ),
  },
  {
    title: 'Hobbies Make Life Richer.',
    content: (
      <>
        <p>A hobby can give you:</p>
        <ul>
          <li>A break from screens.</li>
          <li>A new skill.</li>
          <li>Something to look forward to.</li>
        </ul>
        <p>You don't have to become an expert.</p>
        <p>You don't have to be perfect.</p>
        <p>You just have to start.</p>
        <p><strong>Hobbify exists to make that first step easier.</strong></p>
      </>
    ),
  },
];

const About = () => {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="content-page about-page">
        <section className="about-intro">
          <div className="section-label">ABOUT HOBBYHUB</div>
          <h1>More Than a Store.</h1>
          <h2>A Place to Find Your Thing.</h2>
          <p><strong>Hobbify was built around a simple idea:</strong></p>
          <p>
            Everyone has something they could love doing — they just haven't discovered it yet.
          </p>
          <p>
            From picking up a guitar to growing your first plant, painting something terrible before
            painting something beautiful, or spending way too much time customizing a keyboard —
            hobbies make ordinary days a little more interesting.
          </p>
          <p><strong>Find your hobby. Build your passion.</strong></p>
        </section>

        <div className="about-cards" aria-label="Why Hobbify">
          {aboutCards.map((card, index) => (
            <article className="about-card" key={card.title}>
              <div className="about-card-number">0{index + 1}</div>
              <h3>{card.title}</h3>
              <div className="about-card-copy">{card.content}</div>
              {index < aboutCards.length - 1 && <span className="about-card-arrow" aria-hidden="true">→</span>}
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
