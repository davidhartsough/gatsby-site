import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import './index.css';

const HelmetHead = ({ meta }) => (
  <Helmet>
    <meta name="author" content={meta.name} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content={meta.twitter} />
    <meta name="twitter:creator" content={meta.twitter} />
    <meta name="twitter:image" content={`${meta.url}icon-512x512.png`} />
    <meta name="twitter:image:alt" content={`${meta.name}'s logo`} />
    <meta property="og:site_name" content={meta.name} />
    <meta
      property="og:image"
      itemprop="image"
      content={`${meta.url}logo.png`}
    />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_US" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color={meta.color} />
    <meta name="apple-mobile-web-app-title" content={meta.name} />
    <meta name="application-name" content={meta.name} />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content={meta.color} />
    <meta name="msapplication-TileColor" content={meta.color} />
    <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
    <meta name="msapplication-navbutton-color" content={meta.color} />
    <title>{meta.name}</title>
    <meta name="keywords" content={meta.keywords} />
    <meta name="description" content={meta.description} />
    <meta name="twitter:title" content={meta.name} />
    <meta name="twitter:description" content={meta.description} />
    <meta property="og:title" itemprop="name" content={meta.name} />
    <meta
      property="og:description"
      itemprop="description"
      content={meta.description}
    />
    <meta property="og:url" content={meta.url} />
    <meta property="og:type" content="website" />
  </Helmet>
);

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const Timeframe = ({ timeframe }) => {
  if (timeframe.start === timeframe.end) {
    return <span>{timeframe.start}</span>;
  }
  return (
    <span>
      {timeframe.start}&#8211;{timeframe.end ? timeframe.end : 'Present'}
    </span>
  );
};

const Mission = ({ mission }) => (
  <span>
    To {mission.contribution} in order to {mission.impact}&#46;
  </span>
);

export default ({ data }) => {
  const p = data.allDataJson.edges[0].node.person;
  return (
    <main>
      <HelmetHead meta={p.meta} />
      <header>
        <h1>
          {p.name.first} {p.name.last}
        </h1>
      </header>
      <section>
        <h2>Identities</h2>
        <p>{capitalize(p.identities.join(', '))}&#46;</p>
        <h2>Values</h2>
        <p>{capitalize(p.values.join(', '))}&#46;</p>
        <h2>Missions</h2>
        <ol>
          {p.missions.map(mission => (
            <li key={mission.contribution}>
              <p>
                <Mission mission={mission} />
              </p>
            </li>
          ))}
        </ol>
        <h2>Links</h2>
        <ul id="links">
          {p.links.map(link => (
            <li key={link.name} className={link.name}>
              <a href={link.url} target="_blank">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <h2>Projects</h2>
        <div id="projects">
          {p.projects.map(project => (
            <div key={project.name} className="project">
              <h3>
                <a href={project.url} target="_blank">
                  {project.name}
                </a>
              </h3>
              <p>
                <Timeframe timeframe={project.timeframe} />
              </p>
              <p>
                <Mission mission={project.mission} />
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export const query = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          person {
            meta {
              name
              url
              keywords
              description
              color
              twitter
            }
            name {
              first
              last
            }
            links {
              name
              url
            }
            identities
            values
            missions {
              contribution
              impact
            }
            projects {
              name
              url
              timeframe {
                start
                end
              }
              mission {
                contribution
                impact
              }
            }
          }
        }
      }
    }
  }
`;
