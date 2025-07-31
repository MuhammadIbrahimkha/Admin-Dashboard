import { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import {
    FiHome,
    FiBarChart2,
    FiUsers,
    FiSettings,
    FiLogOut,
    FiMenu,
    FiX,
    FiBell,
    FiSearch,
    FiDollarSign,
    FiUser,
    FiActivity,
    FiTrendingUp,
    FiEdit,
    FiUnlock,
    
} from 'react-icons/fi';
import { FaFirstOrder } from 'react-icons/fa';

// Register Chart.js modules
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const DashboardLayout = () => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    const toggleMobileSidebar = () => setMobileSidebarOpen(!mobileSidebarOpen);

    const navLinks = [
        { name: 'Dashboard', icon: <FiHome />, href: '#' },
        { name: 'Analytics', icon: <FiBarChart2 />, href: '#' },
        { name: 'Users', icon: <FiUsers />, href: '#' },
        { name: 'Settings', icon: <FiSettings />, href: '#' },
    ];

    const cards = [
        {
            title: 'Total Revenue',
            value: '$24,780',
            note: '+12.5% from last month',
            icon: <FiDollarSign size={24} />,
        },
        {
            title: 'New Users',
            value: '1,024',
            note: '+8.1% from last week',
            icon: <FiUser size={24} />,
        },
        {
            title: 'Active Sessions',
            value: '3,543',
            note: '+5.4% today',
            icon: <FiActivity size={24} />,
        },
        {
            title: 'Conversion Rate',
            value: '7.2%',
            note: '+1.3% this month',
            icon: <FiTrendingUp size={24} />,
        },
    ];

    const lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'User Growth',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
            },
        ],
    };

    const lineChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'User Growth Over Time',
            },
        },
    };

    const barChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'Revenue ($)',
                data: [200, 450, 300, 700, 500],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 bg-blue-900 text-white flex-shrink-0">
                <div className="flex items-center justify-between p-4 shadow hover:shadow-white">
                    <h1 className="text-xl font-bold text-white">NextGen Panel</h1>
                </div>
                <nav className="p-4">
                    <ul className="space-y-2">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="flex items-center p-3 rounded-lg text-white hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    <span className="mr-3">{link.icon}</span>
                                    <span>{link.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="absolute bottom-0 w-65 p-4 border-t border-gray-200">
                    <a
                        href="#"
                        className="flex items-center p-3 rounded-lg text-whit hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                        <span className="mr-3">
                            <FiLogOut />
                        </span>
                        <span>Logout</span>
                    </a>
                </div>
            </aside>

            {/* Mobile Sidebar */}
            {mobileSidebarOpen && (
                <div className="fixed inset-0 z-40 flex lg:hidden">
                    <div className="w-64 bg-white border-r border-gray-200">
                        <div className="flex items-center justify-between p-4">
                            <h1 className="text-xl font-bold text-blue-600">Dashboard</h1>
                            <button onClick={toggleMobileSidebar} className="text-gray-500 hover:text-gray-700">
                                <FiX size={20} />
                            </button>
                        </div>
                        <nav className="p-4">
                            <ul className="space-y-2">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                        >
                                            <span className="mr-3">{link.icon}</span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="flex-1 bg-black bg-opacity-40" onClick={toggleMobileSidebar}></div>
                </div>
            )}

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                {/* Header */}
                <header className="bg-white border-b border-gray-300 px-4 py-3 flex items-center justify-between space-x-10">
                    <div className="flex items-center space-x-4">
                        <button className="lg:hidden text-gray-500 hover:text-gray-700" onClick={toggleMobileSidebar}>
                            <FiMenu size={20} />
                        </button>
                        <div className="relative">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-700 focus:border-blue-700"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-500 hover:text-gray-700 relative cursor-pointer">
                            <FiBell size={20} />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full "></span>
                        </button>
                        <div className="flex items-center">
                            <img
                                src="./src/assets/ibrahim.jpg"
                                alt="User avatar"
                                className="w-12 h-12 object-cover border-2 border-blue-500 rounded-full cursor-pointer"
                            />
                            <span className="ml-2 text-sm font-medium hidden md:inline"></span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl p-6 border border-gray-200 shadow hover:shadow-lg cursor-pointer transition"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">{card.title}</p>
                                            <p className="text-2xl font-bold mt-1">{card.value}</p>
                                            <p className="text-xs text-green-500 mt-1">{card.note}</p>
                                        </div>

                                        {/* icon wrapper uses group-hover to react to card hover */}
                                        <div className="p-3 rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-900 group-hover:text-white">
                                            {card.icon}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                        {/* Charts */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 ">
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-teal-700">
                                <h3 className="text-lg font-semibold mb-4">User Growth Chart</h3>
                                <Line data={lineChartData} options={lineChartOptions} />
                            </div>

                            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-purple-700">
                                <h3 className="text-lg font-semibold mb-4">Weekly Revenue</h3>
                                <Bar data={barChartData} options={{ responsive: true }} />
                            </div>
                        </div>

                        {/* Additional Panels */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-blue-300">
                                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                                <div className="space-y-4 ">
                                    {[
                                        {
                                            title: 'New user registration',
                                            description: 'Aisha Malik just signed up',
                                            time: '2 hours ago',
                                            icon: <FiUsers className="text-gray-600" />,
                                        },
                                        {
                                            title: 'Order completed',
                                            description: 'Order #1024 has been successfully delivered',
                                            time: '5 hours ago',
                                            icon: <FaFirstOrder className="text-gray-600" />,
                                        },
                                        {
                                            title: 'Profile updated',
                                            description: 'Ahmed Khan updated his contact details',
                                            time: '1 day ago',
                                            icon: <FiEdit className="text-gray-600" />,
                                        },
                                        {
                                            title: 'Password changed',
                                            description: 'Mariam Noor changed her password',
                                            time: '2 days ago',
                                            icon: <FiUnlock className="text-gray-600" />,
                                        },
                                    ].map((activity, index) => (
                                        <div
                                            key={index}
                                            tabIndex="0"
                                            className="flex items-start hover:bg-gray-100 focus:bg-gray-100 outline-none"
                                        >
                                            <div className="flex-shrink-0 mr-3">
                                                <div className="p-3 rounded-lg bg-blue-50 text-blue-600 transition 
                    group-hover:bg-blue-900 group-hover:text-white 
                    group-focus:bg-blue-900 group-focus:text-white">
                                                    <FiUsers className="text-gray" />
                                                </div>
                                            </div>
                                            <div className="flex-1 border-b border-gray-100 pb-4">
                                                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                                                <p className="text-xs text-gray-500 mt-1">{activity.description}</p>
                                                <p className="text-xs text-gray-400 mt-2">{activity.time}</p>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-blue-300">
                                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                                <div className="space-y-3">
                                    {['Create New User', 'Review Feedback', 'Backup Database', 'System Settings'].map((action, i) => (
                                        <button
                                            key={i}
                                            className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
                                        >
                                            {action}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
