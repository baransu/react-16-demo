import format from 'date-fns/format';

const Time = props => format(props.date, 'HH:mm:ss');

export default Time;
