
import React, { useState } from 'react';
import { ArrowLeft, Sun, Cloud, CloudRain, Thermometer, Droplets, Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const WeatherForecast: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('HARI INI');

  const tabs = ['HARI INI', 'BESOK', '7 HARI'];

  const todayForecast = [
    {
      location: 'Atambua Pusat',
      periods: [
        { time: 'Pagi', icon: Sun, condition: 'Cerah', temp: '24°C' },
        { time: 'Siang', icon: CloudRain, condition: 'Hujan Ringan', temp: '28°C' },
        { time: 'Malam', icon: Cloud, condition: 'Berawan', temp: '22°C' }
      ]
    },
    {
      location: 'Kabupaten Belu Utara',
      periods: [
        { time: 'Pagi', icon: Cloud, condition: 'Berawan', temp: '23°C' },
        { time: 'Siang', icon: CloudRain, condition: 'Hujan Sedang', temp: '26°C' },
        { time: 'Malam', icon: CloudRain, condition: 'Hujan Ringan', temp: '21°C' }
      ]
    },
    {
      location: 'Kabupaten Belu Selatan',
      periods: [
        { time: 'Pagi', icon: Sun, condition: 'Cerah', temp: '25°C' },
        { time: 'Siang', icon: Sun, condition: 'Cerah', temp: '30°C' },
        { time: 'Malam', icon: Cloud, condition: 'Berawan', temp: '23°C' }
      ]
    },
    {
      location: 'Motaain',
      periods: [
        { time: 'Pagi', icon: Cloud, condition: 'Berawan', temp: '24°C' },
        { time: 'Siang', icon: CloudRain, condition: 'Hujan Ringan', temp: '27°C' },
        { time: 'Malam', icon: CloudRain, condition: 'Hujan Ringan', temp: '22°C' }
      ]
    }
  ];

  const tomorrowForecast = [
    {
      location: 'Atambua Pusat',
      periods: [
        { time: 'Pagi', icon: CloudRain, condition: 'Hujan Ringan', temp: '23°C' },
        { time: 'Siang', icon: Cloud, condition: 'Berawan', temp: '29°C' },
        { time: 'Malam', icon: Sun, condition: 'Cerah', temp: '24°C' }
      ]
    },
    {
      location: 'Kabupaten Belu Utara',
      periods: [
        { time: 'Pagi', icon: CloudRain, condition: 'Hujan Sedang', temp: '22°C' },
        { time: 'Siang', icon: CloudRain, condition: 'Hujan Ringan', temp: '25°C' },
        { time: 'Malam', icon: Cloud, condition: 'Berawan', temp: '20°C' }
      ]
    },
    {
      location: 'Kabupaten Belu Selatan',
      periods: [
        { time: 'Pagi', icon: Cloud, condition: 'Berawan', temp: '24°C' },
        { time: 'Siang', icon: Sun, condition: 'Cerah', temp: '31°C' },
        { time: 'Malam', icon: Sun, condition: 'Cerah', temp: '25°C' }
      ]
    },
    {
      location: 'Motaain',
      periods: [
        { time: 'Pagi', icon: CloudRain, condition: 'Hujan Ringan', temp: '23°C' },
        { time: 'Siang', icon: Cloud, condition: 'Berawan', temp: '28°C' },
        { time: 'Malam', icon: Cloud, condition: 'Berawan', temp: '21°C' }
      ]
    }
  ];

  const weeklyForecast = [
    { day: 'Hari Ini', date: '2/7', icon: Cloud, condition: 'Berawan', high: '28°C', low: '22°C', rain: '20%' },
    { day: 'Besok', date: '3/7', icon: CloudRain, condition: 'Hujan Ringan', high: '26°C', low: '20°C', rain: '70%' },
    { day: 'Kamis', date: '4/7', icon: CloudRain, condition: 'Hujan Sedang', high: '24°C', low: '19°C', rain: '80%' },
    { day: 'Jumat', date: '5/7', icon: Cloud, condition: 'Berawan', high: '27°C', low: '21°C', rain: '30%' },
    { day: 'Sabtu', date: '6/7', icon: Sun, condition: 'Cerah', high: '30°C', low: '23°C', rain: '10%' },
    { day: 'Minggu', date: '7/7', icon: Sun, condition: 'Cerah', high: '31°C', low: '24°C', rain: '5%' },
    { day: 'Senin', date: '8/7', icon: Cloud, condition: 'Berawan', high: '29°C', low: '22°C', rain: '25%' }
  ];

  const currentForecast = activeTab === 'HARI INI' ? todayForecast : activeTab === 'BESOK' ? tomorrowForecast : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-6 text-white max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold">Perkiraan Cuaca - Atambua</h1>
        </div>

        {/* Current Weather Info */}
        <Card className="bg-white/20 backdrop-blur-sm border-white/30 text-white shadow-xl mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Cloud size={32} className="text-white" />
                <div>
                  <h3 className="font-bold text-xl">Cuaca Hari Ini</h3>
                  <p className="text-sm text-white/80">Atambua, Belu - 2 Juli 2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">28°C</p>
                <p className="text-sm">Berawan</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <Droplets size={20} className="mx-auto mb-2" />
                <p className="text-xs">Curah Hujan</p>
                <p className="font-bold text-sm">2mm</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <Wind size={20} className="mx-auto mb-2" />
                <p className="text-xs">Angin</p>
                <p className="font-bold text-sm">5 km/h</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <Thermometer size={20} className="mx-auto mb-2" />
                <p className="text-xs">Kelembaban</p>
                <p className="font-bold text-sm">75%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-white/20 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab
                  ? 'bg-white text-cyan-600'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Forecast Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === '7 HARI' ? (
            /* 7-Day Forecast View */
            <div className="space-y-3">
              <h3 className="font-semibold text-cyan-600 mb-4">Perkiraan Cuaca 7 Hari</h3>
              {weeklyForecast.map((day, index) => {
                const IconComponent = day.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                        <IconComponent 
                          className={`${
                            day.icon === Sun ? 'text-yellow-500' : 
                            day.icon === Cloud ? 'text-gray-500' : 
                            'text-blue-500'
                          }`} 
                          size={20} 
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{day.day}</p>
                        <p className="text-xs text-gray-500">{day.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Kondisi</p>
                        <p className="text-sm font-medium">{day.condition}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Hujan</p>
                        <p className="text-sm font-medium text-blue-600">{day.rain}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Temp</p>
                        <p className="text-sm font-medium">
                          <span className="text-red-500">{day.high}</span>
                          <span className="text-gray-400 mx-1">/</span>
                          <span className="text-blue-500">{day.low}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Daily/Tomorrow Forecast View */
            <div className="grid gap-6 md:grid-cols-2">
              {currentForecast?.map((area, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-cyan-600 mb-3">{area.location}</h3>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {area.periods.map((period, periodIndex) => {
                      const IconComponent = period.icon;
                      return (
                        <div key={periodIndex} className="text-center">
                          <p className="text-xs font-medium text-gray-600 mb-2">{period.time}</p>
                          <div className="flex justify-center mb-2">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                              <IconComponent 
                                className={`${
                                  period.icon === Sun ? 'text-yellow-500' : 
                                  period.icon === Cloud ? 'text-gray-500' : 
                                  'text-blue-500'
                                }`} 
                                size={24} 
                              />
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 mb-1">{period.condition}</p>
                          <p className="text-xs font-medium text-blue-600">{period.temp}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Sumber: Badan Meteorologi, Klimatologi, dan Geofisika - Pos Meteorologi Atambua
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
