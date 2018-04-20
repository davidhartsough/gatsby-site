import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const HelmetHead = () => (
  <Helmet>
    <title>David Hartsough</title>
    <meta name="keywords" content="david,hartsough,davidhartsough" />
    <meta
      name="description"
      content="David Hartsough is a happy human who loves discussing the philosophy and psychology of flourishing, connectedness, and identity."
    />
    <meta name="twitter:title" content="David Hartsough" />
    <meta
      name="twitter:description"
      content="David Hartsough is a happy human who loves discussing the philosophy and psychology of flourishing, connectedness, and identity."
    />
    <meta property="og:title" itemprop="name" content="David Hartsough" />
    <meta
      property="og:description"
      itemprop="description"
      content="David Hartsough is a happy human who loves discussing the philosophy and psychology of flourishing, connectedness, and identity."
    />
    <meta property="og:url" content="http://davidhartsough.com/" />
    <meta property="og:type" content="website" />
  </Helmet>
);

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
      <HelmetHead />
      <header>
        <h1>
          {p.name.first} {p.name.last}
        </h1>
      </header>
      <section>
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
