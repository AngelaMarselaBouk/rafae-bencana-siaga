
import React, { useState } from 'react';
import { AlertTriangle, Cloud, Droplets, Languages, Bell, MapPin, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const Dashboard: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [waterLevel, setWaterLevel] = useState<'normal' | 'warning' | 'alert' | 'danger'>('alert');

  const getWaterLevelColor = (level: string) => {
    switch (level) {
      case 'normal': return 'text-green-600 bg-green-50 border-green-200';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'alert': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'danger': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getWaterLevelProgress = (level: string) => {
    switch (level) {
      case 'normal': return '25%';
      case 'warning': return '50%';
      case 'alert': return '75%';
      case 'danger': return '100%';
      default: return '25%';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      {/* Header */}
      <div className="p-6 text-white">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Droplets className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold">Sistem Peringatan Dini Banjir</h1>
              <p className="text-white/80 text-sm">Desa Rafae, Kec. Raimanuk, Kab. Belu, NTT</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'id' ? 'tet' : 'id')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Languages size={16} />
              {language === 'id' ? 'ID' : 'TET'}
            </Button>
          </div>
        </div>

        {/* Main Status Card */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-orange-600 uppercase">SIAGA</h2>
                <p className="text-gray-600 text-sm">Bersiaplah Evakuasi</p>
                <p className="text-gray-500 text-xs">Desa Rafae, Raimanuk, Belu, NTT</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Ketinggian Air Sungai Rafae</span>
                <span className="text-3xl font-bold text-orange-500">40cm</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-orange-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: getWaterLevelProgress(waterLevel) }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Action Cards */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-blue-500" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Monitor Cuaca</h3>
              <p className="text-gray-600 text-sm">Pantau kondisi real-time</p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="text-green-500" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Laporkan Kondisi</h3>
              <p className="text-gray-600 text-sm">Kirim laporan lapangan</p>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Button */}
        <Card className="bg-red-500 border-red-600 text-white shadow-xl mt-6">
          <CardContent className="p-4">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-6 border-2 border-white animate-pulse">
              <AlertTriangle size={24} className="mr-2" />
              {t('emergencyButton')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
