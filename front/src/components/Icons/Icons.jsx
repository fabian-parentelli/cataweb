import './icons.css';
import AppIcon from './Paths/AppIcon';
import BellIcon from './Paths/BellIcon';
import CalendarIcon from './Paths/CalendarIcon';
import CarrotIcon from './Paths/CarrotIcon';
import CartIcon from './Paths/CartIcon';
import ClipboardIcon from './Paths/ClipboardIcon';
import ComputerIcon from './Paths/ComputerIcon';
import CopyIcons from './Paths/CopyIcons';
import Crediticon from './Paths/CreditIcon';
import CrossIcon from './Paths/CrossIcon';
import DashboardIcon from './Paths/DashboardIcon';
import DeleteIcon from './Paths/DeleteIcon';
import DoorIcon from './Paths/DoorIcon';
import DownIcon from './Paths/DownIcon';
import FacebookIcon from './Paths/FacebookIcon';
import ImageIcon from './Paths/ImageIcon';
import InfoIcon from './Paths/InfoIcon';
import InstagramIcon from './Paths/Instagram';
import MapIcon from './Paths/MapIcon';
import MessageIcon from './Paths/MessageIcon';
import NotCreditIcon from './Paths/NotCreditIcon';
import NotImageIcon from './Paths/NotImage';
import PadLockIcon from './Paths/PadlockIcon';
import PdfIcon from './Paths/PdfIcon';
import ReportIcon from './Paths/ReportIcon';
import RunIcon from './Paths/RunIcon';
import ShirtIcon from './Paths/ShirtIcon';
import SquareIcon from './Paths/SquareIcon';
import StarIcon from './Paths/StarIcon';
import SuccessIcon from './Paths/SuccessIcon';
import TicketsIcon from './Paths/TicketIcon';
import TicketIcon from './Paths/TicketIcons';
import TvIcon from './Paths/TvIcon';
import UsercircleIcon from './Paths/UsercircleIcon';
import UserIcon from './Paths/UserIcon';
import WarningIcon from './Paths/WarningIcon';
import XIcon from './Paths/XIcon';
import YoutubeIcon from './Paths/YoutubeIcon';

const Icons = ({ color = 'gray', size = '30px', onClick, backCol = 'none', bold = 2, type = 'app', hover = false }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size} height={size}
            style={{ fill: backCol }}
            onClick={onClick}
            stroke={color}
            strokeWidth={bold}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={hover ? 'iconsHover' : ''}
        >
            {type === 'facebook' && <FacebookIcon />}
            {type === 'x' && <XIcon />}
            {type === 'instagram' && <InstagramIcon />}
            {type === 'youtube' && <YoutubeIcon />}

            {type === 'user' && <UserIcon />}
            {type === 'info' && <InfoIcon />}
            {type === 'app' && <AppIcon />}
            {type === 'error' && <CrossIcon />}
            {type === 'warning' && <WarningIcon />}
            {type === 'success' && <SuccessIcon />}
            {type === 'dashboard' && <DashboardIcon />}
            {type === 'star' && <StarIcon />}
            {type === 'message' && <MessageIcon />}
            {type === 'bell' && <BellIcon />}
            {type === 'run' && <RunIcon />}
            {type === 'door' && <DoorIcon />}
            {type === 'ticket' && <TicketIcon />}
            {type === 'shirt' && <ShirtIcon />}
            {type === 'computer' && <ComputerIcon />}
            {type === 'clipboard' && <ClipboardIcon />}
            {type === 'report' && <ReportIcon />}
            {type === 'userCircle' && <UsercircleIcon />}
            {type === 'image' && <ImageIcon />}
            {type === 'delete' && <DeleteIcon />}
            {type === 'square' && <SquareIcon />}
            {type === 'padlock' && <PadLockIcon />}
            {type === 'carrot' && <CarrotIcon />}
            {type === 'copy' && <CopyIcons />}
            {type === 'calendar' && <CalendarIcon />}
            {type === 'map' && <MapIcon />}
            {type === 'credit' && <Crediticon />}
            {type === 'publicity' && <TvIcon />}
            {type === 'cart' && <CartIcon />}
            {type === 'down' && <DownIcon />}
            {type === 'tickets' && <TicketsIcon />}
            {type === 'pdf' && <PdfIcon />}
            {type === 'notimage' && <NotImageIcon />}
            {type === 'notcredit' && <NotCreditIcon />}
        </svg>
    );
};

export default Icons;