import PropTypes from 'prop-types'

import ColorSwatch from '../../Drawing/ColorSwatch'

const StudyModalOutput = (props) => {
    if (!props.output) return (<div></div>)
    return (
        <div className='outputs dialog-item'>
            {props.output.color ? <ColorSwatch isModal={true} name={props.output.heading} type={'output'} setColor={props.setColor} color={props.output.color} isPickingColor={props.isPickingStudyColor} changeState={props.changePickerState} /> : <div></div>}
            <div>
                {props.output.heading}
            </div>
        </div>
    )
}

StudyModalOutput.defaultProps = {
    isModal: false
};

StudyModalOutput.PropTypes = {
    output: PropTypes.object.isRequired,
    setColor: PropTypes.func.isRequired,
    isPickingStudyColor: PropTypes.bool.isRequired,
    changePickerState: PropTypes.func.isRequired,
    isModal: PropTypes.bool
};

export default StudyModalOutput