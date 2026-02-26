import { Fragment, useState, type ReactNode } from 'react';
import type { ContentBlock } from '../../types/course';

function renderInlineText(text: string): ReactNode[] {
  const pieces: ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*)|(`[^`]+`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      pieces.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      pieces.push(<strong key={`${match.index}-strong`}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('`') && token.endsWith('`')) {
      pieces.push(
        <code key={`${match.index}-code`} className="inline-code">
          {token.slice(1, -1)}
        </code>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    pieces.push(text.slice(lastIndex));
  }

  return pieces;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className="code-block-copy" onClick={handleCopy}>
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export default function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className="content-paragraph">
                {renderInlineText(block.text).map((part, i) => (
                  <Fragment key={`${index}-p-${i}`}>{part}</Fragment>
                ))}
              </p>
            );

          case 'boldText':
            return (
              <p key={index} className="content-bold-text">
                <strong className="content-bold-label">{block.label}</strong>{' '}
                {renderInlineText(block.text).map((part, i) => (
                  <Fragment key={`${index}-b-${i}`}>{part}</Fragment>
                ))}
              </p>
            );

          case 'heading': {
            if (block.level === 2) return <h2 key={index}>{block.text}</h2>;
            if (block.level === 3) return <h3 key={index}>{block.text}</h3>;
            return <h4 key={index}>{block.text}</h4>;
          }

          case 'callout': {
            const labels = { info: 'INFO', warning: 'CAUTION', tip: 'TIP' };
            return (
              <div key={index} className={`callout callout-${block.variant}`}>
                <div className="callout-title">
                  <span className="callout-marker">{labels[block.variant]}</span>
                  {block.title}
                </div>
                <p className="callout-text">
                  {renderInlineText(block.text).map((part, i) => (
                    <Fragment key={`${index}-c-${i}`}>{part}</Fragment>
                  ))}
                </p>
              </div>
            );
          }

          case 'code':
            return (
              <div key={index} className="code-block">
                <div className="code-block-header">
                  <span className="code-block-lang">{block.language}</span>
                  <CopyButton text={block.code} />
                </div>
                <pre>
                  <code>{block.code}</code>
                </pre>
              </div>
            );

          case 'table':
            return (
              <div key={index} className="content-table-wrapper">
                <table className="content-table">
                  <thead>
                    <tr>
                      {block.headers.map((header, i) => (
                        <th key={i}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci}>
                            {renderInlineText(cell).map((part, i) => (
                              <Fragment key={`${ri}-${ci}-${i}`}>{part}</Fragment>
                            ))}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case 'orderedList':
            return (
              <ol key={index} className="content-list">
                {block.items.map((item, i) => (
                  <li key={i}>
                    {renderInlineText(item).map((part, x) => (
                      <Fragment key={`${index}-${i}-${x}`}>{part}</Fragment>
                    ))}
                  </li>
                ))}
              </ol>
            );

          case 'unorderedList':
            return (
              <ul key={index} className="content-list">
                {block.items.map((item, i) => (
                  <li key={i}>
                    {renderInlineText(item).map((part, x) => (
                      <Fragment key={`${index}-${i}-${x}`}>{part}</Fragment>
                    ))}
                  </li>
                ))}
              </ul>
            );

          case 'numberedSteps':
            return (
              <div key={index} className="numbered-steps">
                {block.steps.map((step, i) => (
                  <div key={i} className="step">
                    <div className="step-number">{step.number}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>
                        {renderInlineText(step.description).map((part, x) => (
                          <Fragment key={`${index}-${i}-${x}`}>{part}</Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );

          case 'comparison':
            return (
              <div key={index} className="content-table-wrapper">
                <table className="content-table">
                  <thead>
                    <tr>
                      {block.headers.map((header, i) => (
                        <th key={i}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.cells.map((cell, ci) => (
                          <td key={ci}>
                            {renderInlineText(cell).map((part, x) => (
                              <Fragment key={`${ri}-${ci}-${x}`}>{part}</Fragment>
                            ))}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case 'vocabulary':
            return (
              <div key={index} className="vocabulary-list">
                {block.terms.map((item, i) => (
                  <div key={i} className="vocabulary-item">
                    <div className="vocabulary-term">{item.term}</div>
                    <div className="vocabulary-def">
                      {renderInlineText(item.definition).map((part, x) => (
                        <Fragment key={`${index}-${i}-${x}`}>{part}</Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
