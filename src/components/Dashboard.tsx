
import React, { useState } from 'react';
import { AlertTriangle, Cloud, Droplets, Languages, Bell, MapPin, FileText, Shield, Settings, Users, BarChart3, Thermometer, Wind } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const Dashboard: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      {/* Header */}
      <div className="p-4 text-white">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Droplets className="text-white" size={16} />
            </div>
            <div>
              <h1 className="text-lg font-bold">Sistem Peringatan Dini Banjir</h1>
              <p className="text-white/80 text-xs">DKI Jakarta</p>
            </div>
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
          </div>
        </div>

        {/* Main Status Card */}
        <Card className="bg-orange-400 border-orange-500 text-white shadow-xl mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={20} />
                  <span className="text-sm font-medium">Siaga Hujan Deras</span>
                </div>
                <div className="text-2xl font-bold">216°C</div>
                <div className="text-sm opacity-90">17 Stasiun</div>
              </div>
              <div className="text-right">
                <div className="text-xs opacity-75">Pk. Angke Hulu</div>
                <div>Awas</div>
                <div className="text-lg font-bold">216°C</div>
                <div className="text-xs">🟡 Siaga 3</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-xs mb-1">Pompa Kali Duri (Kalijodo)</div>
              <div className="text-xs opacity-75">Kali Duri</div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">212⚡</span>
                <span className="text-xs">🟡 Siaga 3</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status Stations Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-0">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-600 mb-1">PS. Cilangap</div>
                  <div className="text-xs text-gray-500">Ciliwung</div>
                  <div className="text-xs text-blue-600">⬇ Normal</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-800">46°C</div>
                  <div className="text-xs text-gray-500">15:50</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-0">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-600 mb-1">PS. Katulampa (Hulu)</div>
                  <div className="text-xs text-gray-500">Hulu</div>
                  <div className="text-xs text-blue-600">⬇ Normal</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-800">55°C</div>
                  <div className="text-xs text-gray-500">15:50</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-0">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-600 mb-1">PS. Depok</div>
                  <div className="text-xs text-gray-500">Ciliwung</div>
                  <div className="text-xs text-blue-600">⬇ Normal</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-800">32°C</div>
                  <div className="text-xs text-gray-500">15:50</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-0">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-600 mb-1">PS. Kp. Melayu</div>
                  <div className="text-xs text-gray-500">Ciliwung</div>
                  <div className="text-xs text-blue-600">⬇ Normal</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-800">519°C</div>
                  <div className="text-xs text-gray-500">15:50</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Icons Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <Users className="text-white" size={20} />
            </div>
            <span className="text-xs text-center">Tim Siaga</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <BarChart3 className="text-white" size={20} />
            </div>
            <span className="text-xs text-center">Grafik</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <FileText className="text-white" size={20} />
            </div>
            <span className="text-xs text-center">Laporan</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <Settings className="text-white" size={20} />
            </div>
            <span className="text-xs text-center">Pengaturan</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <MapPin className="text-white" size={20} />
            </div>
            <span className="text-xs text-center">Peta Lokasi</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <Thermometer className="text-white" size={20} />
            </div>
            <span className="text-xs text-center">Suhu</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <Wind className="text-white" size={20} />
            </div>
            <span className="text-xs text-center">Angin</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <Cloud className="text-white" size={20} />
            </div>
            <span className="text-xs text-center">Cuaca</span>
          </div>
        </div>

        {/* Wave Pattern */}
        <div className="relative h-20 mt-6">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 400 100" preserveAspectRatio="none">
            <path d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z" fill="rgba(255,255,255,0.1)" />
            <path d="M0,60 Q100,30 200,60 T400,60 L400,100 L0,100 Z" fill="rgba(255,255,255,0.05)" />
          </svg>
        </div>
      </div>
    </div>
  );
};
