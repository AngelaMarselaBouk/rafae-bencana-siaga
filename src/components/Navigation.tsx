
import React from 'react';
import { Home, MapPin, AlertTriangle, FileText, BookOpen, Shield, Bell } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const { t } = useLanguage();

  const navItems = [
    { id: 'dashboard', icon: Home, label: t('home') },
    { id: 'map', icon: MapPin, label: t('map') },
    { id: 'chart', icon: FileText, label: 'Grafik' },
    { id: 'emergency', icon: AlertTriangle, label: t('emergency') },
    { id: 'notifications', icon: Bell, label: 'Notifikasi' },
    { id: 'admin', icon: Shield, label: 'Admin' },
    { id: 'education', icon: BookOpen, label: t('education') }
  ];

  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-blue-100 px-2 py-2 shadow-lg z-50 rounded-b-[2rem]">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center p-1 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-500 hover:text-blue-500 hover:bg-blue-25'
              }`}
            >
              <Icon size={14} className={`mb-1 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
