
import React, { useState } from 'react';
import { AlertTriangle, Cloud, Droplets, Languages, Bell, MapPin, FileText, Shield, Settings, Users, BarChart3, Thermometer, Wind, Camera, Video, Eye, Zap, Waves } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface DashboardProps {
  onNavigate?: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { t, language, setLanguage } = useLanguage();

  const menuItems = [
    { 
      icon: AlertTriangle, 
      label: 'Status Tinggi Muka Air', 
      color: 'bg-red-100 text-red-600',
      action: () => onNavigate?.('status-alert')
    },
    { 
      icon: BarChart3, 
      label: 'Deteksi Otomatis', 
      color: 'bg-blue-100 text-blue-600',
      action: () => onNavigate?.('chart')
    },
    { 
      icon: Droplets, 
      label: 'Pos Lokasi Pengamatan', 
      color: 'bg-green-100 text-green-600',
      action: () => onNavigate?.('water-level')
    },
    { 
      icon: Settings, 
      label: 'Operasi', 
      color: 'bg-purple-100 text-purple-600',
      action: () => onNavigate?.('admin')
    },
    { 
      icon: Video, 
      label: 'Pemantauan CCTV', 
      color: 'bg-orange-100 text-orange-600',
      action: () => onNavigate?.('cctv')
    },
    { 
      icon: MapPin, 
      label: 'Prediksi Cuaca', 
      color: 'bg-teal-100 text-teal-600',
      action: () => onNavigate?.('weather-forecast')
    },
    { 
      icon: Users, 
      label: 'Pos Pengamat TMA', 
      color: 'bg-pink-100 text-pink-600',
      action: () => onNavigate?.('water-level')
    },
    { 
      icon: Bell, 
      label: 'Laporan Masyarakat', 
      color: 'bg-yellow-100 text-yellow-600',
      action: () => onNavigate?.('report')
    },
    { 
      icon: Shield, 
      label: 'Kontak Darurat', 
      color: 'bg-red-100 text-red-600',
      action: () => onNavigate?.('emergency')
    },
    { 
      icon: Eye, 
      label: 'Sistem Otomatis', 
      color: 'bg-cyan-100 text-cyan-600',
      action: () => onNavigate?.('map')
    },
    { 
      icon: Zap, 
      label: 'Peringatan Aplikasi', 
      color: 'bg-gray-100 text-gray-600',
      action: () => onNavigate?.('notifications')
    },
    { 
      icon: FileText, 
      label: 'Edukasi Bencana', 
      color: 'bg-indigo-100 text-indigo-600',
      action: () => onNavigate?.('education')
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
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'id' ? 'tet' : 'id')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs"
            >
              <Languages size={14} />
              {language === 'id' ? 'ID' : 'TET'}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white p-2"
              onClick={() => onNavigate?.('notifications')}
            >
              <Bell size={16} />
            </Button>
          </div>
        </div>

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
