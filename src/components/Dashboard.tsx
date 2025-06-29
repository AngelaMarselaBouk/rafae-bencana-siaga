
import React, { useState } from 'react';
import { AlertTriangle, Cloud, Droplets, Languages, Bell, MapPin, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const Dashboard: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [waterLevel, setWaterLevel] = useState<'normal' | 'warning' | 'alert' | 'danger'>('normal');
  const [weather, setWeather] = useState<'sunny' | 'cloudy' | 'rainy' | 'stormy'>('cloudy');

  const getWaterLevelColor = (level: string) => {
    switch (level) {
      case 'normal': return 'text-green-600 bg-green-50 border-green-200';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'alert': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'danger': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case 'sunny': return '☀️';
      case 'cloudy': return '☁️';
      case 'rainy': return '🌧️';
      case 'stormy': return '⛈️';
      default: return '☁️';
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{t('floodDetection')}</h1>
          <p className="text-gray-600 text-sm">Desa Rafae, Belu-NTT</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === 'id' ? 'tet' : 'id')}
            className="flex items-center gap-1"
          >
            <Languages size={16} />
            {language === 'id' ? 'ID' : 'TET'}
          </Button>
          <Button variant="outline" size="sm">
            <Bell size={16} />
          </Button>
        </div>
      </div>

      {/* Emergency Button */}
      <Card className="bg-red-500 border-red-600 text-white shadow-lg">
        <CardContent className="p-4">
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-6 border-2 border-white animate-pulse">
            <AlertTriangle size={24} className="mr-2" />
            {t('emergencyButton')}
          </Button>
        </CardContent>
      </Card>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Cloud className="text-blue-500" size={20} />
              {t('weatherStatus')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{getWeatherIcon(weather)}</span>
              <div>
                <p className="font-semibold text-gray-800">{t(weather)}</p>
                <p className="text-sm text-gray-600">25°C, 80% RH</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Droplets className="text-blue-500" size={20} />
              {t('waterLevel')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`p-3 rounded-lg border-2 ${getWaterLevelColor(waterLevel)}`}>
              <p className="font-bold text-lg">{t(waterLevel)}</p>
              <p className="text-sm">1.2m dari normal</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Aksi Cepat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-16 flex flex-col gap-1">
              <MapPin className="text-blue-500" size={20} />
              <span className="text-xs">Lihat Peta</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col gap-1">
              <FileText className="text-green-500" size={20} />
              <span className="text-xs">Buat Laporan</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">{t('lastReports')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <AlertTriangle className="text-yellow-600" size={16} />
              <div className="flex-1">
                <p className="text-sm font-medium">Jalan Utama Tergenang</p>
                <p className="text-xs text-gray-600">5 menit lalu • RT 02</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <AlertTriangle className="text-orange-600" size={16} />
              <div className="flex-1">
                <p className="text-sm font-medium">Sungai Meluap</p>
                <p className="text-xs text-gray-600">15 menit lalu • RT 01</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
