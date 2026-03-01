import { Link } from 'react-router-dom';
import { GLOSSARY_ENTRIES } from '../../data/glossary';
import PageContainer from '../layout/PageContainer';

export default function GlossaryPage() {
  return (
    <PageContainer className="glossary-page">
      <header className="glossary-header">
        <h1>Plain-English Glossary</h1>
        <p>Quick definitions for terms used throughout the course.</p>
      </header>

      <section className="glossary-grid" aria-label="Glossary terms">
        {GLOSSARY_ENTRIES.map(entry => (
          <article key={entry.term} className="glossary-card">
            <h2>{entry.term}</h2>
            <p>{entry.definition}</p>
            <p className="glossary-example">{entry.example}</p>
          </article>
        ))}
      </section>

      <div className="glossary-actions">
        <Link to="/dashboard" className="btn btn-primary">
          Back to Dashboard
        </Link>
      </div>
    </PageContainer>
  );
}
