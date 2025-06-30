
import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Dashboard } from '../components/Dashboard';
import { Map } from '../components/Map';
import { Emergency } from '../components/Emergency';
import { Report } from '../components/Report';
import { Education } from '../components/Education';
import { AdminPanel } from '../components/AdminPanel';
import { NotificationSystem } from '../components/NotificationSystem';
import { WeatherChart } from '../components/WeatherChart';
import { StatusAlert } from '../components/StatusAlert';
import { WaterLevelStatus } from '../components/WaterLevelStatus';
import { WeatherForecast } from '../components/WeatherForecast';
import { CCTVMonitoring } from '../components/CCTVMonitoring';
import { LanguageProvider } from '../contexts/LanguageContext';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onNavigate={setActiveTab} />;
      case 'map':
        return <Map onBack={() => setActiveTab('dashboard')} />;
      case 'chart':
        return <WeatherChart onBack={() => setActiveTab('dashboard')} />;
      case 'status-alert':
        return <StatusAlert onBack={() => setActiveTab('dashboard')} />;
      case 'water-level':
        return <WaterLevelStatus onBack={() => setActiveTab('dashboard')} />;
      case 'weather-forecast':
        return <WeatherForecast onBack={() => setActiveTab('dashboard')} />;
      case 'cctv':
        return <CCTVMonitoring onBack={() => setActiveTab('dashboard')} />;
      case 'emergency':
        return <Emergency />;
      case 'report':
        return <Report />;
      case 'notifications':
        return <NotificationSystem />;
      case 'admin':
        return <AdminPanel />;
      case 'education':
        return <Education />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        {/* Phone Container */}
        <div className="relative w-full max-w-sm mx-auto">
          {/* Phone Frame */}
          <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
            {/* Screen */}
            <div className="bg-white rounded-[2rem] overflow-hidden relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-50"></div>
              
              {/* Screen Content */}
              <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 min-h-[640px] max-h-[640px] overflow-hidden">
                <div className="pb-20 h-full overflow-y-auto">
                  {renderContent()}
                </div>
                <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
              </div>
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
          </div>
          
          {/* Phone Shadow */}
          <div className="absolute inset-0 bg-black/20 rounded-[2.5rem] blur-xl transform translate-y-4 -z-10"></div>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
