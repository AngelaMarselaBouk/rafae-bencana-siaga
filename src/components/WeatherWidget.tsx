
import React, { useState } from 'react';
import { Sun, Cloud, CloudRain, Thermometer, Droplets, Wind, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const WeatherWidget: React.FC = () => {
  const [currentDay, setCurrentDay] = useState(0);

  const weatherData = [
    {
      day: 'Hari Ini',
      date: '2 Juli 2025',
      periods: [
        { time: 'Pagi', temp: '24°C', icon: Sun, condition: 'Cerah', rain: '0%' },
        { time: 'Siang', temp: '28°C', icon: CloudRain, condition: 'Hujan Ringan', rain: '60%' },
        { time: 'Malam', temp: '22°C', icon: Cloud, condition: 'Berawan', rain: '20%' }
      ]
    },
    {
      day: 'Besok',
      date: '3 Juli 2025',
      periods: [
        { time: 'Pagi', temp: '23°C', icon: CloudRain, condition: 'Hujan Ringan', rain: '70%' },
        { time: 'Siang', temp: '27°C', icon: Cloud, condition: 'Berawan', rain: '30%' },
        { time: 'Malam', temp: '21°C', icon: Sun, condition: 'Cerah', rain: '10%' }
      ]
    },
    {
      day: 'Lusa',
      date: '4 Juli 2025',
      periods: [
        { time: 'Pagi', temp: '25°C', icon: Sun, condition: 'Cerah', rain: '5%' },
        { time: 'Siang', temp: '30°C', icon: Sun, condition: 'Cerah', rain: '0%' },
        { time: 'Malam', temp: '24°C', icon: Cloud, condition: 'Berawan', rain: '15%' }
      ]
    }
  ];

  const currentWeather = weatherData[currentDay];

  const nextDay = () => {
    setCurrentDay((prev) => (prev + 1) % weatherData.length);
  };

  const prevDay = () => {
    setCurrentDay((prev) => (prev - 1 + weatherData.length) % weatherData.length);
  };

  return (
    <Card className="bg-white/20 backdrop-blur-sm border-white/30 shadow-xl mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-white text-base flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cloud size={20} />
            Prediksi Cuaca 3 Hari
          </div>
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white/80 hover:text-white p-1"
              onClick={prevDay}
            >
              <ChevronLeft size={16} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white/80 hover:text-white p-1"
              onClick={nextDay}
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="text-center mb-3">
          <h3 className="text-white font-medium">{currentWeather.day}</h3>
          <p className="text-white/70 text-sm">{currentWeather.date}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {currentWeather.periods.map((period, index) => {
            const IconComponent = period.icon;
            return (
              <div key={index} className="text-center bg-white/10 rounded-lg p-3">
                <p className="text-xs text-white/80 mb-2">{period.time}</p>
                <div className="flex justify-center mb-2">
                  <IconComponent 
                    className={`${
                      period.icon === Sun ? 'text-yellow-300' : 
                      period.icon === Cloud ? 'text-gray-300' : 
                      'text-blue-300'
                    }`} 
                    size={20} 
                  />
                </div>
                <p className="text-white font-medium text-sm">{period.temp}</p>
                <p className="text-xs text-white/70 mb-1">{period.condition}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-white/70">
                  <Droplets size={10} />
                  <span>{period.rain}</span>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="flex items-center justify-center gap-2 mt-3">
          {weatherData.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentDay ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
