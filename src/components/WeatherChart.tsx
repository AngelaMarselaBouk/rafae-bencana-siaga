
import React, { useState } from 'react';
import { ArrowLeft, Calendar, Cloud, Sun, CloudRain, MapPin, Video, History } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const WeatherChart: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [activeView, setActiveView] = useState('chart');

  const renderContent = () => {
    switch (activeView) {
      case 'map':
        return (
          <div className="h-80 relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-4 border flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-blue-600 mx-auto mb-2" size={48} />
              <p className="text-blue-700 font-medium">Peta Lokasi</p>
              <p className="text-blue-600 text-sm">Pos Pengamatan Atambua Pusat</p>
            </div>
          </div>
        );
      
      case 'cctv':
        return (
          <div className="h-80 relative bg-gray-800 rounded-lg p-4 border flex items-center justify-center">
            <div className="text-center text-white">
              <Video className="mx-auto mb-2" size={48} />
              <p className="font-medium">CCTV Live Feed</p>
              <p className="text-sm opacity-70">Pos Pengamatan Atambua Pusat</p>
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
                LIVE
              </div>
            </div>
          </div>
        );
      
      case 'history':
        return (
          <div className="h-80 relative bg-gradient-to-t from-purple-50 to-transparent rounded-lg p-4 border">
            <div className="text-center mb-4">
              <History className="text-purple-600 mx-auto mb-2" size={24} />
              <p className="text-purple-700 font-medium text-sm">Data Historis 7 Hari</p>
            </div>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between p-2 bg-purple-50 rounded">
                <span>2024-01-14</span>
                <span>142 cm (Normal)</span>
              </div>
              <div className="flex justify-between p-2 bg-purple-50 rounded">
                <span>2024-01-13</span>
                <span>138 cm (Normal)</span>
              </div>
              <div className="flex justify-between p-2 bg-purple-50 rounded">
                <span>2024-01-12</span>
                <span>145 cm (Normal)</span>
              </div>
              <div className="flex justify-between p-2 bg-purple-50 rounded">
                <span>2024-01-11</span>
                <span>148 cm (Siaga 3)</span>
              </div>
              <div className="flex justify-between p-2 bg-purple-50 rounded">
                <span>2024-01-10</span>
                <span>144 cm (Normal)</span>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="h-80 relative bg-gradient-to-t from-blue-50 to-transparent rounded-lg p-4 border">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-4">
              <span>200</span>
              <span>180</span>
              <span>160</span>
              <span>140</span>
              <span>120</span>
              <span>100</span>
              <span>80</span>
            </div>
            
            {/* Chart Area */}
            <div className="ml-8 h-full relative">
              <svg className="w-full h-full">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                {/* Danger zones */}
                <rect x="0" y="0" width="100%" height="20%" fill="rgba(239, 68, 68, 0.1)" />
                <rect x="0" y="20%" width="100%" height="15%" fill="rgba(245, 158, 11, 0.1)" />
                <rect x="0" y="35%" width="100%" height="15%" fill="rgba(234, 179, 8, 0.1)" />
                
                {/* Chart line */}
                <polyline
                  points="0,160 50,150 100,140 150,135 200,145 250,148 300,142 350,145"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                />
                <polygon
                  points="0,160 50,150 100,140 150,135 200,145 250,148 300,142 350,145 350,260 0,260"
                  fill="url(#chartGradient)"
                />
                
                {/* Data points */}
                <circle cx="0" cy="160" r="4" fill="#3B82F6" />
                <circle cx="50" cy="150" r="4" fill="#3B82F6" />
                <circle cx="100" cy="140" r="4" fill="#3B82F6" />
                <circle cx="150" cy="135" r="4" fill="#3B82F6" />
                <circle cx="200" cy="145" r="4" fill="#3B82F6" />
                <circle cx="250" cy="148" r="4" fill="#3B82F6" />
                <circle cx="300" cy="142" r="4" fill="#3B82F6" />
                <circle cx="350" cy="145" r="4" fill="#3B82F6" />
              </svg>
            </div>
            
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-500">
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
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-6 text-white max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold">Pos Pengamatan Atambua Pusat</h1>
        </div>

        {/* Chart Card */}
        <Card className="shadow-lg mb-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-gray-800">
              {activeView === 'chart' && 'Grafik Status 24 Jam Terakhir'}
              {activeView === 'map' && 'Peta Lokasi Pos Pengamatan'}
              {activeView === 'cctv' && 'Pemantauan CCTV Live'}
              {activeView === 'history' && 'Data Historis Terdahulu'}
            </CardTitle>
            <div className="text-sm text-gray-600">
              <p>⏰ Kemarin, 12:00 s/d Hari ini, 11:30</p>
              <p>Status Terakhir: 145 cm (Normal)</p>
            </div>
            {activeView === 'chart' && (
              <div className="flex gap-4 text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  &lt;120 cm (Normal)
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  120 - 150 cm (Siaga 3)
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  &gt;150 cm (Siaga 2)
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  &gt;180 cm (Siaga 1)
                </span>
              </div>
            )}
          </CardHeader>
          <CardContent>
            {renderContent()}

            {/* Chart Controls */}
            <div className="flex justify-center gap-2 mt-4">
              <Button 
                size="sm" 
                className={`text-xs ${activeView === 'chart' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setActiveView('chart')}
              >
                GRAFIK
              </Button>
              <Button 
                size="sm" 
                className={`text-xs ${activeView === 'map' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setActiveView('map')}
              >
                PETA
              </Button>
              <Button 
                size="sm" 
                className={`text-xs ${activeView === 'cctv' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setActiveView('cctv')}
              >
                CCTV
              </Button>
              <Button 
                size="sm" 
                className={`text-xs ${activeView === 'history' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setActiveView('history')}
              >
                DAERAH TERDAHULU
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
