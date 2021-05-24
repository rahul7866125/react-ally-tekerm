import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apidata: {
        data: [
          {
            id: '1',
            category: 'dwa',
            title: 'defa',
            metric_name: 'dwad',
            metric_start: 'dwa',
            metric_target: 'daw',
            parent_objective_id: 'dwa',
            archived: 'dwad'
          }
        ]
      }
    };
  }
  componentDidMount() {
    fetch('https://okrcentral.github.io/sample-okrs/db.json')
      .then(result => result.json())
      .then(data => {
        this.setState({ apidata: data });
      });
  }

  render() {
    return (
      <div>
        <Accordion>
          {this.state.apidata.data
            .filter(obj => {
              return obj.parent_objective_id == '';
            })
            .map((obj, index) => {
              return (
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={index.toString()}
                    >
                      {obj.title}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>
                      <ul>
                        {this.state.apidata.data
                          .filter(miniobj => {
                            return miniobj.parent_objective_id == obj.id;
                          })
                          .map(mini2obj => {
                            return <li>{mini2obj.title}</li>;
                          })}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })}
        </Accordion>
      </div>
    );
  }
}
