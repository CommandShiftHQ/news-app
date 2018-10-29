import React from 'react';
import Card from './components/card';
import articles from './articles.json';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>The News</h1>
        </header>
        <main>
          {articles.map((article) => {
            return (
              <Card
                key={article.id}
                title={article.fields.headline}
                blurb={article.fields.trailText}
                section={article.sectionName}
                image={article.fields.thumbnail}
              />
            );
          })}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
