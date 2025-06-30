
import React, { useState } from 'react';
import { ArrowLeft, Sun, Cloud, CloudRain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const WeatherForecast: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('HARI INI');

  const tabs = ['HARI INI', 'BESOK'];

  const todayForecast = [
    {
      location: 'Kepulauan Seribu',
      periods: [
        { time: 'Pagi', icon: Sun, condition: 'Hujan Ringan' },
        { time: 'Siang', icon: CloudRain, condition: 'Hujan Ringan' },
        { time: 'Malam', icon: CloudRain, condition: 'Hujan Ringan' }
      ]
    },
    {
      location: 'Jakarta Utara',
      periods: [
        { time: 'Pagi', icon: Cloud, condition: 'Berawan' },
        { time: 'Siang', icon: CloudRain, condition: 'Hujan Ringan' },
        { time: 'Malam', icon: CloudRain, condition: 'Hujan Ringan' }
      ]
    },
    {
      location: 'Jakarta Pusat',
      periods: [
        { time: 'Pagi', icon: Cloud, condition: 'Berawan' },
        { time: 'Siang', icon: Sun, condition: 'Cerah' },
        { time: 'Malam', icon: Sun, condition: 'Cerah' }
      ]
    },
    {
      location: 'Jakarta Selatan',
      periods: [
        { time: 'Pagi', icon: Cloud, condition: 'Berawan' },
        { time: 'Siang', icon: Sun, condition: 'Cerah' },
        { time: 'Malam', icon: Sun, condition: 'Cerah' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-4 text-white">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-bold">Prakiraan Cuaca</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-4 bg-white/20 rounded-lg p-1">
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
        <div className="bg-white rounded-t-3xl -mx-4 px-4 py-6 min-h-96">
          <div className="space-y-4">
            {todayForecast.map((area, index) => (
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
                        <p className="text-xs text-gray-600">{period.condition}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Sumber: Badan Meteorologi, Klimatologi, dan Geofisika
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
