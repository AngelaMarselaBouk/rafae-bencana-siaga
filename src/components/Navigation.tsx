
import React from 'react';
import { Home, MapPin, AlertTriangle, FileText, BookOpen, Shield, Bell } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const { t } = useLanguage();

  // Only show active/implemented navigation items (removed education since content is not available)
  const navItems = [
    { id: 'dashboard', icon: Home, label: t('home') },
    { id: 'map', icon: MapPin, label: t('map') },
    { id: 'chart', icon: FileText, label: 'Grafik' },
    { id: 'emergency', icon: AlertTriangle, label: t('emergency') },
    { id: 'notifications', icon: Bell, label: 'Notifikasi' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-blue-100 px-4 py-3 shadow-lg z-50">
      <div className="flex justify-around items-center max-w-4xl mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-500 hover:text-blue-500 hover:bg-blue-25'
              }`}
            >
              <Icon size={20} className={`mb-1 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
