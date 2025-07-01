
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
import { AuthPage } from '../components/AuthPage';
import { AuthProvider, useAuth } from '../components/AuthProvider';
import { LanguageProvider } from '../contexts/LanguageContext';

const AppContent = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { user, login, register, logout, isLoading } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegister = async (name: string, email: string, password: string) => {
    try {
      await register(name, email, password);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Memuat...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthPage onLogin={handleLogin} onRegister={handleRegister} />;
  }

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
        return <NotificationSystem onBack={() => setActiveTab('dashboard')} />;
      case 'admin':
        return <AdminPanel />;
      case 'education':
        return <Education />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="relative pb-20 min-h-screen">
        {renderContent()}
      </div>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

const Index = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </AuthProvider>
  );
};

export default Index;
