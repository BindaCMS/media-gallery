import React from 'react';
import axios from 'axios';
import Header from './Header';
import MediumList from "./MediumList";
import Medium from "./Medium";
import PropsRoute from './PropsRoute';
import { Switch } from 'react-router-dom';
import MediumForm from './MediumForm';

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            media: null,
        };
    }

    componentDidMount() {
        axios
            .get('/api/media.json')
            .then(response => this.setState({ media: response.data }))
            .catch((error) => {
                console.log(error);
            });
    }

    addMedium(newMedium) {
        axios
            .post('/api/media.json', newMedium)
            .then((response) => {
                alert('Medium Added!');
                const savedMedium = response.data;
                this.setState(prevState => ({
                    events: [...prevState.media, savedMedium],
                }));
                const { history } = this.props;
                history.push(`/media/${savedMedium.id}`);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        const { media } = this.state;
        if (media === null) return null;

        const { match } = this.props;
        const mediumId = match.params.id;
        const medium = media.find(e => e.id === Number(mediumId));

        return (
            <div>
                <Header />
                <MediumList media={media} activeId={Number(mediumId)}/>
                <Switch>
                    <PropsRoute path="/media/new" component={MediumForm} onSubmit={this.addMedium} />
                    <PropsRoute path="/media/:id" component={Medium} medium={medium} />
                </Switch>
            </div>
        );
    }
}

export default Editor;
