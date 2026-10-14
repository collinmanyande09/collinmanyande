import { thinking } from '../data';

export default function Thinking() {
  return (
    <section id="thinking">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">04</span>
          <span className="label"><span className="dot" aria-hidden="true"></span>Thinking</span>
        </div>
        <div className="thinking">
          {thinking.map((t, i) => (
            <figure key={i} className="quote reveal">
              <span className="qmark" aria-hidden="true">&ldquo;</span>
              <blockquote>{t.quote}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}