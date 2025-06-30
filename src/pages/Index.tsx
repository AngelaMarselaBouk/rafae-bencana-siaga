
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
        return <Dashboard />;
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
        return <Dashboard />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <div className="pb-20">
          {renderContent()}
        </div>
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </LanguageProvider>
  );
};

export default Index;
