import './spinnerH.css';

const SpinnerH = ({ color }) => {

    return (
        <div className='spinnerH'>
            <div className="rect1" style={{ backgroundColor: !color ? '#EAEBEF' : '#005599' }}></div>
            <div className="rect2" style={{ backgroundColor: !color ? '#EAEBEF' : '#005599' }}></div>
            <div className="rect3" style={{ backgroundColor: !color ? '#EAEBEF' : '#005599' }}></div>
            <div className="rect4" style={{ backgroundColor: !color ? '#EAEBEF' : '#005599' }}></div>
            <div className="rect5" style={{ backgroundColor: !color ? '#EAEBEF' : '#005599' }}></div>
        </div>
    );
};

export default SpinnerH;
// Props: color === true ? azul : blanco