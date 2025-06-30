
import React, { useState } from 'react';
import { AlertTriangle, Cloud, Droplets, Languages, Bell, MapPin, FileText, Shield, Settings, Users, BarChart3, Thermometer, Wind, Camera, Video, Eye, Zap, Waves } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const Dashboard: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  const menuItems = [
    { icon: AlertTriangle, label: 'Status Tinggi Muka Air', color: 'bg-red-100 text-red-600' },
    { icon: BarChart3, label: 'Deteksi Otomatis', color: 'bg-blue-100 text-blue-600' },
    { icon: Droplets, label: 'Pos Lokasi Stasiun', color: 'bg-green-100 text-green-600' },
    { icon: Settings, label: 'Operasi', color: 'bg-purple-100 text-purple-600' },
    { icon: Video, label: 'Pemantauan CCTV', color: 'bg-orange-100 text-orange-600' },
    { icon: MapPin, label: 'Prediksi Cuaca', color: 'bg-teal-100 text-teal-600' },
    { icon: Users, label: 'Pos Pengamat TMA', color: 'bg-pink-100 text-pink-600' },
    { icon: Bell, label: 'Laporan Masyarakat', color: 'bg-yellow-100 text-yellow-600' },
    { icon: Shield, label: 'Kontak Darurat', color: 'bg-red-100 text-red-600' },
    { icon: Eye, label: 'Stasiun Otomatis', color: 'bg-cyan-100 text-cyan-600' },
    { icon: Zap, label: 'Peringatan Aplikasi', color: 'bg-gray-100 text-gray-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      {/* Header */}
      <div className="p-4 text-white">
        <div className="flex items-center justify-between mb-6">
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
            <Button variant="ghost" size="sm" className="text-white p-2">
              <Bell size={16} />
            </Button>
          </div>
        </div>

        {/* Main Header Card */}
        <Card className="bg-white/20 backdrop-blur-sm border-white/30 text-white shadow-xl mb-6">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Waves className="text-white" size={32} />
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2">Sistem Peringatan Dini Banjir</h2>
            <p className="text-white/90 text-sm">Atambua, Kabupaten Belu, Nusa Tenggara Timur</p>
          </CardContent>
        </Card>

        {/* Menu Grid */}
        <div className="bg-white rounded-t-3xl -mx-4 px-6 py-6 min-h-96">
          <div className="grid grid-cols-3 gap-4 mb-8">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${item.color}`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-xs text-center text-gray-700 leading-tight">{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* Wave Pattern */}
          <div className="relative h-20 mt-8">
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
