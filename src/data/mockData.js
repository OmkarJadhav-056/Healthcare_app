//Activity Data
export const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

export const barData = [
    [2.5, 3.5, 1.8],
    [2.0, 3.2, 1.2],
    [1.5, 2.8, 3.0],
    [3.0, 1.6, 2.0],
    [2.5, 3.8, 1.4],
    [1.8, 1.2, 2.2],
    [2.2, 3.4, 1.6],
];

//Calender Data
export const weekDays = [
    { name: "Mon", date: 25 },
    { name: "Tue", date: 26 },
    { name: "Wed", date: 27 },
    { name: "Thu", date: 28 },
    { name: "Fri", date: 29 },
    { name: "Sat", date: 30 },
    { name: "Sun", date: 31 },
];

export const weeklyAppointments = {
    25: ["10:00", "11:00", "12:00"],
    26: ["08:00", "09:00", "10:00"],
    27: ["12:00", "13:00"],
    28: ["10:00", "11:00"],
    29: ["14:00", "16:00"],
    30: ["12:00", "14:00", "15:00"],
    31: ["09:00", "10:00", "11:00"],
};

export const highlightedSlots = {
    26: "09:00",
    28: "11:00",
    30: "12:00",
    31: "09:00"
};

//Appointments Data
import teeth_icon from '../assets/teeth.png';
import bicep_icon from '../assets/bicep.webp';

export const appointmentsData = [
    {
        name: 'Dentist',
        img: teeth_icon,
        time: '09:00-11:00',
        drname: 'Dr. Cameron Williamson'
    },
    {
        name: 'Physiotherapy Appointment',
        img: bicep_icon,
        time: '11:00-12:00',
        drname: 'Dr. Kevin Djones'
    }
]

//UpcomingSchedule Data
import love_icon from '../assets/love.png';
import doctor_icon from '../assets/doctor.png';
import injection_icon from '../assets/injection.png';
import eye_icon from '../assets/eye.webp';

export const thursdayData = [
    {
        name: 'Health checkup complete',
        img: injection_icon,
        time: '11:00 AM',
        day: 'thur'
    },
    {
        name: 'Ophthalmologist',
        img: eye_icon,
        time: '14:00 PM',
        day: 'thur'
    }
]
export const saturdayData = [
    {
        name: 'Cardiologist',
        img: love_icon,
        time: '12:00 AM',
        day: 'sat'
    },
    {
        name: 'Neurologist',
        img: doctor_icon,
        time: '16:00 PM',
        day: 'sat'
    }

]



