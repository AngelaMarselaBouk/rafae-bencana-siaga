
import React from 'react';
import { ArrowLeft, Calendar, Cloud, Sun, CloudRain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const WeatherChart: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-6 text-white max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold">Stasiun Atambua Pusat</h1>
        </div>

        {/* Chart Card */}
        <Card className="shadow-lg mb-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-gray-800">Grafik Status 24 Jam Terakhir</CardTitle>
            <div className="text-sm text-gray-600">
              <p>⏰ Kemarin, 12:00 s/d Hari ini, 11:30</p>
              <p>Status Terakhir: 145 cm (Normal)</p>
            </div>
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
          </CardHeader>
          <CardContent>
            {/* Chart Container */}
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

            {/* Chart Controls */}
            <div className="flex justify-center gap-2 mt-4">
              <Button size="sm" className="bg-cyan-500 text-white text-xs">GRAFIK</Button>
              <Button size="sm" variant="outline" className="text-xs">PETA</Button>
              <Button size="sm" variant="outline" className="text-xs">CCTV</Button>
              <Button size="sm" variant="outline" className="text-xs">DAERAH TERDAHULU</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
