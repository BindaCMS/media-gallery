import React, {useCallback} from 'react'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const dropzoneColor = '#999'

const StyledContainer = styled.div`
    width: 100%;
    margin: 10px 0;
`

const StyledMessage = styled.div`
    padding: 40px;
    text-align: center;
    border: dashed ${dropzoneColor} 1px;
    p { color: ${dropzoneColor} }
    margin-bottom: 1em;
`

const StyledPreview = styled.div`
    padding: 0 10px;
    display: flex;
`

const StyledThumb = styled.div`
    max-width:200px;
    height: auto;
    img { width:100%; height: 100%; }
`

class FileDrop extends React.Component {
    constructor(state) {
        super(state);
        this.state = {
            files: []
        };
        this.onDrop = this.onDrop.bind(this)
    }

    onDrop(files) {
        this.setState({files})
        this.props.handleDrop(this.state)
    }

    renderPreview() {
        return (
            this.state.files.map(file => (
                <div key={file.name}>
                    <div>
                        <StyledThumb>
                            <img src={URL.createObjectURL(file)}/>
                        </StyledThumb>
                        <p>{file.name}</p>
                    </div>
                </div>
            ))
        )
    }

    render() {
        return (
            <Dropzone onDrop={this.onDrop}>
                {({getRootProps, getInputProps}) => (
                    <StyledContainer>
                        <StyledMessage {...getRootProps({className: 'dropzone'})}>
                            <input
                                {...getInputProps({
                                    onChange: this.props.onChange,
                                    multiple: false,
                                    name: this.props.name
                                })}
                            />
                            <p>Drag 'n' drop or click to choose a file</p>
                        </StyledMessage>
                        <StyledPreview>
                            {this.renderPreview()}
                        </StyledPreview>
                    </StyledContainer>
                )}
            </Dropzone>
        );
    }
}

FileDrop.defaultProps = {
    handleDrop: () => { console.log('Dropzone default onChange function') }
}

FileDrop.propTypes = {
    handleDrop: PropTypes.func.isRequired,
}

export default FileDrop