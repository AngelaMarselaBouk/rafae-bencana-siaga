
import React from 'react';
import { ArrowLeft, Calendar, Cloud, Sun, CloudRain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const WeatherChart: React.FC = () => {
  const chartData = [
    { time: '00:00', value: 0 },
    { time: '03:00', value: 15 },
    { time: '06:00', value: 45 },
    { time: '09:00', value: 20 },
    { time: '12:00', value: 5 },
    { time: '15:00', value: 25 },
    { time: '18:00', value: 35 },
    { time: '21:00', value: 10 },
  ];

  const weatherForecast = [
    { day: 'Hari Ini', icon: CloudRain, temp: 'Pagi: 26°C', desc: 'Hujan Ringan' },
    { day: 'Jakarta Utara', icon: Cloud, temp: 'Siang: 29°C', desc: 'Berawan' },
    { day: 'Jakarta Pusat', icon: CloudRain, temp: 'Sore: 27°C', desc: 'Hujan Ringan' },
    { day: 'Jakarta Selatan', icon: Sun, temp: 'Malam: 25°C', desc: 'Cerah' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-4 text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-white p-2">
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-lg font-bold">Grafik Status 24 Jam Terakhir</h1>
          </div>
        </div>

        {/* Chart Card */}
        <Card className="shadow-lg mb-4">
          <CardHeader>
            <CardTitle className="text-sm text-gray-800">Kemarin, 12:00 s/d Hari ini, 11:30</CardTitle>
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <span>Stasiun Terbanyak: 209 cm (Stasiun 3)</span>
              <span>🟡 200 cm (Siaga 3)</span>
            </div>
          </CardHeader>
          <CardContent>
            {/* Simple Chart */}
            <div className="h-40 relative bg-gradient-to-t from-blue-50 to-transparent rounded-lg p-4">
              <svg className="w-full h-full">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <polyline
                  points="0,120 50,100 100,60 150,80 200,110 250,85 300,70 350,95"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                />
                <polygon
                  points="0,120 50,100 100,60 150,80 200,110 250,85 300,70 350,95 350,140 0,140"
                  fill="url(#chartGradient)"
                />
              </svg>
              
              {/* Chart Labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
                <span>12:00</span>
                <span>15:00</span>
                <span>18:00</span>
                <span>21:00</span>
                <span>00:00</span>
                <span>03:00</span>
                <span>06:00</span>
                <span>09:00</span>
              </div>
            </div>

            {/* Chart Controls */}
            <div className="flex justify-center gap-2 mt-4">
              <Button size="sm" className="bg-blue-500 text-white text-xs">GRAFIK</Button>
              <Button size="sm" variant="outline" className="text-xs">PETA</Button>
              <Button size="sm" variant="outline" className="text-xs">CCTV</Button>
              <Button size="sm" variant="outline" className="text-xs">DASBOR TERDAHULU</Button>
            </div>
          </CardContent>
        </Card>

        {/* Weather Forecast */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-sm text-gray-800 flex items-center gap-2">
              <Calendar size={16} />
              Prakiraan Cuaca
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {weatherForecast.map((weather, index) => {
                const IconComponent = weather.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <IconComponent className="text-blue-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-gray-800">{weather.day}</p>
                      <p className="text-xs text-gray-600">{weather.temp}</p>
                      <p className="text-xs text-blue-600">{weather.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
