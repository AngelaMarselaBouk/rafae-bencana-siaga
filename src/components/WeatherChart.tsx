
import React from 'react';
import { ArrowLeft, Calendar, Cloud, Sun, CloudRain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const WeatherChart: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-4 text-white">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-bold">Pompa Pasar Ikan</h1>
        </div>

        {/* Chart Card */}
        <Card className="shadow-lg mb-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-800">Grafik Status 24 Jam Terakhir</CardTitle>
            <div className="text-xs text-gray-600">
              <p>⏰ Kemarin, 12:00 s/d Hari ini, 11:30</p>
              <p>Status Terakhir: 209 cm (Siaga 2)</p>
            </div>
            <div className="flex gap-4 text-xs text-gray-600">
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                &lt;170 cm (Normal)
              </span>
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                175 - 200 cm (Siaga 3)
              </span>
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                &gt;200 cm (Siaga 2)
              </span>
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                &gt;250 cm (Siaga 1)
              </span>
            </div>
          </CardHeader>
          <CardContent>
            {/* Chart Container */}
            <div className="h-64 relative bg-gradient-to-t from-blue-50 to-transparent rounded-lg p-4 border">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-4">
                <span>250</span>
                <span>225</span>
                <span>200</span>
                <span>175</span>
                <span>150</span>
                <span>125</span>
                <span>100</span>
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
                    points="0,180 50,160 100,140 150,120 200,100 250,80 300,60 350,40"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="3"
                  />
                  <polygon
                    points="0,180 50,160 100,140 150,120 200,100 250,80 300,60 350,40 350,220 0,220"
                    fill="url(#chartGradient)"
                  />
                  
                  {/* Data points */}
                  <circle cx="0" cy="180" r="4" fill="#3B82F6" />
                  <circle cx="50" cy="160" r="4" fill="#3B82F6" />
                  <circle cx="100" cy="140" r="4" fill="#3B82F6" />
                  <circle cx="150" cy="120" r="4" fill="#3B82F6" />
                  <circle cx="200" cy="100" r="4" fill="#3B82F6" />
                  <circle cx="250" cy="80" r="4" fill="#3B82F6" />
                  <circle cx="300" cy="60" r="4" fill="#3B82F6" />
                  <circle cx="350" cy="40" r="4" fill="#3B82F6" />
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
