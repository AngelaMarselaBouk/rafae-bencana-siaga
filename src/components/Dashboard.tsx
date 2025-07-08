
import React, { useState, useEffect } from 'react';
import { AlertTriangle, Cloud, Droplets, Languages, Bell, MapPin, FileText, Shield, Settings, Users, BarChart3, Thermometer, Wind, Camera, Video, Eye, Waves, LogOut, Wifi, WifiOff, HelpCircle, Phone, MapPinIcon, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from './AuthProvider';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface DashboardProps {
  onNavigate?: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { t, language, setLanguage } = useLanguage();
  const { user, logout } = useAuth();
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const menuItems = [
    { 
      icon: AlertTriangle, 
      label: 'Status Tinggi Muka Air', 
      color: 'bg-red-100 text-red-600',
      action: () => onNavigate?.('status-alert')
    },
    { 
      icon: BarChart3, 
      label: 'Pantauan Otomatis', 
      color: 'bg-blue-100 text-blue-600',
      action: () => onNavigate?.('chart')
    },
    { 
      icon: Droplets, 
      label: 'Pos Lokasi Pengamatan', 
      color: 'bg-green-100 text-green-600',
      action: () => onNavigate?.('map')
    },
    { 
      icon: Settings, 
      label: 'Status Sistem', 
      color: 'bg-purple-100 text-purple-600',
      action: () => setShowSettings(true)
    },
    { 
      icon: Video, 
      label: 'Pemantauan CCTV', 
      color: 'bg-orange-100 text-orange-600',
      action: () => onNavigate?.('cctv')
    },
    { 
      icon: MapPin, 
      label: 'Peta Lokasi', 
      color: 'bg-teal-100 text-teal-600',
      action: () => onNavigate?.('map')
    },
    { 
      icon: Users, 
      label: 'Pos Pengamat TMA', 
      color: 'bg-pink-100 text-pink-600',
      action: () => onNavigate?.('water-level')
    },
    { 
      icon: Bell, 
      label: 'Sistem Notifikasi', 
      color: 'bg-yellow-100 text-yellow-600',
      action: () => onNavigate?.('notifications')
    },
    { 
      icon: Shield, 
      label: 'Kontak Darurat', 
      color: 'bg-red-100 text-red-600',
      action: () => onNavigate?.('emergency')
    },
    { 
      icon: Cloud, 
      label: 'Perkiraan Cuaca', 
      color: 'bg-cyan-100 text-cyan-600',
      action: () => onNavigate?.('weather-forecast')
    },
    { 
      icon: FileText, 
      label: 'Laporan', 
      color: 'bg-gray-100 text-gray-600',
      action: () => onNavigate?.('report')
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500 overflow-y-auto">
      {/* Header */}
      <div className="p-4 text-white">
        <div className="flex items-center justify-between mb-4 pt-6">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold">Home</h1>
          </div>
          <div className="flex gap-2">
            {/* Online/Offline Indicator */}
            <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-1">
              {isOnline ? (
                <Wifi size={14} className="text-green-300" />
              ) : (
                <WifiOff size={14} className="text-red-300" />
              )}
              <span className="text-xs">{isOnline ? 'Online' : 'Offline'}</span>
            </div>
            
            {/* Help Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white p-2"
              onClick={() => setShowHelp(true)}
              title="Bantuan"
            >
              <HelpCircle size={16} />
            </Button>

            {/* Language Selector */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const nextLang = language === 'id' ? 'tet' : 'id';
                setLanguage(nextLang);
              }}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs"
            >
              <Languages size={14} />
              {language === 'id' ? 'ID' : 'TET'}
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white p-2 relative"
              onClick={() => onNavigate?.('notifications')}
            >
              <Bell size={16} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white p-2"
              onClick={logout}
              title="Keluar"
            >
              <LogOut size={16} />
            </Button>
          </div>
        </div>

        {/* Flood Alert Button */}
        <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border-red-300/30 text-white shadow-xl mb-4">
          <CardContent className="p-4">
            <Button 
              onClick={() => onNavigate?.('status-alert')}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 text-lg"
            >
              <AlertTriangle size={24} className="mr-2" />
              PERINGATAN BANJIR
            </Button>
            <p className="text-center text-sm mt-2 text-white/80">
              Status saat ini: <span className="font-bold text-green-300">AMAN</span>
            </p>
          </CardContent>
        </Card>

        {/* Main Header Card */}
        <Card className="bg-white/20 backdrop-blur-sm border-white/30 text-white shadow-xl mb-4">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Waves className="text-white" size={24} />
              </div>
            </div>
            <h2 className="text-lg font-bold mb-1">Sistem Peringatan Dini Banjir</h2>
            <p className="text-white/90 text-xs">Atambua, Kabupaten Belu, Nusa Tenggara Timur</p>
          </CardContent>
        </Card>

        {/* Help Modal */}
        {showHelp && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md bg-white">
              <CardHeader>
                <CardTitle className="text-center text-gray-800">Panduan Penggunaan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Pantau Status Air</p>
                      <p className="text-xs text-gray-600">Cek status tinggi muka air secara real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Terima Notifikasi</p>
                      <p className="text-xs text-gray-600">Daftar untuk mendapat peringatan dini</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Kontak Darurat</p>
                      <p className="text-xs text-gray-600">Hubungi nomor darurat saat terjadi banjir</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-xs text-yellow-800">
                    <strong>Tips:</strong> Aplikasi tetap bisa digunakan dalam mode offline
                  </p>
                </div>
                <Button 
                  onClick={() => setShowHelp(false)}
                  className="w-full"
                >
                  Mengerti
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Settings Modal */}
        {showSettings && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md bg-white">
              <CardHeader>
                <CardTitle className="text-center text-gray-800">Status Sistem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="text-sm text-green-700 font-medium">Sistem Operasional</p>
                  </div>
                  <p className="text-xs text-green-600 mt-1">
                    Semua sensor dan monitoring berfungsi normal
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <p className="text-sm text-blue-700 font-medium">Mode Offline Tersedia</p>
                  </div>
                  <p className="text-xs text-blue-600 mt-1">
                    Aplikasi dapat bekerja tanpa koneksi internet
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-700">
                    <strong>Versi Aplikasi:</strong> 1.0.0<br />
                    <strong>Terakhir Update:</strong> 2 Juli 2025<br />
                    <strong>Status Server:</strong> <span className="text-green-600">Online</span>
                  </p>
                </div>
                <Button 
                  onClick={() => setShowSettings(false)}
                  className="w-full"
                >
                  Tutup
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Menu Grid - Made scrollable */}
        <div className="bg-white rounded-t-3xl -mx-4 px-4 py-4 min-h-80 max-h-96 overflow-y-auto">
          <div className="grid grid-cols-3 gap-3 mb-6">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={item.action}
                  className="flex flex-col items-center hover:scale-105 transition-transform duration-200 p-2"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${item.color}`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] text-center text-gray-700 leading-tight px-1">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Wave Pattern */}
          <div className="relative h-16 mt-4">
            <svg className="absolute bottom-0 w-full" viewBox="0 0 400 100" preserveAspectRatio="none">
              <path d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z" fill="rgba(59, 130, 246, 0.1)" />
              <path d="M0,60 Q100,30 200,60 T400,60 L400,100 L0,100 Z" fill="rgba(59, 130, 246, 0.05)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
