import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, MonitorSmartphone, PlaySquare, Target, CheckSquare, Award, Star } from 'lucide-react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: <Home size={20} />, label: 'Dashboard' },
    { path: '/media-queries', icon: <MonitorSmartphone size={20} />, label: 'Media Queries' },
    { path: '/animation-studio', icon: <PlaySquare size={20} />, label: 'Animation Studio' },
    { path: '/challenges', icon: <Target size={20} />, label: 'Challenges' },
    { path: '/quiz', icon: <CheckSquare size={20} />, label: 'CSS Quiz' },
    { path: '/progress', icon: <Award size={20} />, label: 'Progress' },
    { path: '/final-project', icon: <Star size={20} />, label: 'Final Project' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon">CSS</div>
        <h2 className="logo-text">Learning Lab</h2>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <p>Experiment With It!</p>
      </div>
    </aside>
  );
};

export default Sidebar;
