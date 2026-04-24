import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SubNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: 'Kitchens', path: '/services/kitchens' },
        { label: 'Doors', path: '/services/doors' },
        { label: 'Wardrobes', path: '/services/wardrobes' },
        { label: 'Media Walls', path: '/services/media-walls' },
        { label: 'Cafe Fits', path: '/services/cafe-fitouts' },
    ];

    const handleNavigate = (path) => {
        if (location.pathname === path) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate(path);
        }
    };

    return (
        <div 
            style={{ 
                position: 'sticky', 
                top: 80, // Assuming main navbar is 80px high
                zIndex: 90,
                background: 'rgba(248, 246, 241, 0.95)',
                backdropFilter: 'blur(8px)',
                borderBottom: '0.5px solid #e0ddd7',
                padding: '0 48px',
                display: 'flex',
                justifyContent: 'center',
                height: '50px',
                alignItems: 'center'
            }}
        >
            <div style={{ display: 'flex', gap: '40px' }}>
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <button
                            key={item.path}
                            onClick={() => handleNavigate(item.path)}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: '9px',
                                fontWeight: 600,
                                letterSpacing: '2.5px',
                                textTransform: 'uppercase',
                                color: isActive ? '#3c5a25' : '#1A1C19',
                                cursor: 'pointer',
                                opacity: isActive ? 1 : 0.6,
                                transition: 'opacity 0.3s, color 0.3s',
                                borderBottom: isActive ? '1px solid #3c5a25' : '1px solid transparent',
                                paddingBottom: '2px',
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.opacity = 1;
                                    e.currentTarget.style.color = '#3c5a25';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.opacity = 0.6;
                                    e.currentTarget.style.color = '#1A1C19';
                                }
                            }}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SubNavbar;

