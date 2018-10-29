import React from 'react';
import Card from './components/card';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],

    };
  }

  componentDidMount() {
    axios.get(`https://content.guardianapis.com/search?api-key=${process.env.API_KEY}&show-fields=all`)
      .then(response => {
        this.setState({
          articles: response.data.response.results,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>The News</h1>
        </header>
        <main>
          {this.state.articles.map((article) => {
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
